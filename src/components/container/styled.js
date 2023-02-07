import styled from "styled-components";

const ContainerStyled = styled.div`
    width: 90%;
    max-width: 369px;
    min-width: 296px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        background-color: var(--color-grey-3);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
        padding: 0 22px 42px 22px;
        width: 100%;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        margin-bottom: 50px;
    }

    button:hover {
        cursor: pointer;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 72px;
        margin-bottom: 48px;
    }
`

export { ContainerStyled }