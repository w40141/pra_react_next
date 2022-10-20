import React from "react";
import {useParams} from "react-router-dom";

import {useColors} from "./ColorProvider";

export const ColorDetails = () => {
    const {id} = useParams();
    const {colors} = useColors();

    const foundColor = colors.find(color => color.id === id);

    return (
        <div>
            <div style={{backgroundColor: foundColor.color,
                height: 100, widows:100}}></div>
            <h1>{foundColor.title}</h1>
            <h1>{foundColor.color}</h1>
        </div>
    )
};
