import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import DataDiri from "./components/DataDiri";
import Katalog from "./components/Katalog";

const menu = [ 
  {
    id: '1',
    gambar: '/Redmi9.jpg',
    ketgambar: 'Redmi 9',
    href: '#',
    nama: 'Redmi 9',
    harga: 'Rp. 1.599.000',
    warna: 'Grey',
  },
  {
    id: '2',
    gambar: 'Redmi9A.jpg',
    ketgambar: 'Redmi 9A',
    href: '#',
    nama: 'Redmi 9A',
    harga: 'Rp. 1.179.000',
    warna: 'Blue',
  },
  {
    id: '3',
    gambar: 'Redmi9C.jpg',
    ketgambar: 'Redmi 9C',
    href: '#',
    nama: 'Redmi 9C',
    harga: 'Rp. 1.399.000',
    warna: 'Blue',
  },
  {
    id: '4',
    gambar: 'Redmi9T.jpg',
    ketgambar: 'Redmi 9T',
    href: '#',
    nama: 'Redmi 9T',
    harga: 'Rp. 2.399.000',
    warna: 'Orange',
  },
  {
    id: '5',
    gambar: 'Redmi10.jpg',
    ketgambar: 'Redmi 10',
    href: '#',
    nama: 'Redmi 10',
    harga: 'Rp. 2.399.000',
    warna: 'Gold',
  },
  {
    id: '6',
    gambar: 'RedmiNote8.jpg',
    ketgambar: 'Redmi Note 8',
    href: '#',
    nama: 'Redmi Note 8',
    harga: 'Rp. 2.699.000',
    warna: 'Blue',
  },
  {
    id: '7',
    gambar: 'RedmiNote9.jpg',
    ketgambar: 'Redmi Note 9',
    href: '#',
    nama: 'Redmi Note 9',
    harga: 'Rp. 2.399.000',
    warna: 'White',
  },
 ];

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
    <Katalog
      judul="Katalog HP"
      subjudul="HP Redmi Terlaris"
      menu={menu}
      note="Harga update per September 2021"
    />
  </React.StrictMode>,
  document.getElementById("root")
);