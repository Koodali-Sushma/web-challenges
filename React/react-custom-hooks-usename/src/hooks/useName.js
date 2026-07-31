import { useState } from "react";

export default function useName(vorName, nachName) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${firstName} ${lastName}`;

  console.log(fullName);
  return [fullName, setFirstName, setLastName];
}
