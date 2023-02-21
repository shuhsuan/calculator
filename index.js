function App() {
    const [formula, setFormula] = useState("");
    const[ans, setAns] = useState(formula)

    return(
        <div id="grid">

            <div id="display">
                <input disabled placeholder="0" value={formula}></input>
                <input disabled id="display" value={ans}></input>
            </div>

        <div id="one" >1</div>
        <div id="two" >2</div>
        <div id="three" >3</div>
        <div id="four" >4</div>
        <div id="five" >5</div>
        <div id="six" >6</div>
        <div id="seven" >7</div>
        <div id="eight" >8</div>
        <div id="nine" >9</div>
        <div id="zero" >0</div>

        
        <div id="add" >+</div>
        <div id="subtract" >-</div>
        <div id="multiply" >x</div>
        <div id="divide" >/</div>
        
        <div id="decimal" >.</div>
        <div id="clear">C</div>      
        <div id="equals">=</div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))