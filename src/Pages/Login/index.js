import React, { useRef, useState, useEffect } from 'react';
import './styles.css';
import img1 from './../../../src/Assets/img1.jpg';
import calvinspace from './../../../src/Assets/calvinspace.png';
import discordBlack from './../../Assets/discordBlack.png';
import discord2 from './../../Assets/discord2.png';
import 'animate.css';
import imgemail from './../../Assets/imgemail.png';
import imgpass from './../../Assets/imgpass.png';
import googleP from './../../Assets/googlePlay.png';
import googleIcon from './../../Assets/googleIcon.png';
import facebookIcon from './../../Assets/facebookIcon.png';

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
  useEffect(function () {
    console.log('oi');
    // console.log('DEBUG!!!', refRight.current.style.backgroundImage);

    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight),
      hue = 217,
      stars = [],
      count = 0,
      maxStars = 1400;

    // Cache gradient
    let canvas2 = document.createElement('canvas'),
      ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }

      if (min > max) {
        let hold = max;
        max = min;
        min = hold;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
      let max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    }

    let Star = function () {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 12;
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 50000;
      this.alpha = random(2, 10) / 10;

      count++;
      stars[count] = this;
    };

    Star.prototype.draw = function () {
      let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
      }

      ctx.globalAlpha = this.alpha;
      ctx.drawImage(
        canvas2,
        x - this.radius / 2,
        y - this.radius / 2,
        this.radius,
        this.radius
      );
      this.timePassed += this.speed;
    };

    for (let i = 0; i < maxStars; i++) {
      new Star();
    }

    function animation() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'lighter';
      for (let i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
      }

      window.requestAnimationFrame(animation);
    }

    animation();
  }, []);

  const discordMouse = useRef(null);
  const refRight = useRef(null);

  const refRight2 = useRef(null);

  function handleMouseDiscordHover() {
    // console.log(discordMouse);
    discordMouse.current.classList.add('animate__rubberBand');
  }

  function handleMouseDiscordOut() {
    setTimeout(function () {
      discordMouse.current.classList.remove('animate__rubberBand');
    }, 1000);
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
                <input type="email" placeholder="Enter your email"></input>
                <img className="littleemail" src={imgemail} />
              </div>
              <div className="inputWrapper">
                <p className="email">Password</p>
                <input
                  type="Password"
                  placeholder="Enter your password"
                ></input>
                <img className="littlePass" src={imgpass} />
              </div>
              <div className="botao">
                <button>Sign Up</button>
              </div>
              <div className="conta">
                <p>
                  <strong>Don't have an account?</strong>
                  <a href="/cadastro"> Click Here!</a>
                  <div className="signIn"></div>
                  <div id="face">
                    <img src={facebookIcon} className="facebook" />
                    <img src={googleIcon} className="googleIcon" />
                  </div>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="bottom">
          {/* <a id="joinDiscord">
            <img id="discordIconOrange" src={discordBlack} alt="fio" />
            <img id="discordIconWhite" src={discordBlack} alt="fio" />

            <p
            // ref={discordMouse}
            // onMouseOver={handleMouseDiscordHover}
            // onMouseOut={handleMouseDiscordOut}
            // className="enjoy animate__animated"
            >
              Join our Discord
            </p>
          </a> */}
        </div>
      </div>
      {/* <div ref={refRight} className="right"></div> */}
      <div ref={refRight2} className="right2">
        <canvas id="canvas"></canvas>
        <img
          style={{
            width: '100%',
            height: 'auto',
            position: 'fixed',
            bottom: '0px',
          }}
          src={calvinspace}
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
