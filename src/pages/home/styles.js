import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: auto;

    aside{
        width: 20%;
        height: 100vh;
        background: #f5f5eb;

        .profile{
            width: 100%;
            height: 8rem;

            .profile__item:first-child{
                width: 35%;
                height: 80%;
                margin: 0 0.5rem;
                border: 1px solid #000;
                border-radius: 1rem;
            }

            .profile__item:last-child{
                width: 65%;
                height: 100%;
            }
        }
        nav{
            margin-top: 4rem;
            
            ul{
                flex-direction: column;
            }
        }
    }

    .view-page{
        width: 80%;
        height: 100vh;
        background: #b2b5b7;
    }

`