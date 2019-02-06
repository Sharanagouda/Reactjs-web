import React,{Component} from "react";
import "./Tutorial.css";

class Tutorial extends Component{
    constructor(props) {
        super(props);
        
        this.state = { 
           data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
     };
     setNewNumber() {
        this.setState({data: this.state.data + 1})
     }
     render() {
        return (
          <div
            className="col-lg-3 col-md-5 col-sm-8"
            style={{ backgroundColor: "#FFF", paddingBottom: "10px" }}>
              <div className="tutorial-div">
              <button>CODE</button>
              <pre>
                <code>
                <p> **Enter a code snippet demoing a function here** </p>
               </code>
              
             </pre>
          </div>
          </div>
        );
     }
  }
export default Tutorial;
