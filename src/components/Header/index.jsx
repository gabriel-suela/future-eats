import React from "react";
import {  ContainerHeader, Title } from "./styled";

const Header = ({title}) => {
    return(
        <ContainerHeader>
            <Title>{title}</Title>
        </ContainerHeader>
    )
}

export default Header