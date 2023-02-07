import styled from "styled-components";

const NavBarStyled = styled.nav`
    width: 100%;
    border-bottom: 1px solid var(--color-grey-3);
    
    div {
        margin: 29px auto;
        width: 90%;
        max-width: 775px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button:hover{
        cursor: pointer;
        background-color: var(--color-grey-2);
    }
`

const HeaderStyled = styled.header`
    width: 100%;
    border-bottom: 1px solid var(--color-grey-3);

    div {
        margin: 45px auto;
        width: 90%;
        max-width: 775px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2{
            color: var(--color-grey-0);
            font-size: 18px;
            font-weight: 600;
        }

        span {
            color: var(--color-grey-1);
            font-size: 12px;
            font-weight: 600;
        }
        
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }
    }

`

const SectionStyled = styled.section`
    width: 100%;

    div {
        margin: 37px auto;
        width: 90%;
        max-width: 775px;
        display: flex;
        gap: 26px;
        align-items: center;
        justify-content: space-between;

        h2{
            color: var(--color-grey-0);
            font-size: 18px;
            font-weight: 600;
        }

        button {
            padding: 10px 12px;
            background-color: var(--color-grey-3);
            color: var(--color-grey-0);
            border-radius: 4px;
            border: 1px solid var(--color-grey-3);
        }

        button:hover{
            cursor: pointer;
            background-color: var(--color-grey-2);
        }
    }
`

const TechListStyled = styled.ul`
    width: 90%;
    margin: 0 auto;
    max-width: 775px;
    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 23px 0;
    gap: 16px;

    li:hover {
        background-color: var(--color-grey-2);
        cursor: pointer;
    }
`

export { NavBarStyled, HeaderStyled, SectionStyled, TechListStyled }