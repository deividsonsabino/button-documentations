import React from 'react'
import { Container, Title, Description, Header, Side, Content, Buttons, Table } from './styles'

export default function Home() {
    return (
        <Container>
            <div>
                <Title>Tipos de botão</Title>
                <Description>Dentro de um layout, botões servem para destacar ações importantes a serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.</Description>
            </div>
            <Table>
                <Header>
                    <p></p>
                    <p>BOTÃO PRIMÁRIO</p>
                    <p>BOTÃO SECUNDÁRIO</p>
                    <p>BOTÃO TERCIÁRIO</p>
                    <p>CURSOR</p>
                </Header>
                <Content>
                    <Side>
                        <ul>
                            <li>DEFAULT</li>
                            <li>HOVER</li>
                            <li>FOCUS</li>
                            <li>DISABLED</li>
                            <li>LOADING</li>
                            <li>MOVABLE</li>
                        </ul>
                    </Side>
                    <Buttons>
                        <ul>
                            <li>DEFAULT</li>
                            <li>HOVER</li>
                            <li>FOCUS</li>
                            <li>DISABLED</li>
                            <li>LOADING</li>
                            <li>MOVABLE</li>
                        </ul>
                        <ul>
                            <li>DEFAULT</li>
                            <li>HOVER</li>
                            <li>FOCUS</li>
                            <li>DISABLED</li>
                            <li>LOADING</li>
                            <li>MOVABLE</li>
                        </ul>
                        <ul>
                            <li>DEFAULT</li>
                            <li>HOVER</li>
                            <li>FOCUS</li>
                            <li>DISABLED</li>
                            <li>LOADING</li>
                            <li>MOVABLE</li>
                        </ul>
                        <ul>
                            <li>DEFAULT</li>
                            <li>HOVER</li>
                            <li>FOCUS</li>
                            <li>DISABLED</li>
                            <li>LOADING</li>
                            <li>MOVABLE</li>
                        </ul>
                    </Buttons>
                </Content>


            </Table>

        </Container>
    )
}
