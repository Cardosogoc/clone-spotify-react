import React from "react";
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png'
const Sidebar = () =>{
    return (
        <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="">
            <img src={logoSpotify} alt="Logo do Spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="">
              <span className="fa fa-home"></span>
              <span> Início</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="fa fa-search"></span>
              <span> Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="library">
        <div className="library__content">
          <a href="">
            <span className="fa fa-book"></span>
            <span> Sua biblioteca</span>
          </a>
          <a href="">
            <span className="fa fa-plus"></span>
          </a>
        </div>

        <section className="playlist">
          <div className="playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É facil, vamos te ajudar</span>
            <button className="playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>

        <div class="cookies">
          <a href="">Cookies</a>
        </div>

        <div class="languages">
          <div class="languages__button">
            <span class="fa fa-globe"></span>
            <span> Português do Brasil</span>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Sidebar;