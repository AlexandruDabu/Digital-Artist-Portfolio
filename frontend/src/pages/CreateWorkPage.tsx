import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Work } from "../types";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { createWork, getWorkById, updateWork } from "../services/portofolioService";
import ImageUploader from "../components/ImageUploader";


const CreateWorkPage: React.FC = () => { 
    const [formData, setFormData] = useState<Work>({
    title: '',
    description: '',
    clientLink: '',
    imageUrl: '',
    isVisible: true,
    });

    const navigate = useNavigate();


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => prevData ? { ...prevData, [name]: value } : null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            formData.imageUrl = formData.imageUrl ? formData.imageUrl : 'https://plus.unsplash.com/premium_photo-1687991219976-b6edd2eb3375?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            await createWork(formData);
            alert('Work created successfully');
            navigate('/control');
        } catch (error) {
            alert('Failed to update the work details');
        }
    };

    return (
        <Container >
            <Typography variant="h4" gutterBottom>
                Create New Work
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    placeholder="Title"
                    name="title"
                    value={formData?.title}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    placeholder="Description"
                    name="description"
                    value={formData?.description}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />
                <TextField
                    placeholder="Client Url"
                    name="clientLink"
                    value={formData?.clientLink}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <ImageUploader
                    imageUrl={formData?.imageUrl}
                    onImageUpload={(url) => setFormData(prevData => prevData ? { ...prevData, imageUrl: url } : null)}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button type="submit" variant="contained" color="primary">
                        Post Work
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default CreateWorkPage;
