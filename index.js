function App() {
    const [operation, setOperation] = React.useState("");
    const [ans, setAns] = React.useState("");
    const [display, setDisplay] = React.useState("");

    const clickHandler = (input) => {
        setDisplay(display + input);
        setOperation(input);
    }

    function clean() {

        const regex = /[\+\-\*\/][\+\-\*\/]+/g; //this searches for consequtive operation inputs (.match will return array with all group matches)

        if (regex.test(display)) //if display has consequtive operations
        {
            const groups = display.match(regex) //array of group matches
            const replace = [];
            for (const elem of groups) {
                replace.push(elem.slice(-1)); //last character of each matched group
            }
            const splat = display.split(regex); //splits into parts where matched groups are, returns array
            for (let r = 0; r < splat.length-1; r++) {
                splat[r] = splat[r].concat(replace[r]); //
            }
            setDisplay(splat.join("")); //return expression without the consequtive inputs
        }
    }

    const equalSign = () => {
        clean(); //now the display will have the proper value
    }

    function clear() {
        setOperation("");
        setDisplay("");
    }


    return (
        <div id="myCalc" className="displayAll">
            <div id="grid">
                <input value={display} id="theDisplay" disabled></input>
                <input id="display" value={operation} disabled></input>
                <div id="seven" className="btn p-3" onClick={() => clickHandler("7")}>7</div>
                <div id="eight" className="btn p-3 " onClick={() => clickHandler("8")}>8</div>
                <div id="nine" className="btn p-3 " onClick={() => clickHandler("9")}>9</div>
                <div id="clear" className="btn p-3 " onClick={() => clear()}>C</div>
                <div id="four" className="btn p-3 " onClick={() => clickHandler("4")}>4</div>
                <div id="five" className="btn p-3 " onClick={() => clickHandler("5")}>5</div>
                <div id="six" className="btn p-3 " onClick={() => clickHandler("6")}>6</div>
                <div id="add" className="btn p-3 " onClick={() => clickHandler("+")}>+</div>
                <div id="multiply" className="btn p-3 " onClick={() => clickHandler("*")}>x</div>
                <div id="one" className="btn p-3 " onClick={() => clickHandler("1")}>1</div>
                <div id="two" className="btn p-3 " onClick={() => clickHandler("2")}>2</div>
                <div id="three" className="btn p-3 " onClick={() => clickHandler("3")}>3</div>
                <div id="zero" className="btn p-3 " onClick={() => clickHandler("0")}>0</div>
                <div id="subtract" className="btn p-3 " onClick={() => clickHandler("-")}>-</div>
                <div id="divide" className="btn p-3 " onClick={() => clickHandler("/")}>/</div>
                <div id="decimal" className="btn p-3 " onClick={() => clickHandler(".")}>.</div>
                <div id="equals" className="btn p-3 " onClick={() => equalSign()}>=</div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))