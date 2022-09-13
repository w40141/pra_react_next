import { memo, useReducer, useState } from "react";

const Checkbox = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};

const Number = () => {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
};

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false,
};

const User = () => {
  // const [user, setUser] = useState(firstUser);
  const [user, setUser] = useReducer(
    (user, newDetails) => ({ ...user, ...newDetails }),
    firstUser
  );
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button onClick={() => setUser({ admin: true })}>Make Admin</button>
    </div>
  );
};

const Cat = ({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

const PureCat = memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name);

const CatApp = () => {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={name => console.log(`${name} has meowed`)} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
};

export default function App() {
  return <CatApp />;
}
