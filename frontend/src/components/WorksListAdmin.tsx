import { Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Work } from "../types";
import {  useNavigate } from "react-router-dom";

interface WorkListAdminProps{
    works: Work[];
    onDelete: (id: number) => void;
    onHide: (work: Work) => void;
}

const WorksListAdmin: React.FC<WorkListAdminProps> = ({works, onDelete, onHide}) => {
    const navigate=useNavigate();
    const onEdit = (id: number) => {
        navigate(`/workDetails/${id}`)
    }
    return (
        <Grid container spacing={2}>
            {works.map((work) => (
                <Grid item xs={12} sm={6} md={4} key={work.id}>
                    <ButtonBase
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{width: '100%'}}>
                        <Card 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flexGrow: 1,
                            p: 1,
                            minHeight: '400px',
                            maxHeight: '500px'
                        }}>
                            <CardMedia
                                component="img"
                                height="140"
                                width="360"
                                image={work.imageUrl}
                                alt={work.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {work.title}
                                </Typography>
                                <Typography variant="body1">
                                    {work.description}
                                </Typography>
                                <Typography variant="h6">
                                    {work.isVisible ? 'Displayed' : 'Hidden'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" onClick={() => work.id !== undefined && onEdit(work.id)}>Edit</Button>
                                <Button variant="outlined" onClick={() => work.id !== undefined && onDelete(work.id)}>Delete</Button>
                                <Button variant="outlined" onClick={() => onHide(work)}>{work.isVisible ? 'Hide' : 'Display'}</Button>
                            </CardActions>
                        </Card>
                    </ButtonBase>
                </Grid>
            ))}
        </Grid>
    )
}

export default WorksListAdmin;