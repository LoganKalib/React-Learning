import Header from "./components/Header/Header";
import CoreTag from "./components/CoreTag/CoreTag";
import Examples from "./components/Examples/Examples";
import { Fragment } from "react";
// fragment is a wrapper tag that helps components return a single element without declearing <div>

function App() {
  return (
    <Fragment>
      {/*we can call components that render HTML within other components, using the below syntax */}
      <Header />
      <main>
        <CoreTag />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
