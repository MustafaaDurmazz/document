import React, { useState } from "react";
import logo from "../assets/MyLogo.png";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleLogin = () => {
    if (inputValue.trim() !== "") {
      setIsLoggedIn(true);
      setUserName(inputValue);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setInputValue("");
  };

  return (
    <div className="app-container">
      <header>
      {isLoggedIn && (
        <><h1>MUSTAFA DURMAZ BLOG SAYFASI</h1><img src={logo} alt="logo" className="logo" /><nav>
            <ul>
              <li><a href="#home">Blog</a></li>
              <li><a href="#category1">Contact</a></li>
            </ul>
          </nav></>
        )}
      </header>
      <main>
        {isLoggedIn ? (
          <div className="blog-content">
            <h2>Merhaba {userName}!</h2>
            <p>Bu sayfada yeni ve ilginç içerikler bulabilirsiniz.</p>
            <button onClick={handleLogout}>Çıkış Yap</button>
          </div>
        ) : (
          <div className="login-form">
            <h2>Giriş Yapn</h2>
            <input
              type="text"
              placeholder="Kullanıcı Adınızı Girin"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleLogin}>Giriş Yap</button>
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 Blog Sayfası</p>
        {/* Diğer altbilgi (footer) bilgileri */}
      </footer>
    </div>
  );
};

export default App;
