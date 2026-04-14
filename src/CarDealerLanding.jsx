import React from "react";
import { useState } from "react";

import logo from "./assets/SOUTH_LOGO.jpg";
import agencia_picture from "./assets/agencia_foto.jpeg";

import instagramIcon from "./assets/icons8-instagram-windows-11-color-32.png";
import tiktokIcon from "./assets/icons8-tiktok-ios-17-filled-32.png";
import facebookIcon from "./assets/icons8-facebook-32.png";
import youtubeIcon from "./assets/icons8-youtube-24.png";



export default function CarDealerLanding() {

  const whatsappLink = "https://wa.me/5491169339029";
  const igLink = "https://www.instagram.com/";
  const tiktokLink = "https://www.tiktok.com/";
  const facebookLink = "https://www.facebook.com/";
  const youtubeLink = "https://www.youtube.com/";

  const cars = [
    {
      name: "Citroën C3 Aircross 1.6 Vti 115 Feel",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_811669-MLA107467190674_032026-F.webp",
      link: "https://auto.mercadolibre.com.ar/MLA-1690745761-citron-c3-aircross-16-vti-115-feel-_JM#polycard_client=search-desktop&search_layout=grid&position=1&type=item&tracking_id=9b861b03-372c-471c-9907-02d392aad73d"
    },
    
  ];

  const [displayInventory,setDisplayInventory] = useState(false);

  const showInventory = () => {
    setDisplayInventory(true);
  }
  const hideInventory = () => {
    setDisplayInventory(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gray-200"><img src={logo} alt="Logo" /></div>
            
            <div>
              <span className="font-semibold text-lg">South Autos</span>
              <span className="text-gray-500 text-sm block">Av. 12 de octubre 327, Quilmes</span>
            </div>
            
          </div>
          <nav className="hidden md:flex gap-8 text-m">
            <a href="#begin" className="hover:text-black">Inicio</a>
            <a href="#inventory" className="hover:text-black">Inventario</a>
            <a href="#us" className="hover:text-black">Nosotros</a>
            <a href="#contact" className="hover:text-black">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id ="begin" className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ENCUENTRA EL AUTO <br /> DE TUS SUEÑOS
        </h1>
        <p className="text-gray-600 mb-12">
          Explora nuestro inventario de vehículos de alta calidad.
        </p>
        <a href="#inventory">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition">
          Ver Inventario
          </button>
        </a>
      </section>

      {/* Inventory */}
      <section id="inventory" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Nuestro Inventario Destacado
        </h2>

        <Inventory displayInventory={displayInventory} cars={cars} />

        <InventoryButton cars ={cars} displayInventory={displayInventory} showInventory={showInventory} hideInventory={hideInventory} />
    
        
      </section>

      {/* US */}
      <section id="us" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Nosotros
            </h2>
            <p className="text-gray-600 mb-6">
              Somos DS Vehículos...
              <br />
              <br />
              Buscamos brindar la mejor experiencia de compra de autos 0km y usados de calidad en Quilmes y sus alrededores.
              <br />
              <br />
              📍Te esperamos en Av. 12 de octubre 327 (Quilmes) para brindarte la Atención que te mereces !!! 
              <br />
              <br />
              👉🏼Consultanos por Amplia Financiación a tasa fija 
              <br />
              <br />
              ⚠️Evaluamos tu Usado para Permuta o Consignación via On Line
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-xl">
                Contáctanos
              </button>
            </a>
          </div>

          <img
            src={agencia_picture}
            className="rounded-2xl shadow w-full"
          />
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="flex text-center justify-center items-center gap-4 text-gray-600 border-2 border-gray-300 rounded-xl p-6 max-w-md mx-auto">
            <p>+11 6933-9029 / Daniel
            </p>   
            <a href={whatsappLink} className="">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>  
            
            </a>
            
          </div>
          {/* Social media */}
          <div>
              <h3 className="text-lg font-semibold mt-8 mb-4">Seguinos en nuestras redes sociales</h3>
              <div className="flex justify-center gap-6 align-items-center">
                <div>
                  <a href={igLink} target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="w-22 h-22" />
                  </a>
                </div>
                <div>
                  <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                    <img src={tiktokIcon} alt="TikTok" className="w-22 h-22" />
                  </a>
                </div>
                <div>
                  <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-22 h-22" />
                  </a>
                </div>
                <div>
                  <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                    <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>

      <a target="_blank" class="fixed right-5 bottom-5 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600" href={whatsappLink}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></a>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} South Autos. Todos los derechos reservados.
      </footer>
    </div>
  );
}

function InventoryButton({cars,displayInventory,showInventory,hideInventory}){
  if(displayInventory){

    return(
      <div className="text-center mt-10">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition" onClick={hideInventory}>
          Ocultar Inventario
        </button>
      </div>
    );}
    else{
      if(cars.length > 6){
        return(
        <div className="text-center mt-10">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition" onClick={showInventory}>
            Ver Más
          </button>
        </div>
        );
      }else{
        return(null);
      }
      
    }
}

function Inventory({displayInventory,cars}){
  if(displayInventory){
  return(
    <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{car.desc}</p>
                <a href={car.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                    Ver Detalles
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>  
  );
  }else{
    if (cars.length > 3){
       return(
        <div className="grid md:grid-cols-3 gap-8">
          {cars.slice(0, 3).map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{car.desc}</p>
                <a href={car.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                    Ver Detalles
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div> 
      );
    }else{
      return(
         <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{car.desc}</p>
                <a href={car.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                    Ver Detalles
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>  
      );
    }
  }
}
