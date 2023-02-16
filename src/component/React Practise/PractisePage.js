// import React, { useState, useEffect } from 'react';

//   //Using closure Property in React
// const updatefunc = (setdata) => {
//   return setdata(77);
// }
// const makeState = (initialValue) => {
//  let currentValue = initialValue;

//  const getData = () => currentValue;

//  const UpdateData = (newValue) => {
//   currentValue =  newValue;
//  }

//  return [getData,UpdateData]; // return nested function
// }


// const PractisePage = () => {
//   const[ data,setdata] = makeState(55);
//   const [count,setCount] = useState(0);
//   const [users, setUsers] = useState([]);

//   useEffect(()=>{
//     //Using Promise function
//     fetchUsersPromise();
//     // Using Async and await
//     fetchUsersAsync();
//   },[]);

// const fetchUsersPromise = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((result)=>result.json())
//   .then((data)=> {
//     setUsers(data);
//   }).catch(e=>console.log(e));
// }

// const fetchUsersAsync = async() => {
//   try {
//     const result = await fetch("https://jsonplaceholder.typicode.com/users");
//     const userdata = await result.json();
//     setUsers(userdata);
//   }
// catch {
//   console.log("error");
// }
// }

//   //Using closure Property in React
//   const handleAlertClick = () => {
//     setTimeout(()=>{
//       alert("You clicked on:" + count);
//     },1000);
//   }

//   return(
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={()=>setCount(count + 1)}>Click me</button>
//       <button onClick={handleAlertClick}>show count</button>

//     <div>
//       {/* practise for makeState */}
//     {`Current condition is: ${data()}`}
//     {updatefunc(setdata)}
//      {`Update condition is: ${data()}`}
//     </div>
//     </div>
//   );
// }

// export default PractisePage;
