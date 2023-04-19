import Add from "../Buttons/Add";
import Delete from "../Buttons/Delete";
import ToggleButton from "../Buttons/ToggleButton";
import DropdownDataTypes from "../Misc/DropdownDataTypes";
import InputField from "../Misc/InputField";

import dataTypes from "../Models/DataTypes";

const Row = ({ item, index }) => {
  const { dataType: currentDataType, items } = item;

  return (
    <>
      <div className="flex bg-gray-100 group mx-8 p-2 border-b-2 border-gray-300 gap-4 items-center justify-between">
        <div className="flex items-center">
          {index && <div className="text-gray-500 text-lg mr-3">{index}. </div>}
          <InputField item={item} />
          <DropdownDataTypes item={item} />
        </div>
        <div className="items-center hidden gap-4 group-hover:flex">
          <ToggleButton item={item} />
          {currentDataType.toLowerCase() === dataTypes[3].toLowerCase() && (
            <Add item={item} />
          )}
          <Delete item={item} />
        </div>
      </div>
      <div className="pl-8 mt-2">
        {items?.map((item, index) => (
          <Row item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Row;
