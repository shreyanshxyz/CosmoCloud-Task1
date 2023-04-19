import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleUpdateRow } from "../Features/formSlice";
import dataTypes from "../Models/DataTypes";

const DropdownDataTypes = ({ item }) => {
  const { dataType: currentDataType } = item;
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);

  const toggleDropDown = () => {
    setIsHidden((previousState) => !previousState);
  };
  // When the user selects a new data type from the dropdown menu, the handleCurrentDataType function is called. This function sets the isHidden state to true (hiding the dropdown menu) and dispatches an action to update the dataType property of the item object using the handleUpdateRow function.

  const handleCurrentDataType = (dataType) => {
    setIsHidden(true);
    dispatch(handleUpdateRow({ ...item, dataType }));
  };

  return (
    <div className="ml-6 relative">
      <button
        onClick={toggleDropDown}
        className="bg-gray-200 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {currentDataType.toUpperCase()}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`absolute z-10 ${
          isHidden && "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-40`}
      >
        <ul className="py-2 text-sm text-gray-900">
          {dataTypes.map((dataType, index) => (
            <li
              key={index}
              className={`block px-4 py-2 cursor-pointer ${
                currentDataType === dataType.toUpperCase()
              }`}
              onClick={() => handleCurrentDataType(dataType)}
            >
              {dataType}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownDataTypes;
