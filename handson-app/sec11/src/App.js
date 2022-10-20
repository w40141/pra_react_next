import React from "react";
import {Routes, Route, Redirect} from "react-router-dom";

import {Home, About, Events, Products, Contact, NotFound, Services, History, Location} from "./pages";

export const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} >
                <Route path="services" element={<Services />} />
                <Route path="history" element={<History />} />
                <Route path="location" element={<Location />} />
            </Route>
            <Route path="events" element={<Events />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div >
);
