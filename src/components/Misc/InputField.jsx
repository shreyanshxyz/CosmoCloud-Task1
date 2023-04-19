import { useDispatch } from "react-redux";
import { handleUpdateRow } from "../Features/formSlice";

const InputField = ({ item }) => {
  const dispatch = useDispatch();
  const { body } = item;

  // We update our input field using the handleChange function
  const handleChange = (event) => {
    dispatch(handleUpdateRow({ ...item, body: event.target.value }));
  };

  return (
    <label className="group-hover:bg-gray-200">
      <input
        className="h-9 w-40 truncate px-2 py-1 rounded-lg bg-gray-100 focus:bg-white focus:outline-none"
        type="text"
        value={body}
        onChange={(event) => handleChange(event)}
      />
    </label>
  );
};

export default InputField;
