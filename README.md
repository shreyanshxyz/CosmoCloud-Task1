# Project Title

A brief description of the project.

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [Thought Process](#thought-process)
  - [Screenshots](#screenshots)
  - [Installation](#installation)

## Thought Process

- Assuming a Schema
  - The schema is nested as the UI example was giving the intuition that the Form is Nested so the data stays inside one another.

```
const Schema = {
  id:,
  items: [
    {
        item 1,
        items: [
        {
            item 1-1,
          items: [
            {
              item: 1-1-1,
            },
            {
                item: 1-1-1,
            },
          ],
        },
      ],
    },
    {
        item: 2,
    },
    {
        item: 3,
    },
  ],
};

export Schema;
```

- Creating components

  - The components were created statically at first and the whole UI of the project was set into place.

- Updating the Data & Console Logging the Fields

  - Since Passing down props was becoming a tougher task for the App. I decided to move forward with managing the state of the application.
  - I had two options, either using Redux or using inbuilt Context API, I stuck with Redux since it offered a lot more flexibility.
  - Another factor of using Redux was that it offered support to dynamic data. Redux Works like a charm with both static and dynamic data

- Adding a way to add/update/delete rows

  - To add more rows, we find the row were we have have to add it's lower row. Coded the method for finding the row by using loops + recursion. If there is a parent row, we push our new row as a child/ else we insert it directly.
  - To update a row, we find the row which we have have to update and then do the same. The finding process is the same as in adding a row.
  - To delete a row, we find the row which we have have to delete and then do the same. The finding process is the same as in adding a row.

- Finished the project after doing minor tweaks to the app's styling.

## Screenshots

![Screenshot](https://i.ibb.co/NW6fR4F/Vite-React.png)

## Installation

```bash
git clone <repo url>
cd cosmocloud-task1
npm install
npm run dev
```
