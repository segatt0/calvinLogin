import React from 'react';

import {
  DivPai,
  DivBack,
  Form,
  DivFormInputEmail,
  DivFormInputPass,
  DivFormInputName,
  DivBotao,
  DivFormSubContainer,
  DivFormBottom,
} from './styles';

import Telacad from './../../Assets/img3.png';
import googleIcon from './../../Assets/googlegreen.jpg';
import facebookIcon from './../../Assets/facegreen.jpeg';

function Cadastro() {
  return (
    <>
      <DivPai>
        <DivBack>
          <img src={Telacad} id="Telacad2" />

          <Form action="submit">
            <h2>Registration Screen</h2>
            <DivFormSubContainer>
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
                <input
                  type="password"
                  placeholder="Enter your Password"
                ></input>
                <input
                  className="InputConfirm"
                  type="password"
                  placeholder="Confirm your Password"
                />
              </DivFormInputPass>
              <DivBotao>
                <button className="botau"> Join </button>
              </DivBotao>
            </DivFormSubContainer>
            <DivFormBottom>
              <img src={facebookIcon} className="facebook2" />
              <img src={googleIcon} className="googleIcon2" />
            </DivFormBottom>
          </Form>
        </DivBack>
      </DivPai>
    </>
  );
}

export default Cadastro;
