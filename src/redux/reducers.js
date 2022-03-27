import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addItems(state, action) {
      state.items.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },
    removeContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItems, addFilter, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
