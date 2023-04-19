import { createSlice } from "@reduxjs/toolkit";
import initialState from "../Models/Schema";

// Creating a new slice of the Redux store using the createSlice function, passing in an object with three properties.
const mySlice = createSlice({
  name: "mySliceName",
  initialState,
  reducers: {
    // Defining an action creator and its corresponding reducer function for the handleAddNewRow action. This function takes in two arguments:
    // state: The current state of the slice.
    // action: The action object that was dispatched.
    handleAddNewRow: (state, action) => {
      const { items } = state;
      const { id, body, dataType, parentId } = action.payload;

      // The function extracts the items, id, body, dataType, and parentId properties from the action payload and creates a new row object. It then calls a helper function findRow to locate the parent row of the new row. If a parent row is found, the new row is added to its items array. Otherwise, the new row is added to the top-level items array.
      const newRow = {
        id,
        body,
        dataType,
        items: [],
      };

      const findRow = (parentId, items) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === parentId) {
            return items[i];
          }
          if (items[i].items) {
            const result = findRow(parentId, items[i].items);
            if (result) {
              return result;
            }
          }
        }
        return null;
      };

      const parentRow = findRow(parentId, items);

      if (parentRow) {
        parentRow.items = parentRow.items || [];
        parentRow.items.push(newRow);
      } else {
        items.push(newRow);
      }
    },

    // create a reducer for updating an existing row in the schema tree
    handleUpdateRow: (state, action) => {
      const { items } = state;
      const { id, body, dataType } = action.payload;

      // recursive function to find the row to be updated in the schema tree
      const findRow = (id, items) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            // update the row's properties
            if (dataType === "Object") {
              return (items[i] = { ...items[i], body, dataType });
            } else {
              return (items[i] = { ...items[i], body, dataType, items: [] });
            }
          }
          if (items[i].items) {
            const result = findRow(id, items[i].items);
            if (result) {
              return result;
            }
          }
        }
        return null;
      };

      // find the row and update its properties
      findRow(id, items);
    },

    // create a reducer for deleting a row from the schema tree
    handleDeleteRow: (state, action) => {
      const { items } = state;
      const { id } = action.payload;

      // recursive function to find and delete the row from the schema tree
      const deleteRow = (id, items) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === id) {
            console.log("Found Row", i);
            items.splice(i, 1);
            return true;
          }
          if (items[i].items) {
            if (deleteRow(id, items[i].items)) {
              return true;
            }
          }
        }
        return false;
      };

      deleteRow(id, items);
    },
  },
});

// export the action creators
export const { handleAddNewRow, handleUpdateRow, handleDeleteRow } =
  mySlice.actions;

// export the reducer
export default mySlice.reducer;
