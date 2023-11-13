import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const descriptions = ["Fundamentals", "Crucial", "core"];
const getItem = (max) => Math.floor(Math.random() * (max + 1));

export default function Header() {
    return (
      <header>
        {/* using src="src/assets/react-core-concepts.png" can cause issues when deploying, as the image could get lost.
        a better method would be to import the image as see above.*/}
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {/*the below is how we make dynamic content using the const created above*/}
          {descriptions[getItem(2)]} React concepts you will need for almost any
          app you are going to build!
        </p>
      </header>
    );
  }