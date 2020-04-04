import React from 'react';
import './styles/App.css';
import './styles/styles.scss'; 
import 'normalize.css';
import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';
import OptionModal from './components/OptionModal';

class App extends React.Component {

  state={
    options: [],
    selectedOption: undefined
    
  }
  
  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption= (optionToRemove) => {
    this.setState((prevState)=>({
      options: prevState.options.filter((option)  =>{ 
        return (optionToRemove !== option) })
      }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=>({selectedOption: option}))
  }

  handleAddOption = (option) => {
    if(!option){
      return 'Enter Valid value';
    }
    else if(this.state.options.indexOf(option)>-1){
      return "Already an Option";
    }
    else{
      this.setState((prevState)=>({options: prevState.options.concat([option])}));
    }
  }

  handleClearSelectedOption = () =>{
    this.setState(()=>({selectedOption:undefined}));
  }

  componentDidMount(){

    try{
      const options = JSON.parse(localStorage.getItem('options'));
      if(options){
        this.setState(()=>({options}));
      }
    }
    catch(e){
      //DO NOTHING
    }
    
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options",json);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  
  

  render() {
    const subtitle = "Get Up And Do It!"
    return (
      <div className='App'>
        <Header subtitle = {subtitle}/>
        <div className='container'>
          <Action hasOption = {this.state.options.length>0}
            handlePick = {this.handlePick}
          />
          <div className='widget'>
            <Options 
              options={this.state.options}
              handleDeleteOptions = {this.handleDeleteOptions}
              handleDeleteOption = {this.handleDeleteOption} 
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            <OptionModal 
              selectedOption= {this.state.selectedOption}
              handleClearSelectedOption = {this.handleClearSelectedOption}
            />
          </div>
        </div>
      </div>

    )
  }
}
App.defaultProps={
  options: []
};

export default App;