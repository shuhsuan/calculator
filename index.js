function App() {
    const [operation, setOperation] = React.useState("");
    const [display, setDisplay] = React.useState("");

    const clickHandler = (input) => {

        const numDot = /\d\.$/g;
        const numOp = /\d[\+\-\*\/]?[\+\-\*\/]+ $/g;

        if (display == "0" && input == "0"){ }
        else if(numDot.test(display) && input=="." || numOp.test(display) && input=="."){}
        else {
            setDisplay(display + input);
            setOperation(input);
        }
    }

    function clean() {

        const regex = /[\+\-\*\/][\+\-\*\/]+/g; //this searches for consequtive operation inputs (.match will return array with all group matches)

        if (regex.test(display)) //if display has consequtive operations
        {
            const groups = display.match(regex) //array of group matches
            const replace = [];
            for (const elem of groups) {
                if (elem.charAt(elem.length - 1) == "-") {
                    replace.push(elem.slice(-2)) //if last char of group is a -, treat it as a negative
                    console.log(replace);
                    continue;
                }
                    replace.push(elem.slice(-1)); //last character of each matched group
                
            }
            const splat = display.split(regex); //splits into parts where matched groups are, returns array
            for (let r = 0; r < splat.length - 1; r++) {
                splat[r] = splat[r].concat(replace[r]); //
            }

            setDisplay(eval(splat.join(""))); //return calculated expression without the consequtive inputs
        }
        else {
            setDisplay(eval(display));
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
                <input id="theDisplay" value={display} disabled></input>
                <input id="display" value={operation} disabled></input>
                <div id="seven" className="buttonPad btn p-3" onClick={() => clickHandler("7")}>7</div>
                <div id="eight" className="buttonPad btn p-3 " onClick={() => clickHandler("8")}>8</div>
                <div id="nine" className="buttonPad btn p-3 " onClick={() => clickHandler("9")}>9</div>
                <div id="clear" className="buttonPad btn p-3 " onClick={() => clear()}>C</div>
                <div id="four" className="buttonPad btn p-3 " onClick={() => clickHandler("4")}>4</div>
                <div id="five" className="buttonPad btn p-3 " onClick={() => clickHandler("5")}>5</div>
                <div id="six" className="buttonPad btn p-3 " onClick={() => clickHandler("6")}>6</div>
                <div id="add" className="buttonPad btn p-3 " onClick={() => clickHandler("+")}>+</div>
                <div id="multiply" className="buttonPad btn p-3 " onClick={() => clickHandler("*")}>x</div>
                <div id="one" className="buttonPad btn p-3 " onClick={() => clickHandler("1")}>1</div>
                <div id="two" className="buttonPad btn p-3 " onClick={() => clickHandler("2")}>2</div>
                <div id="three" className="buttonPad btn p-3 " onClick={() => clickHandler("3")}>3</div>
                <div id="zero" className="buttonPad btn p-3 " onClick={() => clickHandler("0")}>0</div>
                <div id="subtract" className="buttonPad btn p-3 " onClick={() => clickHandler("-")}>-</div>
                <div id="divide" className="buttonPad btn p-3 " onClick={() => clickHandler("/")}>/</div>
                <div id="decimal" className="buttonPad btn p-3 " onClick={() => clickHandler(".")}>.</div>
                <div id="equals" className="buttonPad btn p-3 " onClick={() => equalSign()}>=</div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))