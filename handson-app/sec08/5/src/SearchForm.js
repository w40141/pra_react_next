import React from "react";
import { useInput } from "./hooks/useInput";

const SearchForm = ({ value, onSearch }) => {
  const [searchProps] = useInput(value);

  const submit = (e) => {
    e.preventDefault();
    onSearch(searchProps.value);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" {...searchProps} placeholder="login id..." required />
      <button>Search</button>
    </form>
  );
};

export { SearchForm };
