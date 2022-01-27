import React from "react";
import PropTypes from "prop-types";
import { FilterWrapper } from "./Filter.styled";
export const Filter = ({ children, onChange, filerValue }) => {
  return (
    <FilterWrapper>
      <label htmlFor="filter">{children}</label>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={onChange}
        value={filerValue}
      ></input>
    </FilterWrapper>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
