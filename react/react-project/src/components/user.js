import React, {useState, useEffect} from "react";

const User = (props) => {
  // To update the planet, we have two things
  // 1) value
  // 2) the function to update the state

  const [planet, setPlanet] = useState("earth");

  // ComponentDidmount
  useEffect(() => {
    // setPlanet("Mars");
    console.log("component is mounting");
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("Planet Changes");
  }, [planet]);




  console.log("planet");

  return (
    <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <button onClick={()=> setPlanet("Pluto")}>{planet}</button>
    </div>
  );
}

export default User;




// props --> properties/parameters(means data passing from one component to another)

// State --> A set of data that an individual component holds
