import React from 'react';

import {
  DivPai,
  DivBack,
  Form,
  DivFormInputEmail,
  DivFormInputPass,
  DivFormInputName,
  DivBotao,
} from './styles';

import Telacad from './../../Assets/telacadastro.jpg';

function Cadastro() {
  return (
    <>
      <DivPai>
        <DivBack>
          <img src={Telacad} id="Telacad2" />

          <Form>
            <DivFormInputName>
              <p className="Name">Name</p>
              <input type="text" placeholder="Enter your name"></input>
            </DivFormInputName>

            <DivFormInputEmail>
              <p className="email">Email</p>
              <input type="email" placeholder="Enter your email"></input>
            </DivFormInputEmail>
            <DivFormInputPass>
              <p className="pass">Password</p>
              <input type="password" placeholder="Enter your Password"></input>
            </DivFormInputPass>
            <DivBotao>
              <button> Join </button>
            </DivBotao>
          </Form>
        </DivBack>
      </DivPai>
    </>
  );
}

export default Cadastro;
