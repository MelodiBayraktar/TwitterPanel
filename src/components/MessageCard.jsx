import React from "react";
import { Paper, Typography, Grid } from "@mui/material";

function MessageCard({ userMessages }) {
    if(!userMessages||userMessages.length===0){
        return(
            <Grid item xs={12}>
        <Paper sx={{ p: 2, m: 1, bgcolor: "#f5f5f5" }}>
          <Typography>No message...</Typography>
        </Paper>
      </Grid>
        )
    }
  return (
    <Grid item xs={12}>
      {userMessages.map((message)=>(
        <Paper sx={{ p: 2, m: 1, bgcolor: "#f5f5f5" }}>
        <Typography>{message.message}</Typography>
      </Paper>
      ))}
    </Grid>
  );
}

export default MessageCard;