import React from "react";
import { useParams } from "react-router-dom";
import { usersMockData } from "../_mock/users";
import { tweetsMockData } from "../_mock/tweets";
import { Avatar, Card, CardContent, Typography,Grid,Paper } from "@mui/material";
import MessageCard from "../components/MessageCard";

function UserDetail() {
  const { id } = useParams();
  const user = usersMockData.find((user) => user.id === id);

  if (!user) {
    return <p>User not found</p>;
  }

  const userMessages = tweetsMockData.filter((tweet) => tweet.userId === id);

  return (
    <>
      {" "}
      <Typography variant="h4" sx={{ my: 2 }}>
        User Detail
      </Typography>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              bgcolor: "primary.main",
              mb: 5,
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {user.name[0]}
            {user.lastname[0]}
          </Avatar>
          <Typography color="text.secondary">ID</Typography>
          <Typography variant="h5" gutterBottom>
            {user.id}
          </Typography>
          <Typography color="text.secondary">Name</Typography>
          <Typography variant="h5" gutterBottom>
            {user.name}
          </Typography>
          <Typography color="text.secondary">Surname</Typography>
          <Typography variant="h5" gutterBottom>
            {user.lastname}
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h5" sx={{ my: 2 }}>
        User's Messages
      </Typography>
      {userMessages.length > 0 ? (
        userMessages.map((message)=>(
          <MessageCard message={message} />
        ))
        
      ) : (
        <Grid item xs={12}>
          <Paper sx={{ p: 2, m: 1, bgcolor: "#f5f5f5" }}>
            <Typography>No message...</Typography>
          </Paper>
        </Grid>
      )}
    </>
  );
}

export default UserDetail;
