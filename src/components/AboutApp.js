import React , {useState} from 'react'

export default function AboutApp() {
  const[mystyle, setstyle] = useState({
    color:"black",
    backgroundColor:"white"
  });
const [text, settext] = useState("Enable Dark Mode");

  const toggleTextMode = () => {
    if(mystyle.color === "black") {
      setstyle({
        color:"white",
        backgroundColor:"black",
        border: "1px solid white"
      });
      settext("Enable Dark Mode");

    }
    else {
      setstyle({
        color:"black",
        backgroundColor:"white",
      });
      settext("Enable Light Mode");
    }
  }
  return (
    <div className="container" style={mystyle}>
        <h1>About Word Coverter App</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Word Convert to Upper Case Utility
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>If you want to convert word from lower to Upper case</strong> Click on Upper Case CTA and you can visible the text area data in Captial letters.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Word Convert to Lower Case Utility
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <strong>If you want to convert word from  Upper case to lower case</strong> Click on Lower Case CTA and you can visible the text area data in small letters.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How many words and characters in textarea!
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <strong>If you want to see , how many words or characters in your text</strong> There is one section for that, where can show the counting for words and characters.
              </div>
            </div>
          </div>
        </div>
           <button className="btn btn-primary my-3" onClick={toggleTextMode}>{text}</button>
    </div>
  )
}
