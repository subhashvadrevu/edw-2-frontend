import ThemeProvider from './theme';
import { Typography } from '@mui/material';
const App = ()=>{
  return (
    <ThemeProvider>
       <Typography variant='h1'>Hello</Typography>
    </ThemeProvider>
  );
}

export default App
