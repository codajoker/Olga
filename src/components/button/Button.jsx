import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { PageButton } from "./Button.styled";
import { removeContact } from "../../redux/reducers";

export const Button = ({ type = "button", children, id }) => {
  const dispatch = useDispatch();

  return (
    <PageButton type={type} onClick={() => dispatch(removeContact(id))}>
      {children}
    </PageButton>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
};
