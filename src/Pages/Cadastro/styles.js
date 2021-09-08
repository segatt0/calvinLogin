import styled from 'styled-components';

export const DivPai = styled.div`
  display: flex;
  position: absolute;

  width: 100%;
  height: 100%;
`;

export const DivBack = styled.div`
  width: 51%;
  height: 100%;
  #Telacad2 {
    position: fixed;
    width: 1000px;
    right: 839px;
    top: 36px;
  }
`;

export const Form = styled.form`
  width: 641px;
  height: 833px;
  position: absolute;
  right: 14%;
  bottom: 5%;
  opacity: 90%;
  border-radius: 108px;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 15px;

  h2 {
    font-family: 'Amatic SC', cursive;
    font-size: 57px;
    color: #5aaf6a;
  }
  p {
    font-family: 'Amatic SC', cursive;
    font-size: 20px;
    color: #377236;
  }
`;
export const DivFormSubContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 10px;

  input {
    padding: 10px;
    width: 80%;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    border-color: green;
  }
  .InputConfirm {
    margin-top: 25px;
  }
`;

export const DivFormInputName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const DivFormInputEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13px;

  width: 100%;

  position: relative;
`;

export const DivFormInputPass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 13px;
  position: relative;
`;
export const DivBotao = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;

  .botau {
    width: 83%;
    height: 55px;
    border: none;
    cursor: pointer;
    border-radius: 2px;
  }

  .botau {
    background-image: linear-gradient(
      to right,
      #3ca55c 0%,
      #b5ac49 51%,
      #3ca55c 100%
    );
  }
  .botau {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
  }

  .botau:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const DivFormBottom = styled.div`
  display: flex;
  width: 90%;
  height: 8%;
  margin-top: 51px;
  justify-content: space-evenly;

  img {
    width: 67px;
    height: auto;
    cursor: pointer;
    border-radius: 108px;
  }
`;
