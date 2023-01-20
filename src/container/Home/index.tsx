import React from 'react'
import { Container, Title, Description,TableRow, Col } from './styles'

export default function Home() {
    return (
        <Container>
            <Title>Tipos de botão</Title>
            <Description>Dentro de um layout, botões servem para destacar ações importantes a serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.</Description>
            <table>
                <thead>
                    <TableRow>
                        <th>&nbsp;</th>
                        <th>BOTÃO PRIMÁRIO</th>
                        <th>BOTÃO SECUNDÁRIO</th>
                        <th>BOTÃO TERCIÁRIO</th>
                        <th>CURSOR</th>
                    </TableRow>
                </thead>

                <TableRow>
                    <td>Item 1</td>
                    <td>R$10,00</td>
                </TableRow>
                <TableRow>
                    <td>Item 2</td>
                    <td>R$20,00</td>
                </TableRow>
            </table>
        </Container>
    )
}
