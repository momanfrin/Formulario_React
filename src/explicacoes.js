import React from 'react'

class NameForm extends React.Component { //criando uma class component e herda o componente basico do React
    constructor(props) { //construtor - constroi e inicializa a classe, recebe uma props que consegue trocar o valor
      super(props);
      this.state = {value: ''}; //state - controlar estado da variavel 
  
      this.handleChange = this.handleChange.bind(this); //pré declarar metodos que vai usar embaixo
      this.handleSubmit = this.handleSubmit.bind(this); //pré declarar metodos que vai usar embaixo
    } //acaba o construtor 
  
    handleChange(event) { //handleChange - recebe o evento que o usuario clica, e o valor que ele digitou ele atribui p a variavel controlada
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) { //handleSubmit - manipular o submit do formulario que ele registra e pesquisa no google o que voce colocar no forms
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
      window.location.href = "https://www.google.com/search?q=" + this.state.value;    

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input type="text" id="pesquisado" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }
  export default NameForm;