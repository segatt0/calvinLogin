import styled from 'styled-components';

export const DivPai = styled.div`
  display: flex;
  position: absolute;
  background-color: red;
  width: 100%;
  height: 100%;
`;

export const DivBack = styled.div`
  width: 100%;
  height: 100%;
  #Telacad2 {
    position: fixed;
  }
`;

export const Form = styled.form`
  background-color: orange;
  width: 612px;
  height: 687px;
  position: absolute;

  right: 3%;
  bottom: 16%;
  opacity: 92%;
  border-radius: 32px;
  border: solid 3px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  input {
    width: 94%;
    padding: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
  }
`;

export const DivFormInputName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  position: relative;
`;

export const DivFormInputEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  position: relative;
`;

export const DivFormInputPass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
  position: relative;
`;
export const DivBotao = styled.div``;
