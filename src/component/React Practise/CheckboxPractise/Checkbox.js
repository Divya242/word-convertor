import React, { useState } from 'react'

export default function Checkbox(props) {
  const [colorname, setcolor] = useState({
    VeryGood: false,
    Good:false,
    NotGood:false
  });

  const checkedSelected = (e) => {
    e.persist();
    setcolor({...colorname, [e.target.name]:e.target.checked})
  }

  const colorMode = props.mode === 'dark' ? 'white' : '#042743';

  const result  =  Object.keys(colorname).filter((x)=>colorname[x]);
  return (
    <div className="container" style={{color: colorMode}}>
      <h4>Kindly share experience in Word Translator App</h4>

      <input type="checkbox" name="VeryGood" value="VeryGood" className="mx-2" onChange={checkedSelected} checked={colorname.VeryGood}/>VeryGood
      <input type="checkbox" name="Good" value="Good" className="mx-2" onChange={checkedSelected} checked={colorname.Good}/>Good
      <input type="checkbox" name="NotGood" value="NotGood" className="mx-2" onChange={checkedSelected} checked={colorname.NotGood}/>NotGood

      <div className="py-2" style={{color: "white" ,width:"250px",backgroundColor: "black",height:"40px", textAlign:"center"}}>
       <strong>{result+ "  "}</strong>
      </div>
    </div>
  )
}
