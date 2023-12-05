export default function Places({ title, places, fallbackText, onSelectPlace }) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {places.length > 0 && (
        <ul className="places">
          {places.map((curPlace) => (
            <li key={curPlace.id} className="place-item">
              <button onClick={() => onSelectPlace(curPlace.id)}>
                <img src={curPlace.image.src} alt={curPlace.image.alt} />
                <h3>{curPlace.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
