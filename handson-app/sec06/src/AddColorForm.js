import useInput from "./hooks";
import React from "react";
import { useColors } from "./ColorProvider";

const AddColorForm = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { createColor } = useColors();
  const submit = (e) => {
    e.preventDefault();
    createColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
