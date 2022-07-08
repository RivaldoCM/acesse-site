import React, { useState } from "react";

import global from "../../styles/global.js"
import css from "../../styles/home.css"

import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi"


export default function Home(){
    return(
        <div className="home">
            <div className="header-home"></div>
            <main>
                <div className="issue-acesse">
                    <fieldset>
                        <legend>Carangola</legend>
                        <div className="icon">
                            <AiOutlineThunderbolt style={{color: 'orange', fontSize: '30px'}}/>
                        </div>
                        <div className="infos">
                            
                        </div>
                        <button>
                            <HiOutlineTrash style={{fontSize: '24px'}}/>
                        </button>
                    </fieldset>
                </div>
            </main>
        </div>
    )
}