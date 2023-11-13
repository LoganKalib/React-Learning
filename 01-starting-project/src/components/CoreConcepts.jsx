//the below function takes one value of props, that is an object that holds the props we defined in the app function
export default function CoreConcept(props) {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title} </h3>
        <p>{props.description}</p>
      </li>
    );
  }
  
  // we can also apply destructuring to the prop thats being passed, by use of {}. we need to use prop names
  /* function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title} </h3>
        <p>{description}</p>
      </li>
    );
  } */