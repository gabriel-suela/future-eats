import styled from "styled-components"

export const ContainerFeed = styled.div`
    padding: 0 1rem;
    
`

export const CardsRestaurant = styled.div`
    padding: 0 1rem;
    border-radius: 10px;
`

export const Menu = styled.div `
    width: 100%;
    display: flex;
    overflow-y: scroll;
    height: 2.625rem;
`

export const MenuItem = styled.button`
font-family: Roboto;
font-weight: normal;
font-size: 1rem;
border: none;
outline: none;
padding: 0 1rem;
background: transparent;
text-align: center;
color: ${(category)=> category.selected ? "#5cb646": "black"};
`