import React, { useEffect, useState } from 'react';
import api from './api'; 

//criando um estado para salvar as informações 
export default function App() {
  const [user, setUser] = useState();
 
  useEffect(() => {
    api
      .get("/indicador_compras_anteriores/4/2022")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


//componente que realiza uma busca na api 
//  async componentDidMount() {
 //   const response = await api.get('');
 //   console.log(response.data)
  //  this.setState({ dados: response.data });
 // }

//renderiza o valoR

    //retorna os valores na tela
    return (
      <div className="App">
        <p>Empresa: {user?.account}</p>
        <p>Indicador: {user?.indicador}</p>
      </div>
    );
  }


