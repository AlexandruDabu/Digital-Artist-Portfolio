import * as React from 'react';
import { alpha, CircularProgress, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { User, Work } from '../types';
import { createNewsUser, getWorks } from '../services/portofolioService';
import WorksList from './WorksList';


const Hero:React.FC = () => {
    
    const [works, setWorks] = React.useState<Work[]>([]);
    const [loadingWork,setLoadingWork] = React.useState<boolean>(true);
    const [errorWork,setErrorWork] = React.useState<string|null>(null);
    const [user, setUser] = React.useState<User>({email: ''});
    const [loading, setLoading] = React.useState<boolean>(false);
    const handleSubmit = async() => {
        setLoading(true);
        try{
            await createNewsUser(user);
            alert('Subscribed to newsletter succesfully!')
        }catch(err){
            if(user.email){
                alert('Email already exists');
            }
            else
                alert("Field can't be empty")
        }finally{
            setLoading(false);
            setUser({email: ''});
        }
    }
    
    const handleChange = (e:any) =>{
        const {name,value}  = e.target;
        setUser({...user, [name]: value})
    }

    React.useEffect(() => {
        const fetchWork = async() => {
        try{
            const response = await getWorks();
            setWorks(response);
        }catch(error){
            setErrorWork("Failed loading works");
            console.log(errorWork);
        }finally{
            setLoadingWork(false);
        }
        }
        fetchWork();
    },[])
  return (
    <>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            My latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Art
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >Discover our innovative digital portfolio,
           offering premium artwork crafted to meet your creative vision. 
           Enhance your projects with exceptional designs and unparalleled artistic expertise.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: 'off',
                'aria-label': 'Enter your email address',
              }}
              required
            />
            <Button disabled={loading} onClick={() => handleSubmit()} variant="contained" color="primary">
              {loading ? (<CircularProgress size={20}/>) : ('Subscribe')}
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        {loadingWork ? (
          <Typography
          variant='h4'
          mt={8}
          align="center"
          gutterBottom>
            Loading...
          </Typography>
        ) : (
        <Typography
        variant="h4"
        mt={8}
        align="center"
        gutterBottom>
            My Work
        </Typography>
        )}
        
        <Box
            id="image"
            sx={(theme) => ({
                mt: { xs: 4, sm: 4 },
                alignSelf: 'center',
                width: '100%',
                height: { xs: 300, sm: 800 },
                maxHeight: '80vh',
                backgroundImage:
                  theme.palette.mode === 'light'
                    ? 'url("/static/images/templates/templates-images/hero-light.png")'
                    : 'url("/static/images/templates/templates-images/hero-dark.png")',
                backgroundSize: 'cover',
                borderRadius: '12px',
                outline: '1px solid',
                outlineColor:
                  theme.palette.mode === 'light'
                    ? alpha('#BFCCD9', 0.5)
                    : alpha('#9CCCFC', 0.1),
                boxShadow:
                  theme.palette.mode === 'light'
                    ? `0 0 16px 8px ${alpha('#9CCCFC', 0.3)}`
                    : `0 0 24px 12px ${alpha('#033363', 0.3)}`,
                overflowY: 'auto',
                padding: 4,
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: theme.palette.mode === 'light' ? alpha('#BFCCD9', 0.2) : alpha('#033363', 0.1),
                },
                '&::-webkit-scrollbar-thumb': {
                  background: theme.palette.mode === 'light' ? '#9CCCFC' : '#033363',
                  borderRadius: '6px',
                }
            })}
            >
            <Grid id="home" container spacing={2} >
                <WorksList works={works}/>
            </Grid>
        </Box>
        </>
  );
}

export default Hero