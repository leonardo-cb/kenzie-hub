import styled from "styled-components";

const StyledCard = styled.li`
    width: 90%;
    max-height: 49px;
    background-color: var(--color-grey-4);
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
    padding: 13px 22px;

    h2 {
        font-weight: 700;
        font-size: 14px;
        color: var(--color-grey-0);
    }

    span {
        font-size: 12px;
        color: var(--color-grey-1);
    }  

    img:hover {
        cursor: pointer;
    }

`

export { StyledCard }