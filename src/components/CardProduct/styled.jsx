import styled from 'styled-components'

export const ContainerCardProduct = styled.div `
    /* width: 100%;
    margin: 0.5rem 0;
    display: flex;
    border: 1px solid grey;
    border-radius: 8px; */

`
export const ProductImage = styled.img `
    width: 100%;
    height: 7.5rem;
    border-radius: 12px 12px 0 0;
    object-fit: contain;
`

export const BoxInform = styled.div`
    
`

export const BoxNameQuantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1 px solid red;
    width: 2.063rem;
    height: 2.063rem;
`
export const ProductQuantity = styled.div`
   display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 0 0 1rem;
    flex-grow: 1;

`
export const ProductName = styled.h3 `
    font-family: Roboto;
    font-size: 1rem;
    color: #5cb646;
`

export const PriceInfo = styled.p `
`
export const ButtonInfo = styled.button`
    width: 5rem;
    height: 2rem;
    border-radius: 8px 0 8px 0;
    background-color: white;
    outline: none;
    border: 1px black solid;
`