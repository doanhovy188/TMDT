import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { AccountCircle, VpnKey, Search } from '@material-ui/icons';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 220, borderRadius: '5em' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      </IconButton>
      <InputBase
        sx={{ ml: 0.5, flex: 0.5 }}
        placeholder="Username"
        inputProps={{ 'aria-label': 'Username' }}
      />
    </Paper>
  );
}