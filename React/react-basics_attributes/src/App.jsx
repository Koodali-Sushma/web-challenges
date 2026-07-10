import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Welcome to React World!!!</h2>
      <label htmlFor="input__label">Search topics:</label>
      <input
        className="input__label"
        id="input__label"
        type="text"
        placeholder="Type here...."
      />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(software)"
        target="_blank"
        rel="noreferrer"
      >
        Read more about React on Wikipedia
      </a>
    </article>
  );
}
