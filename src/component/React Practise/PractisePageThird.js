const dataUsers = [
    {name:"divya",Profession:"Software Engineer"},
    {name:"Neeti",Profession:"Software Engineer"}]

  const getData = () => {
  setTimeout(()=>{
    let output = "";
    dataUsers.forEach((ele,index)=>{
      output+= `<li>${ele.name}<li>`;
    })
    document.body.innerHTML=output;
  },1000);
  }

   //👍Using callback function
  // const createData = (newdata,callback) => {
  //    setTimeout(()=>{
  //       dataUsers.push(newdata);
  //       callback();
  //          },2000);

  //     }

  //👍UCallback function as a argument
  // createData({name:"newdata",Profession:"Dev"},getData);



//👍UUsing Promise function
//   const createData = (newdata) => {
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         dataUsers.push(newdata);
//         let error = false;
//           if(!error) {
//             resolve();
//           }
//           else {
//             reject("error")
//           }
//         },2000);
//     })
//  }
//👍Using Promise then function calling
//  createData({name:"newdata",Profession:"Dev"}).then(getData).catch(err=>console.log(err));



//👍Using Async and await function
const createData = (newdata) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      dataUsers.push(newdata);
      let error = false;
        if(!error) {
          resolve();
        }
        else {
          reject("error")
        }
      },2000);
  })
}

//👍 Using Async and await function calling
const asyncFunc = async() => {
  await createData({name:"newdata",Profession:"Dev"});
  getData();
}

asyncFunc();
