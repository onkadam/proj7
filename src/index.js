import React from 'react';
import ReactDOM from 'react-dom/client';

//function component
function A(props){
  let name="Onkar"
  return <span>A - {name} {props.surname} {props.state}<B surname="Gaikwad"/></span>
}

//class component
//class child extends parent 
class B extends React.Component{
 name="Yogesh";
  render(){
    return <h4>B - {this.name} {this.props.surname}<C> Chaugule </C></h4>
  }
}

//ES6 Fat arrow function
let C = (props)=>{
  let name="Santosh"
  return <h2>C - {name} {props.children}</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

let state = "Maharashtra";
root.render(<A surname="Kadam" state={"Maharashtra"}/>);


