import React , {useState} from 'react'

export default function TextForm(props) {

  const [text,setText] = useState("");


  const handleUpperClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlertMessage("Convert into Upper Case", "info")
  }
  const handleTextArea = (e) => {
    setText(e.target.value);
  }
  const handleLowerClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlertMessage("Convert into Lower Case", "info")
  }
  const handleClearAll = () => {
    setText("");
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace = () => {
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
  }
  const buttonColorMode = props.buttonColor === "primary"? "success" : "primary";
  return (
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2 className="mb-4">{props.heading}</h2>
      <div className="mb-3">
        <textarea className={`form-control p-3 mb-2 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} id="myBox" rows="8" onChange={handleTextArea} placeholder="Enter the text here"></textarea>
      </div>
      <button disabled= {text.length === 0} className={`btn btn-${buttonColorMode} mx-2 my-1`} onClick={handleUpperClick}>Convert to UpperCase</button>
      <button disabled= {text.length === 0} className={`btn btn-${buttonColorMode} mx-2 my-1`} onClick={handleLowerClick}> Convert to LowerCase</button>
      <button disabled= {text.length === 0} className={`btn btn-${buttonColorMode} mx-2 my-1`} onClick={handleClearAll}> Clear All</button>
      <button disabled= {text.length === 0} className={`btn btn-${buttonColorMode} mx-2 my-1`} onClick={handleCopy}> Copy Text</button>
      <button disabled= {text.length === 0} className={`btn btn-${buttonColorMode} mx-2 my-1`} onClick={handleExtraSpace}> Remove Extra Space</button>
      <div className ="containerinfo" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2 className="my-3">How many words and  characters?</h2>
      <p>{text.split(" ").filter((ele)=> {return ele.length!== 0}).length} Words And {text.length} Characters</p>
      <h2 className="my-3">Preview</h2>
      <p>{text.length> 0 ? text : "Enter something in the textbox above to preview it here" }</p>
      </div>
    </div>
  )
}
