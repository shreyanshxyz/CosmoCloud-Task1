import React from "react";
import Add from "../Buttons/Add";
import Row from "../Row/Row";
import { useSelector } from "react-redux";

const Home = () => {
  const { items } = useSelector((state) => state.fieldNameType);

  // The HandleClick button to show our data in the console when the save button is clicked
  const handleClick = () => {
    console.log(items);
  };
  return (
    <div className="flex flex-col gap-1 bg-gray-200 rounded-md my-8 mx-auto py-4 w-[48rem] justify-center">
      <div className="flex justify-between group mx-8 px-4 py-2 items-center my-2 hover:bg-gray-200">
        Field name and type
        <Add />
      </div>
      {/* We map out all our rows with everyine getting a new index */}
      {items.map((item, index) => (
        <Row item={item} key={index} index={index + 1} />
      ))}
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-w-max self-center "
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  );
};

export default Home;
