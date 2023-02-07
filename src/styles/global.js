import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {

        --color-primary: #ff577f;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;

        --color-success: #3FE864;
        --color-error: #E83F5B;

    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    body,html {
        width: 100vw;
        height: 100vh;
    }

    body {
        background-color: var(--color-grey-4);
        color: var(--color-grey-0)
    }
`