import React from "react";
import { nanoid } from "nanoid"; // import nanoid to generate unique ids
import { useDispatch } from "react-redux"; // import useDispatch hook to dispatch actions
import { handleAddNewRow } from "../Features/formSlice"; // import handleAddNewRow action creator from formSlice

const Add = ({ item }) => {
  // define functional component and destructuring 'item' prop from parent component
  const dispatch = useDispatch(); // assign useDispatch hook to dispatch

  const handleClick = () => {
    // define a function handleClick to be triggered on click event
    dispatch(
      // dispatch handleAddNewRow action with object payload
      handleAddNewRow({
        parentId: item?.id, // assign parentId to the id of the current row, if it exists
        id: nanoid(), // generate a unique id for the new row using nanoid
        body: "addName", // set the default value of the new row to "addName"
        dataType: "String", // set the data type of the new row to "String"
      })
    );
  };

  return (
    // render the '+' icon and attach handleClick function to onClick event
    <div className="flex items-center justify-center p-2 text-black w-8 h-8 text-4xl cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={handleClick}
      >
        <path
          fillRule="evenodd"
          d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
        ></path>
      </svg>
    </div>
  );
};

export default Add;
