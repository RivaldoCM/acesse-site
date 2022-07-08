import { useState } from "react";
import { Container } from "./styles"

import { BiUser } from "react-icons/bi"
import { RiLockPasswordLine } from "react-icons/ri"
import { MdOutlineLogin } from "react-icons/md"

export default function Login(){
    const [ user, setUser ] = useState(null);
    const [ password, setPassword ] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {user, password});
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
                                type="email" 
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