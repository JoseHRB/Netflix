import React from "react";
import './Header.css'

export default () => {
    return (
        <header className='black'>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg" alt="Netflix logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/474x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg"></img>
                </a>
            </div>
        </header>
    )
}