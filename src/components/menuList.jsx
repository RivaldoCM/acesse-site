import React from "react";

import { Container } from "../styles/menuList";

export function MenuList(props) {
    return(
        <Container className="flex">
            <a href={props.redirect} className="flex">
                <div className="icon flex">
                    {props.icon}
                </div>
                <div className="name flex"><p>{props.name}</p></div>
                <div className="notify"></div>
            </a>

        </Container>
    )
}