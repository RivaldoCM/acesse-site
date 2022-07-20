import styled from "styled-components";

export const Container = styled.li`

    width: 100%;
    height: 3rem;
    margin: 0.2rem 0;

    :hover{
        filter: grayscale(100%);
        transition: .3s;
    }

    a{
        width: inherit;
        height: inherit;
        .icon{
            width: 20%;
            height: 100%;
        }

        .name{
            width: 60%;
            height: 100%;

        }

        .notify{
            width: 20%;
            height: 100%;
        }
    }


`