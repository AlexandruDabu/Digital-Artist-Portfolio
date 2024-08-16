import { Button, Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Container sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
        }}>
            <Typography variant="h4" component="h1" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1">
                Oops! The page you are looking for does not exist.
            </Typography>
            <Button variant="contained" sx={{mt: 2}} onClick={() => navigate('/')}>
                Go Back
            </Button>
        </Container>
    )
}
export default NotFoundPage