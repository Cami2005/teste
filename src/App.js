import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function dobro(numero){
  if (isNaN(numero))
     return "erro";
  else
     return numero *2;
}



function App() {
  const [numero, setNumero] = useState(0);
  const [resposta, setResposta] = useState(0);


function calcularClick(){
  let x = dobro(numero);
  setResposta(x);
}

  return (
    <div className="App">
     
     <div>
       <Link to='/'> Voltar para menu</Link> 
       <h1> bom dia</h1>
        <h2> Calcule o Dobro</h2>
        <h3> Insira o valor:</h3>    
        <div>
          <label> Número: </label>
          <input type="text" 
          value={numero} onChange={e => setNumero(Number(e.target.value))} 
          />
        
        </div>  
        <button className="botao" onClick ={calcularClick} > Calcular</button>
        <div>O resultado é <span> {resposta} </span> </div>      
     </div>

    </div>
  );
}

export default App;
