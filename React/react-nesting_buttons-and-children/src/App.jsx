import React from "react";
import "./styles.css";
import Button from "../components/Button.jsx";

export default function App() {
  return (
    <main>
      <h1>React nesting components-children props </h1>
      {/* 1. Pass plain text between the tags */}
      <Button>Submit Form</Button>
      {/* 2. Pass a different string */}
      <Button>Delete Account</Button>
      {/* 3. The true power of children: 
      You can even pass other HTML tags inside! */}
      <Button>
        <strong>Next Step</strong> ➡️
      </Button>

      <Button>Not Acivated!</Button>
    </main>
  );
}
