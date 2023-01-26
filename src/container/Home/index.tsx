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
                        <p>TITLE</p>
                        <p>TITLE</p>
                        <p>TITLE</p>
                        <p>TITLE</p>
                        <p>TITLE</p>
                    </Titles>
                    <TableContent>
                        <Buttons>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </Buttons>
                        <Buttons>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </Buttons>
                        <Buttons>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </Buttons>
                        <Buttons>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </Buttons>
                        <Buttons>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>6</p>
                        </Buttons>
                    </TableContent>
                </Header>
            </Table>

        </Container>
    )
}
