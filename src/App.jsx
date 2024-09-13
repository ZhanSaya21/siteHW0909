import logo from "./logo.svg";
import "./App.css";
import { Card } from "./card";
import { Form } from "./form";

function App() {
  return (
    <div>
      <header>
        <nav className="siteHeader" id="home">
          <h1>Jujutsu Kaisen</h1>
          <h3>Магическая битва</h3>
          <li>
            <a href="#home">Главная</a>
          </li>
          <li>
            <a href="#characters">Персонажи</a>
          </li>
          <li>
            <a href="#gallery">Галерея</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </nav>
      </header>

      <div className="adds">здесь будет видео</div>

      <main>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="characters"
        >
          <Card />
        </div>
        );
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="characters"
        >
          <Card />
        </div>
        <div className="cardsGalery" id="gallery">
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
          <ul className="cardsGalery-item">1</ul>
        </div>
      </main>
      <div>
        <Form />
      </div>
      <footer id="contacts">
        <div className="footerSocials__inner">
          <a
            href="https://www.facebook.com/Kaspi.kz"
            className="footerSocials__item footerSocials__item--fb"
            target="_blank"
            data-ddl-label="Facebook"
          >
            <span></span>
          </a>
          <a
            href="https://vk.com/kaspikz"
            className="footerSocials__item footerSocials__item--vk"
            target="_blank"
            data-ddl-label="Vk"
          >
            <span></span>
          </a>
          <a
            href="https://twitter.com"
            className="footerSocials__item footerSocials__item--twt"
            target="_blank"
            data-ddl-label="Twitter"
          >
            <span></span>
          </a>
          <a
            href="https://www.instagram.com"
            className="footerSocials__item footerSocials__item--insta"
            target="_blank"
            data-ddl-label="Instagram"
          >
            <span></span>
          </a>
          <a
            href="https://ok.ru"
            className="footerSocials__item footerSocials__item--ok"
            target="_blank"
            data-ddl-label="Ok"
          >
            <span></span>
          </a>
          <a
            href="https://youtube.com"
            className="footerSocials__item footerSocials__item--yt"
            target="_blank"
            data-ddl-label="Youtube"
          >
            <span></span>
          </a>
          <a
            href="https://t.me"
            className="footerSocials__item footerSocials__item--teleg"
            target="_blank"
            data-ddl-label="Telegram"
          >
            <span></span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
