import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  width: 233px;
  height: 32px;

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
  width: 808px;
  height: 46px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 19.2059px;
  line-height: 23px;

  color: #f1f1f1;

  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const Table = styled.div`
  display: flex;
`;

export const Side = styled.div`
border-radius: 8px;
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
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #1C162C;
`;

export const Buttons = styled.div``;

export const TableContent = styled.div`
  display: flex;
`;