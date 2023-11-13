import compImg from "./assets/components.png";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES } from "./data";

// we import the array that is defined in data file
import { CORE_CONCEPTS } from "./data";

// so to make the UI change with updates we need to use react state and hooks
// this is a type of variable that react will watch for changes and update the UI
// functions that start with "use" are known as hooks
import { useState } from "react";

function App() {
  //must be called inside components or other hooks
  //accepts the default value you want to store
  //useState returns an array with 2 elements, the first one is the current State and the second one is a function to update the state, it also tells react to rerender
  const [topic, setTopic] = useState();

  function selectHandle(selectButton) {
    //so when this function is triggered the state will be updated with the value passed
    setTopic(selectButton);
  }

  return (
    <div>
      {/*we can call components that render HTML within other components, using the below syntax */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            
            {/*
            this is an easier way to create components for a list
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept {...item} />
            ))} 
            */}

            {/*in this section we use the component we created above, and define props/properties. 
          these custom properties are given values that is used by the component, to create the list items*/}
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* we can see how the children prop, allows for text in between the tag. this is known as component composition*/}
            {/*we also pass a function to the component that is used onclick, but to make sure that we identifying the button clicked,
              we need to pass a value that we can use*/}
            <TabButton
              onSelect={() => selectHandle("comp")}
              isSelected={topic === "comp"}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => selectHandle("jsx")}
              isSelected={topic === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => selectHandle("props")}
              isSelected={topic === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => selectHandle("state")}
              isSelected={topic === "state"}
            >
              State
            </TabButton>
          </menu>
          {/* so we import the examples, then use the state as a index value, then finally, the object key*/}

          {/* what is we dont have a state value yet? we need to handle that dynamically. we can use a in-line if*/}
          {!topic ? (
            <p>Please select a topic...</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[topic].title}</h3>
              <p>{EXAMPLES[topic].description}</p>
              <pre>
                <code>{EXAMPLES[topic].code}</code>
              </pre>
            </div>
          )}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
