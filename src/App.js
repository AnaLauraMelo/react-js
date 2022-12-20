import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

  let clienteUno = {

     name:"Ana",
     apellido:"Melo",
     universitario : false ,
     cursos : ["Curso conversacional","Curso para pasar entrevistas","Curso teórico inicial"]
  }

   const {universitario,cursos:[,,c],name,apellido} = clienteUno


   let styles = {
    color:'rgb(243, 211, 160)',
    backgroundColor:'white'
  }



export default App;
