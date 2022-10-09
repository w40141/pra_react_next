import { useState } from "react";
import "./App.css";

type AppProps = {
  item: String;
};

export const App = ({ item }: AppProps) => {
  const [fabricColor, setFabricColor] = useState("purple");
  return (
    <div>
      <h1>
        {fabricColor} {item}
      </h1>
      <button onClick={() => setFabricColor("blue")}>
        Make the Jacket Blue
      </button>
    </div>
  );
};
