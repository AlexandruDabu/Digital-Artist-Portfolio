import { ButtonBase, Card, CardContent, CardMedia, Grid, Typography, Box } from "@mui/material";
import { Work } from "../types";
import React from "react";

interface WorkListProps {
    works: Work[];
}

const WorksList: React.FC<WorkListProps> = ({ works }) => {
    return (
        <Grid container spacing={2}>
            {works.length === 0 ? (
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            minHeight: '200px',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h4">
                            No work to show yet!
                        </Typography>
                    </Box>
                </Grid>
            ) : (
                works.map((work) => work.isVisible && (
                    <Grid item xs={12} sm={6} md={4} key={work.id}>
                        <ButtonBase
                            component="a"
                            href={work.clientLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: '100%' }}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    flexGrow: 1,
                                    p: 1,
                                    height: '300px'
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
                                    <Typography variant="body2">
                                        {work.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </ButtonBase>
                    </Grid>
                ))
            )}
        </Grid>
    );
}

export default WorksList;
