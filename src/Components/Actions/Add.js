import React, { useRef, useState } from "react";
import { WeightTrackerState } from "../../Context/WeightTrackerContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Add({ onClose }) {
  const { addWeight, email } = WeightTrackerState();
  const weightRef = useRef();
  const dateRef = useRef();
  const [open, setOpen] = useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const add = () => {
    if (weightRef.current.value == "" || dateRef.current.value == "") {
      setOpen(true);
    } else {
      addWeight({
        email: email,
        weight: weightRef.current.value,
        date: dateRef.current.value,
      });
      onClose();
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
              placeholder="lbs"
              min="0"
              ref={weightRef}
            ></input>
          </label>
        </div>

        <div class="d-flex justify-content-center align-items-center mt-3  text-white">
          <label>
            Enter a date:
            <input type="date" ref={dateRef}></input>
          </label>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-3 ">
          <button class=" text-white bg-warning w-100 " onClick={add}>
            Add Weight
          </button>
        </div>
      </div>
      <Snackbar
        class="d-flex justify-content-center align-items-center mt-2"
        open={open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please fill in all fields
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
