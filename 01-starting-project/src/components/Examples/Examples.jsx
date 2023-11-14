import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data";

export default function Examples() {
  //must be called inside components or other hooks
  //accepts the default value if you want to store
  //useState returns an array with 2 elements, the first one is the current State and the second one is a function to update the state, it also tells react to rerender
  const [topic, setTopic] = useState();

  function selectHandle(selectButton) {
    //so when this function is triggered the state will be updated with the value passed
    setTopic(selectButton);
  }

  return (
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
  );
}
