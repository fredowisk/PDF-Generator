import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-x: hidden;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://site131.esites.pro/wp-content/uploads/sites/717/2019/02/bg195.jpg")
    no-repeat 70%;

  > h2 {
    font-size: 3.8rem;
    font-weight: 700;
    color: #f4b942;
    letter-spacing: -0.1rem;
  }

  > h3 {
    font-family: Playfair, serif;
    font-size: 2rem;
    font-weight: 400;
    color: #d2d7df;
    position: relative;

    &:before {
      content: "";
      display: block;
      width: 1rem;
      height: 0.1rem;
      background: #d2d7df;
      position: absolute;
      left: -1rem;
      top: 50%;
    }

    &:after {
      content: "";
      display: block;
      width: 1rem;
      height: 0.1rem;
      background: #d2d7df;
      position: absolute;
      right: -1rem;
      top: 50%;
    }
  }
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    color: #fff;
    margin-left: 0.5rem;
    margin-bottom: 0.4rem;
  }

  input {
    border: 0;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 1rem;
  }

  button {
    width: 40%;
    padding: 1rem;
    margin-top: 1.8rem;
    border-radius: 0.6rem;
    background: #f4b942;
    color: #fff;
    font-weight: bold;
    transform: translateX(140%);
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: #d2d7df;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const InputBlock = styled.div`
  display: flex;

  div:first-child {
    margin-right: 0.5rem;
  }

  input {
    margin-top: 0.4rem;
  }
`;
