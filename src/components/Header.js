import React, { useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "./Theme";
// import GlobalTheme from "./Global";
// import styled from "styled-components";
import ReactSwitch from 'react-switch' 
import { useDarkMode } from '../hooks/useDarkMode'

const Header = () => {
    const location = useLocation();

    const {theme, setTheme} = useDarkMode()

    const toggleTheme = () => {
        setTheme(!theme)
        console.log(theme)
    }

    return (
        <header style={{height:"100vh"}} className={`col-2 d-flex ${!theme ? "bg-dark text-white" : "bg-light"} bg-gradient align-items-center`}>
            <nav className='col-12 d-flex flex-column justify-content-around text-center align-items-center'>
                <ul className='navbar-nav mb-5'>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link className='nav-link' to="/"><i class="bi bi-house"></i> Home</Link>
                    </li>
                    <li className={location.pathname === '/sobre' ? 'active' : ''}>
                        <Link className='nav-link' to="/sobre"><i class="bi bi-fingerprint"></i> Sobre</Link>
                    </li>
                    <li className={location.pathname === '/projetos' ? 'active' : ''}>
                        <Link className='nav-link' to="/projetos"><i class="bi bi-pc-display-horizontal"></i> Projetos</Link>
                    </li>
                    <li className={location.pathname === '/cursos' ? 'active' : ''}>
                        <Link className='nav-link' to="/cursos"><i class="bi bi-journal-bookmark-fill"></i> Cursos</Link>
                    </li>
                </ul>
                <p>Tema:</p>
                <ReactSwitch 
                onChange={toggleTheme} 
                checked={theme}
                offColor="#"
                onColor="#212529"
                offHandleColor="#eeeeff"
                onHandleColor="#eeeeff"
                uncheckedIcon={
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15
                    }}
                    >
                    🌙
                    </div>
                }
                checkedIcon={
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15
                    }}
                    >
                    ☀️
                    </div>
                }
                uncheckedHandleIcon={
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15
                    }}
                    >
                    ☀️
                    </div>
                }
                checkedHandleIcon={
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15
                    }}
                    >
                    🌙
                    </div>
                }
                className="react-switch"
                id="small-radius-switch"
                />
            </nav>
        </header>
    )
}

export default Header