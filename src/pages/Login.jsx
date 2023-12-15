import SignIn from '../components/SignIn/SignIn';
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import Container from '@mui/material/Container'; 
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Login() {

  return (
     <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
      <Loader />
      <ErrorMessage/>
      <SignIn/>
   </Container>
    </ThemeProvider>
  );
}