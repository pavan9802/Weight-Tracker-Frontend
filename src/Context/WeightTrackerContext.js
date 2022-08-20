import { createContext, useContext, useState } from "react";

const WeightTrackerContext = createContext();

const WeightTrackerProvider = ({ children }) => {
  const [weights, setWeights] = useState([]);
  const [email, setEmail] = useState("");

  function addUser(email) {
    fetch("http://localhost:8080/user/add/user", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: email,
    })
      .then(() => {
        console.log("New user added");
        getAllWeights();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function getAllWeights() {
    await fetch("http://localhost:8080/track/all/" + email)
      .then((res) => res.json())
      .then((result) => {
        setWeights(result);
        console.log(weights);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addWeight(weight) {
    fetch("http://localhost:8080/track/add", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(weight),
    })
      .then(() => {
        getAllWeights();
        console.log("New weight added");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteWeight(id) {
    fetch("http://localhost:8080/track/delete/" + email + "/" + id, {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        getAllWeights();
        console.log("Weight with id " + id + " deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function updateWeight(weight, id) {
    fetch("http://localhost:8080/track/update/" + email + "/" + id, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(weight),
    })
      .then(() => {
        getAllWeights();
        console.log("Weight with id " + id + " edited");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function findByWeight(weight) {
    console.log(weight);
    fetch("http://localhost:8080/track/find/weight/" + email + "/" + weight, {
      method: "Get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result != undefined) {
          setWeights(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <WeightTrackerContext.Provider
      value={{
        weights,
        setWeights,
        getAllWeights,
        addWeight,
        deleteWeight,
        findByWeight,
        updateWeight,
        email,
        setEmail,
        addUser,
      }}
    >
      {children}
    </WeightTrackerContext.Provider>
  );
};

export default WeightTrackerProvider;

export const WeightTrackerState = () => {
  return useContext(WeightTrackerContext);
};
