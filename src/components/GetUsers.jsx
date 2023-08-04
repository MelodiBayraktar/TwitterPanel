import { usersMockData } from "../_mock/users/";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    setTimeout(() => {
      setUsers(usersMockData);
      setLoading(false);
    }, 1000);
  };

  const columns =[
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "name",
        flex: 1,
        headerName: "First name",
      },
      {
        field: "lastname",
        flex: 1,
        headerName: "Last name",
      },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            label="View"
            icon={<VisibilityIcon />}
            onClick={() => navigateToUser(params.id)}
          />,
        ],
      },
    ]
 
  const navigate = useNavigate();
  const navigateToUser = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="primary" size={150} thickness={5} />
        </Box>
      ) : (
        <Paper sx={{ width: "100%" }}>
          <DataGrid
            rows={users.map((item) => ({
              id: item.id,
              name: item.name,
              lastname: item.lastname,
            }))}
            columns={columns}
            rowSelection={false}
          />
        </Paper>
      )}
    </div>
  );
}

export default GetUsers;
