import React, { useRef } from 'react';
import './styles.css';
import img1 from './../../../src/Assets/img1.jpg';
import discord from './../../Assets/discord.png';
import 'animate.css';

// let discordMouse = document.querySelector('.enjoy');
// discordMouse.addEventListener(
//   'mouseover',
//   function () {
//     discordMouse.classList.add('animate__flash');
//   },
//   false
// );
// discordMouse.addEventListener(
//   'mouseout',
//   function () {
//     discordMouse.classList.remove('animate__flash');
//   },
//   false
// );

function Login() {
  const discordMouse = useRef(null);

  function handleMouseDiscordHover() {
    // console.log(discordMouse);
    discordMouse.current.classList.add('animate__flash');
  }

  function handleMouseDiscordOut() {
    setTimeout(function () {
      discordMouse.current.classList.remove('animate__flash');
    }, 2000);
  }

  return (
    <div id="loginScreen">
      <div className="left">
        <div className="top">
          <form>
            <div className="rei">
              <h1>Login Screen</h1>
              <div className="inputWrapper">
                <p className="email">Email</p>
                <input type="email" placeholder="Digite seu email"></input>
              </div>
              <div className="inputWrapper">
                <p className="email">Password</p>
                <input type="Password" placeholder="Digite sua senha"></input>
              </div>
              <div className="botao">
                <button>Sign Up</button>
              </div>
              <div className="conta">
                <p>
                  <strong>Don't have an account?</strong>{' '}
                  <a href="#">Click Here!</a>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="bottom">
          <a>
            <img src={discord} alt="fio" />
            <p
              ref={discordMouse}
              onMouseOver={handleMouseDiscordHover}
              onMouseOut={handleMouseDiscordOut}
              class="animate__animated animate__flash"
              className="enjoy"
            >
              Join our Discord
            </p>
          </a>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Login;
