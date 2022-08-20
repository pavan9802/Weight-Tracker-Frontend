import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { WeightTrackerState } from "../../Context/WeightTrackerContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Edit(props) {
  const [weight, setWeight] = useState(props.weight);
  const [date, setDate] = useState(props.date);
  const [open, setOpen] = React.useState(false);
  const { updateWeight } = WeightTrackerState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  const add = () => {
    if (weight == "" || date == "") {
      setOpen(true);
    } else {
      updateWeight({ weight: weight, date: date }, props.id);
      props.onClose();
    }
  };
  return (
    <>
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-center align-items-center mt-3 text-white">
          <label>
            Enter your weight:
            <input
              type="number"
              placeholder={"lbs"}
              value={weight}
              onChange={onWeightChange}
              min="0"
            ></input>
          </label>
        </div>

        <div class="d-flex justify-content-center align-items-center mt-3  text-white">
          <label>
            Enter a date:
            <input type="date" value={date} onChange={onDateChange}></input>
          </label>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-3 ">
          <button class=" text-white bg-warning w-100 " onClick={add}>
            Edit Weight
          </button>
        </div>
      </div>
      <Snackbar
        class="d-flex justify-content-center align-items-center mt-2"
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please fill in all fields
        </Alert>
      </Snackbar>
    </>
  );
}

export default Edit;
