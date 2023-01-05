import React from "react";
import { Chip, ListItem, ListItemText } from "@mui/material";

const Todo = ({ todo, handleDelete, handleUpdate }) => {
  const chipStyle = {
    width: 80,
    cursor: "pointer",
  };

  return (
    <ListItem style={{ background: "#1976d214", marginBottom: 2 }}>
      <ListItemText
        primary={todo.title}
        secondary={
          <>
            {todo.due_date}
            <Chip
              component={"span"}
              label={todo.status}
              size="small"
              variant="outlined"
              style={{ marginLeft: 10, width: 90 }}
              color={todo.status === "Pending" ? "error" : "success"}
            />
          </>
        }
      />
      <Chip
        title="Edit Todo"
        label="Update"
        color="primary"
        style={chipStyle}
        onClick={() => handleUpdate(todo)}
      />
      <Chip
        title="Delete Todo"
        label="Delete"
        color="error"
        style={chipStyle}
        onClick={() => handleDelete(todo.id)}
      />
    </ListItem>
  );
};

export default Todo;
