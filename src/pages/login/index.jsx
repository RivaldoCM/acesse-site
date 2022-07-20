import { useState } from "react";
import { Container } from "./styles"
import { api } from "../../services/api";

import { BiUser } from "react-icons/bi"
import { RiLockPasswordLine } from "react-icons/ri"
import { MdOutlineLogin } from "react-icons/md"

export function Login(){
    const [ username, setUser ] = useState(null);
    const [ password, setPassword ] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/login", { username, password }  ).then((response) => {
            localStorage.setItem("token", response.data.token)
            window.location.href = "/home"
            }
        );
    }

    return(
        <Container className="flex">
            <div className="login">
                <div className="login__item flex">
                    <h1>ACESSE</h1>
                </div>
                <div className="content flex">
                    <form action="" onSubmit={handleSubmit} className="flex">
                        <div className="content__item flex">
                            <div className="content__icon">
                                <BiUser fontSize="1.5rem"/>
                            </div>
                            <input 
                                type="text" 
                                placeholder="Email: "
                                required
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>
                        <div className="content__item flex">
                            <div className="content__icon">
                                <RiLockPasswordLine fontSize="1.5rem"/>
                            </div>
                            <input
                                id="teste"
                                type="password" 
                                placeholder="Senha: "
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit"><MdOutlineLogin fontSize="2rem"/></button>
                    </form>
                </div>
            </div>
        </Container>
    )
}