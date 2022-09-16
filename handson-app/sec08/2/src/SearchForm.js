import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

const SearchForm = ({ value, onSearch }) => {
  const { setLogin } = onSearch;
  const submit = (e) => {
    setLogin(e.target.value);
  };
  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="color title..." />
      <button>Search</button>
      {value}
    </form>
  );
};

export { SearchForm };
