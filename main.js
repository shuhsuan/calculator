class App extends React.Component{
constructor(props){
    super(props);

    this.state = {
        input: ""
    };
    
    //bindings to "this" here
    this.handleClick = this.handleClick.bind(this);
}

//any functions here

handleClick(e){
    this.setState({
        input: e.target.value
    })
    console.log(this.state.input)
}

render(){

    const buttonC = "drum-pad btn btn-secondary p-4 m-3"

    return(
        <div id="myCalc" className="text-center">
        <h2 className="text-center">A Calculator</h2>

        <div id="zero" value="0" onClick={this.handleClick} className={buttonC}>{"0"}</div>
        <div id="one"></div>
        <div id="two"></div>
        <div id="three"></div>
        <div id="four"></div>
        <div id="five"></div>
        <div id="six"></div>
        <div id="seven"></div>
        <div id="eight"></div>
        <div id="nine"></div>
        
        <div id="add"></div>
        <div id="subtract"></div>
        <div id="multiply"></div>
        <div id="divide"></div>
        
        <p id="display">{this.state.input}</p>
        </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"))