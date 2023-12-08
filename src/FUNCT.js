import React, { useState } from 'react';

const FUNCT = () => {
  const [TEMperTure, setTEMperTure] = useState(0);
  const [CarB, setCarB] = useState(0);
  const [result, setResult] = useState(null);

  const calc = () => {
    let res = 0;

    for (let i = 0; i < 10; i++) {
      const calculation = Math.sin(Math.sqrt(TEMperTure * CarB) / Math.log10(i + 1));
      res = calculation > 0 ? calculation : 0;
    }

    setResult(res.toFixed(2));
  };

  return (
    <div style={{background:"#00FFFF"}}>
      
      <center>
        <h1>Calculateur de Changement Climatique</h1>
      
        <br />
        <br />
        <br />
  
        <br />
        <label >
          Température (en degrés Celsius) :
          <input type="text" onChange={(e) => setTEMperTure(e.target.value)} />
        </label>
        <br />
        <label>
          Émissions de carbone (en tonnes) :
          <input type="text" onChange={(e) => setCarB(e.target.value)} />
        </label>
        <br />
        <br />
        <button style={{  position: "relative", background: "	#808000",  border: "none",

 }} onClick={calc}>Calculer le Changement Climatique</button>
        
        {/* Display the final result */}
        {result !== null && <p>Résultat : {result} degrés Celsius</p>}
      
      </center>
      <br />
      <br />
     
      <img src="/a.png" style={{width:"350px", marginLeft:"600px"}}></img>
    </div>
  );
};

export default FUNCT;
// calculate.worker.js
onmessage = function (event) {
  const { TEMperTure, CarB } = event.data;
  let res = 0;

  for (let i = 0; i < 10; i++) {
    const calculation = Math.sin(Math.sqrt(TEMperTure * CarB) / Math.log10(i + 1));
    res = calculation > 0 ? calculation : 0;
  }

  // Send the result back to the main thread
  postMessage(res);
};
