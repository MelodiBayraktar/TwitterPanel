import React from "react";
import MessageCard from "./MessageCard";
import { tweetsMockData } from "../_mock/tweets";
import {
  Box,
  ButtonBase,
  Avatar,
  Typography,
  Paper,
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
      {tweetsMockData.map((message, index) => (
        <Card  xs={12} key={index}>
          <ButtonBase
            onClick={() => handleCardClick(message.userId)}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: 4,
              pt: 4,
            }}
          >
            <Avatar>
              {message.name[0]}
              {message.lastname[0]}
            </Avatar>
            <Typography sx={{ mt: 2, mb: 2 }} variant="subtitle2">
              {message.name} {message.lastname}
            </Typography>
          </ButtonBase>
          <MessageCard message={message} />
        </Card>
      ))}
    </>
  );
}

export default LastMessages;
