import CoreConcept from "../CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "../../data";
import compImg from "../../assets/components.png"


export default function CoreTag(){
    return(
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
    );
}