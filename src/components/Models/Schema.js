// A simple schema for our form

const initialState = {
  id: 0,
  items: [
    {
      id: 1,
      body: "person",
      dataType: "Object",
      items: [
        {
          id: 10,
          body: "name",
          dataType: "Object",
          items: [
            {
              id: 100,
              body: "firstName",
              dataType: "String",
            },
            {
              id: 1000,
              body: "lastName",
              dataType: "String",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      body: "order",
      dataType: "String",
    },
    {
      id: 3,
      body: "class",
      dataType: "Boolean",
    },
  ],
};

export default initialState;
