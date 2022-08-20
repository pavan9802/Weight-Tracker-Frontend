import React, { Fragment, useState, useRef } from "react";
import Row from "./Row";
import { WeightTrackerState } from "../../Context/WeightTrackerContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Add from "../Actions/Add";
import "./Table.css";

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
export default function Table() {
  const { weights, findByWeight, getAllWeights } = WeightTrackerState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const searchRef = useRef();

  function handleChange(event) {
    event.preventDefault();
    if (searchRef.current.value == "") {
      getAllWeights();
    } else {
      findByWeight(searchRef.current.value);
    }
  }
  return (
    <div class="d-flex flex-column justify-content-center w-75 align-self-center font-weight-bold">
      <div class="d-flex flex-column ">
        <div class="d-flex justify-content-around mb-3">
          <div class="d-flex align-items-center justify-content-center ">
            <button
              class="btn btn-outline fs-5 text-white bg-warning"
              onClick={handleOpen}
            >
              Add new weight
            </button>
          </div>
          <form class=" d-flex flex-row align-items-center justify-content-center form-inline my-2 my-lg-0 w-50">
            <input
              class="form-control mr-sm-2"
              type="number"
              placeholder="Search by weight"
              ref={searchRef}
              onChange={handleChange}
            />
          </form>
        </div>

        <table class="border border-warning  ">
          <thead>
            <tr class="bg-warning">
              <th>Weight</th>
              <th>Date</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <Fragment>
              {Array.isArray(weights) && weights.length != 0 ? (
                weights.map((weight) => <Row singularWeight={weight}></Row>)
              ) : (
                <>
                  <tr class="text-white ">
                    <td>Nothing Found</td>
                    <td>Nothing Found</td>
                  </tr>
                </>
              )}
            </Fragment>
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Add onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
