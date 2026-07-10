import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello from my Component!!!</h1>
      <p>This is a paragraph inside article component.</p>
    </article>
  );
}
