import styled from "styled-components";

export const Container = styled.div`
    max-width: 1140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const Title = styled.h1`


  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Description = styled.p`
  margin-top: 8px;
  margin-bottom: 68px;


  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;

  color: #f1f1f1;

  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
`;

export const Side = styled.div`
border-radius: 8px 0px 0px 8px;
box-sizing: border-box;

display: flex;
flex-direction: column;
align-items: center;
background: #1C162C;
  p {
    padding: 22px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;

    text-align: center;
    color: #FFFFFF;
  }
`;

export const Header = styled.div`
  border-radius: 0px 8px 8px 0px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #1C162C;
`;

export const Titles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25.5px;
  p {
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #FFFFFF;
    }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    padding: 22px;

  }
`;

export const TableContent = styled.div`
  border: solid 6px #1C162C;
  height: 100%;
  background-color: #0b0911;
  width: 100%;
  display: flex;
`;