import compImg from "./assets/components.png";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcepts";

// we import the array that is defined in data file
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      {/*we can call components that render HTML within other components, using the below syntax */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {/*in this section we use the component we created above, and define props/properties. 
          these custom properties are given values that is used by the component, to create the list items*/}
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              image={compImg}
            />
            {/* once imported, we can also then use the core_concepts to populate our props*/}
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            {/* if the objects key value pairs is the same as our props we can use a shorthand,
            to populate them*/}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
