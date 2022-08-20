import React, { useState } from "react";
import { WeightTrackerState } from "../../Context/WeightTrackerContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Edit from "../Actions/Edit";
import "./Row.css";

export default function Row(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 300,
    bgcolor: "#212529;",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const { deleteWeight } = WeightTrackerState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    deleteWeight(props.singularWeight.id);
  };

  const handleEdit = () => {
    handleOpen();
  };

  return (
    <>
      <tr className="main-row" class="bg-dark text-white font-weight-bold">
        <td>{props.singularWeight.weight}</td>
        <td>{props.singularWeight.date}</td>
        <td>
          <Button
            style={{
              backgroundColor: "gold",
              color: "white",
              padding: "20px",
              fontSize: "20px",
            }}
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </td>
        <td>
          <Button
            style={{
              backgroundColor: "gold",
              color: "white",
              padding: "20px",
              fontSize: "20px",
            }}
            variant="outlined"
            startIcon={<ModeEditIcon />}
            onClick={() => handleEdit()}
          >
            Edit
          </Button>
        </td>
      </tr>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Edit
            onClose={handleClose}
            weight={props.singularWeight.weight}
            date={props.singularWeight.date}
            id={props.singularWeight.id}
          ></Edit>
        </Box>
      </Modal>
    </>
  );
}
