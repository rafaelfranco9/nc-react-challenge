# React Hooks Project 

## Description
This React application allows the user to save new **members** `(firstName, lastName, address, ssn)` on the server using a form and then see them added in the table next to it.
This application was created to put the most important concepts and best practices into action in a simple project.


## Goal
The main goal of this project is to put in practice the following items:
- React Hooks (useState, useEffect, useRef, useContext)
- Custom Hooks (logic reusability)
- Correct state management
- Clean folder structure 
- Local Storage
- API requests (using axios)
- Routes 
- Component composition (children property)
- Form validations
- Inactivity refresh


## Requirements
* The form data must be sent to the API and the table on the right must receive the data from it when the site is loaded
* After each successful insert, the data must be entered into the table, without the need to use the GET endpoint 
* The reset button should clear the form fields
* The save button should send the data to the API
* The social security number (SSN) is unique and cannot be repeated in the list.
* In case of an erroneous insertion attempt, the error must be reported
* In order to use the member's endpoints the user first will need to get a token (use the following user "username": "sarah" "password": "connor"). The token expires every 15 minutes.
* After 2 minutes of inactivity, the table should be refreshed automatically
* SSN field must have the format ###-##-####
* firstName, lastName and Address should have more than one character


## Available APIs 
| Method | Endpoint | Description
|--|--|--|
|GET|/api/members| find all members
|POST|/api/members| create new member
|POST|/auth| get user token

### APIs schemas 
`POST -> /api/members` 
```sh
//body and response
{
  "firstName": String,
  "lastName": String,
  "address": String,
  "ssn": String 
}
```
`POST -> /auth` 
```sh
//body
{
  "username": String,
  "password": String
}

//response
{
	"iat": Number,
	"exp": Number,
	"token": String
}
```

## Items in practice
In this section, you will find a link to each of the items mentioned in the goal section to see examples.
* React Hooks
  - [useState](react-website/src/contexts/MembersContext.jsx)  
  - [useEffect](react-website/src/containers/Members.jsx)  
  - [useRef](react-website/src/components/MembersForm.jsx)  
  - [useContext](react-website/src/components/MembersTable.jsx)  
* Custom Hooks
  - [Hook definition](react-website/src/hooks/useAuthentication.js)
  - [Hook implementation](react-website/src/contexts/MembersContext.jsx) 
* Correct state management
  - [members Context Provider wrapping just what is necessary](react-website/src/containers/Members.jsx) 
* Local Storage
  - [custom hook to manage local storage](react-website/src/hooks/useLocalStorage.js) 
* API request using axios
  - [GET & POST requests](react-website/src/contexts/MembersContext.jsx)  
* Routes
  - [App router](react-website/src/router/AppRouter.jsx)
* Component composition
  - [using composition](react-website/src/components/MembersPanel.jsx)   
* Form validations
  - [validations & useRef](react-website/src/components/MembersForm.jsx) 
* Inactivity refresh
  - [document events and recursion](react-website/src/containers/Members.jsx)

---

## Instalation
**1.** Clone repository
```sh
https://github.com/rafaelfranco9/react-hooks-project.git
```
**2.** Change working directory 
```sh
cd react-hooks-project
```
**3.** Install dependencies and start the server
```sh
npm install
npm run serve
```
**4.** Change working directory
```sh
cd react-website
```
**5.** Install dependencies and start the React application
```sh
npm install
npm run start
```
**6.** Open the browser in  `http://localhost:3000/` 

**7.** Enjoy the app!
#


## Contact
If you have any questions about the project feel free to contact me at francosprivato@gmail.com
