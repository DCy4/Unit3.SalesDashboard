import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import DrawerLeft from './components/Drawer'
import Revenue from './components/Revenue'
import Transactions from './components/Transactions.jsx'
import { styled } from '@mui/material/styles';
import { Paper, Grid, Box } from '@mui/material';
import TrafficReceived from './components/TrafficReceived';
import SalesObtained from './components/SalesObtained';
import NewClients from './components/NewClients';
// import TrafficReceived from './components/TrafficReceived'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DrawerLeft/>
      <h4><Heading/></h4>
      <Grid container spacing={2}>
    <Grid item xs={4}>
      <Item><SalesObtained/></Item>
    </Grid>
    <Grid item xs={4}>
      <Item><NewClients/></Item>
    </Grid>
    <Grid item xs={4}>
    <Item><TrafficReceived/></Item>
    </Grid>
    <Grid item xs={6}>
      <Item><Revenue/></Item> 
    </Grid>
    <Grid item xs={6}>
      <Item><Transactions/></Item>
    </Grid>
  </Grid>
      
    </div>    
  )
}

export default App
