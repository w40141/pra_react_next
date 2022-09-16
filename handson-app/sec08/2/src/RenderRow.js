import React, { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";

const bigList = [...Array(5000)].map((n, i) => ({
  name: `Taro ${i}`,
  age: i,
}));

const RenderRow = ({ index, style }) => (
  <div style={{ ...style, ...{ display: "flex" } }}>
    <p>
      {bigList[index].name} - {bigList[index].age}
    </p>
  </div>
);

const BigRow = () => (
  <FixedSizeList
    height={window.innerHeight}
    width={window.innerWidth - 20}
    itemCount={bigList.length}
    itemSize={50}
  >
    {RenderRow}
  </FixedSizeList>
);

export {BigRow};
