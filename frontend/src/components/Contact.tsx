import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        alert('Message Sent Succesfully');
        setFormData({
            name:'',
            email: '',
            message: '',
        })
      };

    return (
        <Container id="contact" maxWidth="md" sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 12 },}}>
        <Typography variant="h4" align="center" gutterBottom>
            Contact Us
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                >
                Send Message
                </Button>
            </Grid>
            </Grid>
        </Box>
        </Container>
    );
};

export default Contact;