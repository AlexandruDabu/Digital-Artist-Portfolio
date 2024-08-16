import { useState } from "react";
import { Work } from "../types";
import { Button, Grid, TextField } from "@mui/material";

interface WorkFormProps{
    onSave: (work: Work) => void;
    work?: Work;
}

const WorkForm: React.FC<WorkFormProps> = ({ onSave, work}) => {
    const [formState, setFormState] = useState<Work>({
        id: work?.id || Date.now(),
        title: work?.title || '',
        description: work?.description || '',
        imageurl: work?.imageurl || '',
        clientlink: work?.clientlink || '',
        isvisible: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }
    
    const handleSubmit = () => {
        onSave(formState)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                name="title"
                label="Title"
                value={formState.title}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                name="description"
                label="Description"
                value={formState.description}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                name="imageUrl"
                label="Image URL"
                value={formState.imageurl}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                name="clientLink"
                label="Client URL"
                value={formState.clientlink}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant = "contained" color="primary" onClick={handleSubmit}>
                    Save Work
                </Button>
            </Grid>

        </Grid>
    )
}

export default WorkForm;