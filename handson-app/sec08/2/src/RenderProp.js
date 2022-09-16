import React from "react";

const RenderProp = data => (
  <>
    {data.name} - {data.elevation.toLocaleString()}ft
  </>
);

const List = ({ data = [], renderItem, renderEmpty }) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export { RenderProp, List };
