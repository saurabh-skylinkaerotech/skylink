import React from 'react'
import { makeStyles } from '@material-ui/core/styles/';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../../Assets/logo/skyaero.png'

const useStyles = makeStyles({
    root: {
        paddingTop: '20px',
        left: '50%',
        top: '50%',
        position: 'absolute',
        transform: "translate(-50%,-50%)",
        border: '1px solid #929394b6'
    },
    box: {
        color: '#929394b6',
        textAlign: 'center'
    }
});

const Login = () => {
    const classes = useStyles();
    document.title = "Skylink - Login";
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const logincredit = {
            email: data.get('email'),
            password: data.get('password'),
        }
        console.log(logincredit);
    };

    return (
        <Container component="main" maxWidth="xs" className={classes.root}>
            <Box className={classes.box}>
                <img src={Logo} alt="SkyAero" />
                <Typography component="p" mt={3} mb={3}>
                    Enter your email and password below
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        sx={{
                            float: 'left'
                        }}
                    />
                    <FormControlLabel
                        control={<link value="remember" color="primary" />}
                        label="forget password?"
                        sx={{
                            float: 'right',
                            marginRight: '-5px',
                            marginTop: '5px'
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 6,
                            fontSize: '18px',
                            fontWeight: '800',
                            borderRadius: '10px',
                            background: '#3750f5',
                            boxShadow: '0px 1px 10px #3750f5'
                        }}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
        </Container >
    )
}

export default Login