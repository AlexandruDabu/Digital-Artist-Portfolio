import { useEffect, useState } from "react"
import { deleteWork, getWorks, hideWork } from "../services/portofolioService"
import { Work } from "../types";
import WorksListAdmin from "../components/WorksListAdmin";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminControlPage() {
    const [works, setWorks] = useState<Work[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    const naivgate = useNavigate();

    useEffect(() =>{
        const fetchWork = async() => {
        try{
        const response = await getWorks();
        setWorks(response);
        }catch(err){
            alert('Failed getting data');
        }finally{
            setLoading(false);
        }
    }
    fetchWork();
    },[])
    const onDelete = async(id: number) => {
        try{
            await deleteWork(id);
            setWorks(prevWorks => prevWorks.filter(work => work.id!==id))
        }catch(error){
            alert('Failed deleting the work');
        }
    }

    const onHide = async(work: Work) => {
        try{
            const updatedWork = await hideWork(work);
            setWorks(prevWorks => prevWorks.map(work => (work.id===updatedWork.id ? updatedWork : work)))
        }catch(error){
            alert('Failed hiding the work')
        }
    }

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Button variant="contained" onClick={() => naivgate('/createWork')}>
                    Create New Work
                </Button>
            </Box>
            <WorksListAdmin works={works} onHide={onHide} onDelete={onDelete} />
        </Container>
    )

}