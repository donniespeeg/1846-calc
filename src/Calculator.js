import {useState, useContext} from 'react';
import Input from './Input.js';
import Output from './Output.js';

import Submit from './Submit.js';
import {Context} from './Context.js';

function Calculator() {
  const [output, setOutput] = useState(true);
  const {corpShares, market, playerShares, table, price, run} = useContext(Context);

  const handleOutput = (output) => {
	  Submit(corpShares, market, playerShares, output, setOutput, table, price, run);
  }

    return (
      <div className="Calculator">

        {output ? <Input /> : <Output /> }
        <br/>
        { output ? 
          <button style={{backgroundColor: 'darkblue', color: 'ghostwhite'}} 
          	className="Button" 
			onClick={handleOutput}> 
			Submit 
			</button>
        : <button style={{backgroundColor: 'darkred', color: 'ghostwhite'}} 
			className="Button" 
			onClick={() => setOutput(!output)}> 
			Reset 
			</button> }

      </div>
    );
  }
  
  export default Calculator;