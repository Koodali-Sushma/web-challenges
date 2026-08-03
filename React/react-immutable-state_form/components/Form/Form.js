import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

const initialData = {
  name: "Mount Everest",
  values: {
    altitude: 8848,
    mountainRange: "Himalayas",
  },
};
export default function Form({ initialData = {} }) {
  const [mountains, updateMountains] = useImmer({ initialData });

  function handleNameChange(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("new Mountain Name: ", data.name);

    updateMountain((draft) => {
      const newMountainName = data.name;
      mountain.name = newMountainName;
    });
  }

  function handleAltitudeChange(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("new Altitude: ", data.values.altitude);

    updateMountain((draft) => {
      const newAltitude = data.values.altitude;
      mountain.values.altitude = newAltitude;
    });
  }

  function handleMountainRangeChange(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("new mountain Range: ", data.values.mountainRange);

    updateMountain((draft) => {
      const newMountainRange = data.values.mountainRange;
      mountain.values.mountainRange = newMountainRange;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
