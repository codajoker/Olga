// use createSlice

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addFilter } from '../../redux/contacts/contactsReducer';
import { FilterWrapper } from './Filter.styled';

export const Filter = ({ children }) => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  return (
    <FilterWrapper>
      <label htmlFor="filter">{children}</label>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
        value={filterValue}
      ></input>
    </FilterWrapper>
  );
};
