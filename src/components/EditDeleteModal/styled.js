import styled from "styled-components";

const ModalStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    inset: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalBoxStyled = styled.div`
    width: 100%;
    max-width: 369px;
    min-width: 200px;
    margin: 0 15px;
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-grey-2);
        padding: 14px 20px;
        border-radius: 4px 4px 0px 0px;

        h2 {
            font-weight: 700;
            font-size: 14px;
            color: var(--color-grey-0)
        }

        button {
            border: none;
            background-color: transparent;
            color: var(--color-grey-1);
        }

        button:hover{
            cursor: pointer;
        }
    }

    form {
        background-color: var(--color-grey-3);
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        gap: 30px;

        label {
            font-size: 12px;
            font-weight: 400;
        }

        input, select {
            padding: 10px 16px;
            background: var(--color-grey-2);
            border: 1px solid var(--color-grey-0);
            border-radius: 4px;
            color: var(--color-grey-0);
            width: 100%;
        }
        
        section {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 95%;
        }

        span {
        color: var(--color-error);
        font-size: 12px;
    }
    }
`

const ButtonDeleteStyled = styled.button`
    padding: 10px 10px;
    background-color: var(--color-grey-1);
    color: var(--color-grey-0);
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid var(--color-grey-1);
    height: 38px;
    display: flex;
    align-items: center;
`

const DivButtonStyled = styled.button`
    display: flex;
    gap: 22px;
    align-items: center;
    background-color: transparent;
    border: none;

    button:hover {
        cursor: pointer;
    }
`

export { ModalStyled, ModalBoxStyled, ButtonDeleteStyled, DivButtonStyled }