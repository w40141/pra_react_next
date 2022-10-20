import {Routes, Route} from "react-router-dom";

import {ColorDetails} from "./ColorDetails";
import {ColorProvider} from "./ColorProvider";
import {ColorList} from "./ColorList";
import { AddColorForm } from "./AddColorForm";


export const App = () => (
    <ColorProvider>
        <AddColorForm />
        <Routes>
            <Route path="/" element={<ColorList />} />
            <Route path=":id" element={<ColorDetails />} />
        </Routes>
    </ColorProvider>
);
