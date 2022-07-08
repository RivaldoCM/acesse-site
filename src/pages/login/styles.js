import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    align-items: center;
    background: #FFFDFD;

    .login{
        width: 450px;
        height: 550px;

        .login__item{
            height: 25%;

            h1{
                font-size: 3rem;
                background: -webkit-linear-gradient(left, #FF6F00 , #FFC9AC);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
        
        .content, form{
            flex-direction: column;
            justify-content: flex-start;
            margin-top: 2rem;
            width: 100%;
            height: 75%;
            

            .content__item{
                width: 60%;
                height: 3rem;
                margin: 0.5rem 0;
                border-bottom: 1px solid black;

                input{
                    width: 100%;
                    margin-left: 0.5rem;
                    background: transparent;
                    font-size: 1rem;

                    ::placeholder{
                        font-size: 1rem;
                    }

                    
                }
            }

            button{
                    margin-top: 1rem;
                    transition: .3s;

                    :hover{
                        transition: .3s;
                        color: #8093f1;
                    }
                }   
        }
    }

`