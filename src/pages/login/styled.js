import styled from "styled-components";

const ButtonPrimary = styled.button`
    width: 95%;
    padding: 10px 0;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
`

const ButtonDark = styled.button`
    width: 95%;
    padding: 10px 0;
    background-color: var(--color-grey-1);
    color: var(--color-grey-0);
    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
`

const FormStyled = styled.form`
    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    padding: 0 22px 42px 22px;
    width: 100%;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    h2 {
        margin: 42px 0px 6px 0px;
    }

    label {
        font-size: 12px;
        font-weight: 400;
    }

    input {
        padding: 10px 16px;
        background: var(--color-grey-2);
        border: 1px solid var(--color-grey-0);
        border-radius: 4px;
        color: var(--color-grey-0);
        width: 100%;
    }
    
    div {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 95%;
    }

    small {
        font-size: 12px;
        font-weight: 600;
        color: var(--color-grey-1);
    }

    span {
        color: var(--color-error);
        font-size: 12px;
    }

`

const ImgStyled = styled.img`
    margin-top: 72px;
    margin-bottom: 48px;
`

export { ButtonPrimary, ButtonDark, FormStyled, ImgStyled }