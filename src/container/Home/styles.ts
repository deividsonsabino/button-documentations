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

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 16px;
  gap: 32px;

  width: 865px;
  height: 64px;

  //background: #1c162c;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const TableDataCell = styled.td`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #0b0911;
`
interface ColProps {
  backgroundColor?: string;
}

export const Col = styled.col<ColProps>`
  background-color: ${props => props.backgroundColor || "#F1F1F1"};
`