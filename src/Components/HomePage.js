import React, { useEffect } from "react";
import Navbar from "./NavBar/Navbar";
import Table from "./Table/Table";
import { WeightTrackerState } from "../Context/WeightTrackerContext";
import { useAuth } from "../Context/AuthContext";

export default function HomePage() {
  const { getAllWeights, setEmail } = WeightTrackerState();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      try {
        setEmail(currentUser.email);
        getAllWeights();
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
      <div class="d-flex flex-column bg-dark ">
        <div class="m-1">
          <Navbar />
        </div>
        <div class="d-flex flex-column m-5">
          <Table />
        </div>
      </div>
    </>
  );
}
