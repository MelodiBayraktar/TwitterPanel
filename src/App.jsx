import * as React from 'react';
import SideNav from './components/SideNav';
import Home from './pages/Home';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
    {/* SideNav bileşeni */}
    <SideNav />
    <Box component="main" sx={{ flexGrow: 1, p: 8, overflowY: 'auto' ,m:2}}>
      {/* Diğer bileşenler */}
     
      <Home/>
    </Box>
  </Box>
  );
}

export default App;

