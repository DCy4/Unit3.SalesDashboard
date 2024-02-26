import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { mockTransactions } from '../data/transactions';
import Divider from '@mui/material/Divider';

function Transactions() {
  return (
    <>
    <h2>Recent Transactions</h2>
    
    <List
      sx={{
        width: '100%',
        maxWidth: 'auto',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 280,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {mockTransactions.map((txId) => (
        <li key={`tx-${txId}`}>
          <ul>
          <Divider/>
            <ListSubheader>{`Customer:  ${txId.txId}`}</ListSubheader>
            {[{txId}].map((user) => (
              <ListItem key={`item-${txId}-${user}`}>
                <ListItemText primary={`${user.txId.user}`}/>
                <ListItemText secondary={`${user.txId.date}`}></ListItemText>
                <ListItemText secondary={`${user.txId.cost}`}></ListItemText>
                
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    </>
  );
}
export default Transactions;