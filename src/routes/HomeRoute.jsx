import React from "react";

function HomeRoute() {

    const buttonClickHandler = () => {
        console.log("The button is clicked");
    }

  return (
    <React.Fragment>
      <p>This is the Home Page</p>
      <button onClick={buttonClickHandler} >click me!</button>
    </React.Fragment>
  );
}

export default HomeRoute;
