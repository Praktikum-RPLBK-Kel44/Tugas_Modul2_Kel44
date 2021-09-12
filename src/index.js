import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import DataDiri from "./components/DataDiri";

const kami = [ 
  {
    nama: 'Muhammad Abdul Majid',
    nim: '21120118140042',
    kelompok: '44',
    univ: 'Teknik Komputer, Undip',
    email: 'muhammadabdulmajid36@gmail.com',
    foto: "./assets/images/Me.jpg",
    github: 'DMKH36',
  },
  {
    nama: 'Pradana Ega Putra',
    nim: '21120118140075',
    kelompok: '44',
    univ: 'Teknik Komputer, Undip',
    email: 'egaputra00@gmail.com',
    foto: "./assets/images/Me.jpg",
    github: 'egaputra00',
  }
 ];

const  quotes = "Kerja Kerja Kerja Tipes :/";


ReactDOM.render (
  <React.StrictMode>
    <App />
    <DataDiri
      judul="Data Diri Kelompok 44"
      kami={kami}
      quotes={quotes}
      author="manusia"
    />
  </React.StrictMode>,
  document.getElementById("root")
);