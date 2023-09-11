import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;
const navItems = ['Inicio', 'Projects' , 'Contacto'];

function Navegador(props) {
    const { window, currentPage, handlePageChange } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item}
                        disablePadding
                        onClick={() => handlePageChange(item)}
                    >
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem
                    disablePadding
                    onClick={() => handlePageChange('IniciarSesion')}
                >
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Iniciar Sesión" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        color='aqua'
                    >
                        Portafolio
                    </Typography>
                    
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{ color: 'aqua' }}
                                onClick={() => handlePageChange(item)}
                                className={currentPage === item ? 'active' : ''}
                            >
                                {item}
                            </Button>
                        ))}
                        <Button
                            sx={{ color: 'aqua' }}
                            onClick={() => handlePageChange('IniciarSesion')}
                            className={currentPage === 'IniciarSesion' ? 'active' : ''}
                            startIcon={<AccountCircleIcon />}
                        >
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Navegador.propTypes = {
    window: PropTypes.func,
    currentPage: PropTypes.string.isRequired,
    handlePageChange: PropTypes.func.isRequired,
};

export default Navegador;
