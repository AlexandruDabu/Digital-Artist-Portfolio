import { ThemeProvider } from "@emotion/react";
import { alpha, Box, Container, createTheme, CssBaseline, Divider, PaletteMode } from "@mui/material";
import AppAppBar from "./AppBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import getLPTheme from "../getLPTheme";
import Footer from "./Footer";

export default function Layout() {
    const [mode, setMode] = useState<PaletteMode>('dark');
    const LPtheme = createTheme(getLPTheme(mode));
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('authToken'));
      },[])

    const saveToken = () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        localStorage.setItem('authToken', token);
        alert('Token saved to localStorage');
        setIsLoggedIn(true);
        
    }

      const removeToken = () => {
        localStorage.removeItem('authToken');
        alert('Token removed from localSotrage');
        setIsLoggedIn(false);
    }

    return (
        <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} saveToken={saveToken} removeToken={removeToken} isLoggedIn = {isLoggedIn}/>
      <Box sx={{ bgcolor: 'background.default' }}>
      <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
            <Outlet/>
        </Container>
        </Box>
        <Divider/>
        <Footer/>
      </Box>
    </ThemeProvider>
    )
}