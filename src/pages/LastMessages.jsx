import React from "react";
import MessageCard from "../components/MessageCard";
import { tweetsMockData } from "../_mock/tweets";
import {
  Box,
  ButtonBase,
  Avatar,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
function LastMessages() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <>
      <Grid container spacing={2}>
        {tweetsMockData.map((message, index) => (
          <Grid item xs={12} sm={10} md={6} lg={4} key={index}>
            <Card sx={{ height: "100%", bgcolor: "#f5f5f5"}}>
              <ButtonBase
                onClick={() => handleCardClick(message.userId)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 4,
                  pt: 4,
                }}
              >
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <Avatar sx={{bgcolor:'#1B76D2', mr:'15px'}}>
                    {message.name[0]}
                    {message.lastname[0]}
                  </Avatar>
                  <Typography sx={{ mt: 2, mb: 2 }} variant="subtitle2">
                    {message.name} {message.lastname}
                  </Typography>
                </Box>
              </ButtonBase>

              <MessageCard message={message} />
            </Card>{" "}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default LastMessages;
