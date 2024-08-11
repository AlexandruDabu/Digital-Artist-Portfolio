import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Work } from "../types";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { getWorkById, updateWork } from "../services/portofolioService";
import ImageUploader from "../components/ImageUploader";


const WorkDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState<Work | null>(null);
    const [work, setWork] = useState<Work | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchWork = async () => {
            try {
                if (id) {
                    const currentWork = await getWorkById(Number(id));
                    setWork(currentWork);
                    setFormData(prevData => ({ ...currentWork, id: currentWork.id, imageUrl: currentWork.imageUrl }));
                }
            } catch (error) {
                setError('Failed loading the work details');
            } finally {
                setLoading(false);
            }
        };
        fetchWork();
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => prevData ? { ...prevData, [name]: value } : null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (formData) {
                await updateWork(formData);
                alert('Work updated successfully');
                navigate('/control');
            }
        } catch (error) {
            alert('Failed to update the work details');
        }
    };

    return (
        <Container >
            <Typography variant="h4" gutterBottom>
                Edit Work Details of Work {work?.title}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    placeholder="Title"
                    name="title"
                    value={formData?.title || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    placeholder="Description"
                    name="description"
                    value={formData?.description || ''}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />
                <TextField
                    placeholder="Client Link"
                    name="clientLink"
                    value={formData?.clientLink || ''}
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
                        Save Changes
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default WorkDetailsPage;
