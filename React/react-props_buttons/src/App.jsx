export default function App() {
  // Define actions here in the parent
  function handleFormSubmit() {
    console.log("Form data saved successfully!");
  }

  function handleAccountDelete() {
    console.log("Warning: Account deletion requested.");
  }
  return (
    <div>
      <h1>Button Playground</h1>

      {/* Pass the functions down like any other piece of data */}
      <Button
        color="green"
        text="Submit"
        disabled={false}
        onClick={handleFormSubmit}
      />
      <Button
        color="red"
        text="Danger"
        disabled={false}
        onClick={handleAccountDelete}
      />
      <Button
        color="grey"
        text="Disabled Action"
        disabled={true}
        onClick={() => console.log("You presses a disabled button!")}
      />
    </div>
  );
}
function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ background: color, color: "white", padding: "10px 20px" }}
    >
      {text}
    </button>
  );
}
