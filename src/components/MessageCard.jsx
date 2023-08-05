import React from "react";
import { Paper, Typography, Grid } from "@mui/material";

function MessageCard({ message }) {
  console.log(message);

  return (
    <Grid item xs={12}>
  
      <Paper sx={{ p: 2, m: 1, bgcolor: "#f5f5f5" }}>
        <Typography>{message.message}</Typography>
      </Paper>
    </Grid>
  );
}

export default MessageCard;
