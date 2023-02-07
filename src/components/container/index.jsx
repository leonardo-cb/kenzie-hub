import { ContainerStyled } from "./styled";

function Container( {children} ) {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export { Container }