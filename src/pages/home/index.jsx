import { React, useEffect } from "react";

import { FaUserAlt } from "react-icons/fa"
import { FiPause } from "react-icons/fi"
import { TiWarningOutline } from "react-icons/ti"

import { Container } from "./styles.js";
import { MenuList } from "../../components/menuList";

export function Home(){
    useEffect(() => {
        if (!localStorage.getItem("token")){
            window.location.href = "/login"
        }
    }, []);

    return(
        <Container className="flex">
            <aside>
                <div className="profile flex">
                    <div className="profile__item flex">
                        <div className="profile--icon">
                            <FaUserAlt fontSize="3rem" />
                        </div>
                    </div>
                    <div className="profile__item">

                    </div>
                </div>
                <nav>
                    <ul className="flex">
                        <MenuList name="Massiva" redirect="massiva" icon={<TiWarningOutline fontSize="1.5rem"/>}/>
                        <MenuList name="Pausa" redirect="pausa" icon={<FiPause fontSize="1.5rem"/>} />
                        <MenuList name="Planilha Massiva" redirect="pausa"/>    
                        <MenuList name="seila" redirect="pausa"/>
                    </ul>
                </nav>
            </aside>
            <div className="view-page">

            </div>
        </Container>
    )
}