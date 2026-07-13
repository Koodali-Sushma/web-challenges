export default function App() {
  return (
    <div>
      {/*Function call and passing parameter in react way */}
      <Greeting name="Sushma" />

      <Greeting name="Klaus" />
    </div>
  );
}

function Greeting({ name }) {
  //check if the name matches coach name
  if (name === "Klaus") return <h1>Hello Coach!!!!</h1>;
  //if not coach
  return <h1>Hello!!!!, {name}</h1>;
}
