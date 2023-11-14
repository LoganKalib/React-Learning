import Header from "./components/Header/Header";
import CoreTag from "./components/CoreTag/CoreTag";
import Examples from "./components/Examples/Examples";

// so to make the UI change with updates we need to use react state and hooks
// this is a type of variable that react will watch for changes and update the UI
// functions that start with "use" are known as hooks
import { useState, Fragment } from "react";
// fragment is a wrapper tag that helps components return a single element without declearing <div>

function App() {
  return (
    <Fragment>
      {/*we can call components that render HTML within other components, using the below syntax */}
      <Header />
      <main>
        <CoreTag />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
