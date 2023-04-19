import { configureStore } from "@reduxjs/toolkit";
import mySlicereducer from "../Features/formSlice";

// The reducer is then to the store's reducer object, where it is given a key of fieldNameType. This key is used to access the state managed by the mySlicereducer reducer inside components that subscribe to the store.
const Store = configureStore({
  reducer: {
    fieldNameType: mySlicereducer,
  },
});

// When the Store is imported and used in a React component, it provides access to the state managed by the mySlicereducer slice reducer through Redux's useSelector hook.
export default Store;
