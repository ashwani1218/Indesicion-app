
import React from 'react';

class Counter extends React.Component{


componentDidMount(){
  const StringCount = localStorage.getItem('count');
  const count = parseInt(StringCount, 10);
  if(!isNaN(count)){
    this.setState(()=>({ count }));
  }
  console.log("Mounted");
}

componentDidUpdate(prevProps, prevState) {
  if(prevState.count !== this.state.count){
    localStorage.setItem("count",this.state.count); 
  }
  console.log("Update called");
}


  constructor(props){
    super(props);
    this.state = {
      count: props.count
    };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne(){
    this.setState((prevState)=>{
      return{
        count: prevState.count + 1
      }
    });
  }

  handleMinusOne(){
    this.setState((prevState)=>{
      return{
        count: prevState.count - 1
      }
    });
  }

  handleReset(){
    this.setState(()=>{
      return{
        count: 0
      }
    });
  }

  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  } 
}

Counter.defaultProps = {

  count: 0
};

export default Counter;

// let count = 0 ;
// const addOne = () =>{
//   count++;
//   renderCounterApp();
//   console.log("Addone");
// };
// const minusOne = () =>{
//     count--;
//     renderCounterApp();
//   console.log("minusOne");
// };
// const reset = () =>{
//     count = 0;
//     renderCounterApp();
//   console.log("reset");
// }
// const templateTwo = (
//   <div className="App">
//     <h1> Count : {count}</h1>
//     <button onClick= {addOne}> +1 </button>
//     <button onClick = {minusOne}> -1 </button>
//     <button onClick = {reset}> reset </button>
//   </div>
// );
  
// const renderCounterApp = () =>{
//     const templateTwo = (
//         <div className="App">
//           <h1> Count : {count}</h1>
//           <button onClick= {addOne}> +1 </button>
//           <button onClick = {minusOne}> -1 </button>
//           <button onClick = {reset}> reset </button>
//         </div>
//       );
//       ReactDOM.render(templateTwo, document.getElementById('root'));
// }

// renderCounterApp();


