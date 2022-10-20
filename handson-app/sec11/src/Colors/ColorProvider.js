import React, { createContext, useState, useContext } from "react";
import colorData from "./data/color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(colorData);

  const createColor = (title, color) => {
    setColors([...colors, { id: v4(), rating: 0, title, color }]);
  };

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  return (
    <ColorContext.Provider
      value={{ colors, createColor, removeColor, rateColor }}
    >
      {children}
    </ColorContext.Provider>
  );
};
