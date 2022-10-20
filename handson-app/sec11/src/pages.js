import React from "react";
import {Outlet, useLocation, Link} from "react-router";

export const Home = () => (
    <div>
        <h1>[Company Website]</h1>
    </div>
)

export const About = () => (
    <div>
        <h1>[About]</h1>
        <Outlet />
    </div>
)

export const Services = () => (
    <section>
        <h2>Our Services</h2>
        <p>
            Our services are.
        </p>
    </section>
)

export const History = () => (
    <section>
        <h2>Our History</h2>
        <p>
            Our History is.
        </p>
    </section>
)

export const Location = () => (
    <section>
        <h2>Our Location</h2>
        <p>
            Our Location is.
        </p>
    </section>
)

export const Events = () => (
    <div>
        <h1>[Events]</h1>
    </div>
)

export const Products = () => (
    <div>
        <h1>[Products]</h1>
    </div>
)

export const Contact = () => (
    <div>
        <h1>[Contact]</h1>
    </div>
)

export const NotFound = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
}
