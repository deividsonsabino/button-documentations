import React from 'react'
import Button from '../../components/Button'
import { Container, Title, Description, Table, Side, Header, Buttons, TableContent, Titles } from './styles'

export default function Home() {

    const buttonList = [
        {
            name: 'default',
            types: [
                { name: 'primaryButton' },
                { name: 'secondButton' },
                { name: 'tercButton' },
                { name: 'cursor' },
            ]
        }/* ,
        {
            name: 'hover',
            types: [
                { name: 'primaryButton' },
                { name: 'secondButton' },
                { name: 'tercButton' },
                { name: 'cursor' },
            ]
        },
        {
            name: 'focus',
            types: [
                { name: 'primaryButton' },
                { name: 'secondButton' },
                { name: 'tercButton' },
                { name: 'cursor' },
            ]
        },
        {
            name: 'disabled',
            types: [
                { name: 'primaryButton' },
                { name: 'secondButton' },
                { name: 'tercButton' },
                { name: 'cursor' },
            ]
        },
        {
            name: 'loading',
            types: [
                { name: 'primaryButton' },
                { name: 'secondButton' },
                { name: 'tercButton' },
                { name: 'cursor' },
            ]
        },
        {
            name: 'movable',
            types: [
                { name: 'primaryButton' },
                { name: 'secondButton' },
                { name: 'tercButton' },
                { name: 'cursor' },
            ]
        }, */
    ]

    const listButtonType = (name: string) => {
        return (
            <Button name={name} />
        )
    }

    return (
        <Container>
            <div>
                <Title>Tipos de botão</Title>
                <Description>Dentro de um layout, botões servem para destacar ações importantes a serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.</Description>
            </div>
            <Table>
                <Side>
                    <div>
                        <p>{""}</p>
                        <p>DEFAULT</p>
                        <p>HOVER</p>
                        <p>FOCUS</p>
                        <p>DISABLED</p>
                        <p>LOADING</p>
                        <p>MOVABLE</p>
                    </div>
                </Side>
                <Header>
                    <Titles>
                        <p>BOTÃO PRIMÁRIO</p>
                        <p>BOTÃO SECUNDÁRIO</p>
                        <p>BOTÃO TERCIÁRIO</p>
                        <p>CURSOR</p>
                    </Titles>
                    <TableContent>
                        <Buttons>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </Buttons>
                        <Buttons>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </Buttons>
                        <Buttons>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </Buttons>
                        <Buttons>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </Buttons>
                        <Buttons>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </Buttons>
                    </TableContent>
                </Header>
            </Table>

        </Container>
    )
}
