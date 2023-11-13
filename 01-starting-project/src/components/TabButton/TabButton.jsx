export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      {/* react auto creates this children prop, this is so that we can use the component as a normal HTML tag*/}
      {/* we can add event listeners very easy to any tags, below is an example of onClick, 
      althrough there are lots you can use the same way, they all take functions as values*/}
      <button onClick={onSelect} className={isSelected ? "active" : undefined}>
        {children}
      </button>
    </li>
  );
}
