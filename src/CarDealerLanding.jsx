import React from "react";
import { useState } from "react";

import logo from "./assets/SOUTH_LOGO.jpg";
import agencia_picture from "./assets/agencia_foto.jpeg";

import instagramIcon from "./assets/icons8-instagram-windows-11-color-32.png";
import tiktokIcon from "./assets/icons8-tiktok-ios-17-filled-32.png";
import facebookIcon from "./assets/icons8-facebook-32.png";
import youtubeIcon from "./assets/icons8-youtube-24.png";



export default function CarDealerLanding() {

  const whatsappLink = "https://wa.me/5491164926987";
  const igLink = "https://www.instagram.com/southautos1";
  const facebookLink = "https://www.facebook.com/AutosSouth/";
  const tiktokLink = null;
  const youtubeLink = null;

  const cars = [
  {
    "name": "Chevrolet Onix 1.4 Joy Ls 98cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_882330-MLA86512420559_062025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1690305293-chevrolet-onix-14-joy-ls-98cv-_JM#polycard_client=search-desktop&search_layout=grid&position=1&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107",
    "type": "car"
  },
  {
    "type": "car",
    "name": "Chevrolet Onix 1.2 Lt",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_921484-MLA106359369010_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1674455149-chevrolet-onix-12-lt-_JM#polycard_client=search-desktop&search_layout=grid&position=2&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107",
  },
  {
    "type": "pickup",
    "name": "Renault Alaskan 2.3 Dci Intens Noir 190cv 4x4 At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_917303-MLA98743041527_112025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1586104957-renault-alaskan-23-dci-intens-noir-190cv-4x4-at-_JM#polycard_client=search-desktop&search_layout=grid&position=3&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Honda Hr-v 1.8 Ex 2wd Cvt",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_789482-MLA105085973858_012026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2799847844-honda-hr-v-18-ex-2wd-cvt-_JM#polycard_client=search-desktop&search_layout=grid&position=4&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Peugeot 208 1.5 Allure Touchscreen",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_987788-MLA108006211797_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2957191642-peugeot-208-15-allure-touchscreen-_JM#polycard_client=search-desktop&search_layout=grid&position=5&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Volkswagen Amarok 2.0 Cd Tdi 140cv Trendline",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_663961-MLA108511454519_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3025476794-volkswagen-amarok-20-cd-tdi-140cv-trendline-_JM#polycard_client=search-desktop&search_layout=grid&position=6&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Ford Ranger 3.0 V6 Cd 4x4 Xls At 250cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_708045-MLA89774634465_082025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1514288329-ford-ranger-30-v6-cd-4x4-xls-at-250cv-_JM#polycard_client=search-desktop&search_layout=grid&position=7&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Citroën C4 Cactus 1.2 Puretech 110 S&s Shine At6",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_746053-MLA101663664828_122025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2704619330-citron-c4-cactus-12-puretech-110-ss-shine-at6-_JM#polycard_client=search-desktop&search_layout=grid&position=8&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Volkswagen Taos 1.4 250 Tsi Highline",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_634205-MLA96603424909_102025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3111573126-volkswagen-taos-14-250-tsi-highline-_JM#polycard_client=search-desktop&search_layout=grid&position=9&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Volkswagen Amarok 3.0 V6 Cd",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_868925-MLA93542731338_102025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3111480944-volkswagen-amarok-30-v6-cd-_JM#polycard_client=search-desktop&search_layout=grid&position=10&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Peugeot Expert 1.6 Hdi Confort",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_749674-MLA109613060543_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3111297318-peugeot-expert-16-hdi-confort-_JM#polycard_client=search-desktop&search_layout=grid&position=11&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Peugeot 208 1.6 Allure",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_612393-MLA106990583249_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1674259835-peugeot-208-16-allure-_JM#polycard_client=search-desktop&search_layout=grid&position=12&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Volkswagen Gol Trend 1.6 Trendline 101cv 3p",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_779359-MLA107062449958_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2906359622-volkswagen-gol-trend-16-trendline-101cv-3p-_JM#polycard_client=search-desktop&search_layout=grid&position=13&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Toyota Hilux Pick-up 2.8 Cd Srv 177cv 4x2",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_900763-MLA100478674410_122025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1740878895-toyota-hilux-pick-up-28-cd-srv-177cv-4x2-_JM#polycard_client=search-desktop&search_layout=grid&position=14&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Volkswagen Amarok 3.0 Cd Tdi 258cv V6 Highline 4x4 At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_673135-MLA107518398467_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2898415898-volkswagen-amarok-30-cd-tdi-258cv-v6-highline-4x4-at-_JM#polycard_client=search-desktop&search_layout=grid&position=15&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "D.s. Ds3 1.2 Puretech 110 At6 So Chic",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_815132-MLA99248915962_112025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1723584017-ds-ds3-12-puretech-110-at6-so-chic-_JM#polycard_client=search-desktop&search_layout=grid&position=16&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Volkswagen Saveiro 1.6 Gp Cd 101cv Power",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_896225-MLA110003622151_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1723583951-volkswagen-saveiro-16-gp-cd-101cv-power-_JM#polycard_client=search-desktop&search_layout=grid&position=17&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Jeep Compass 2.0 Gme Blackhawk 4x4 At9",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_603771-MLA108036137898_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3059572858-jeep-compass-20-gme-blackhawk-4x4-at9-_JM#polycard_client=search-desktop&search_layout=grid&position=18&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Ford Maverick 2.0 Ecoboost Cd Lariat At8 4wd",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_913204-MLA106260645965_012026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2812707088-ford-maverick-20-ecoboost-cd-lariat-at8-4wd-_JM#polycard_client=search-desktop&search_layout=grid&position=19&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Peugeot Partner 1.6 Hdi Furgon Confort 92",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_984102-MLA105335721823_012026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1649946391-peugeot-partner-16-hdi-furgon-confort-92-_JM#polycard_client=search-desktop&search_layout=grid&position=20&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "pickup",
    "name": "Toyota Hilux Pick-up 2.8 Cd Srx 204cv 4x4 At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_787900-MLA108366434154_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3082828418-toyota-hilux-pick-up-28-cd-srx-204cv-4x4-at-_JM#polycard_client=search-desktop&search_layout=grid&position=21&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Chevrolet Spin 1.8 Premier 7as At 105cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_744013-MLA94681728845_102025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1723571491-chevrolet-spin-18-premier-7as-at-105cv-_JM#polycard_client=search-desktop&search_layout=grid&position=22&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "car",
    "name": "Kia K3 Cross 1.6 Gt Line At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_943072-MLA110433625261_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3191213916-kia-k3-cross-16-gt-line-at-_JM#polycard_client=search-desktop&search_layout=grid&position=23&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Polaris Rzr Xp 1000 Premium",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_806846-MLA102675034305_122025-E.webp",
    "link": "https://vehiculo.mercadolibre.com.ar/MLA-1620665337-polaris-rzr-xp-1000-premium-_JM#polycard_client=search-desktop&search_layout=grid&position=24&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Honda Cb Twister 250",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_661655-MLA98463977257_112025-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-1706225867-honda-cb-twister-250-_JM#polycard_client=search-desktop&search_layout=grid&position=25&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Harley Davidson Nightster 1200",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_975313-MLA89661855783_082025-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-1723546315-harley-davidson-nightster-1200-_JM#polycard_client=search-desktop&search_layout=grid&position=26&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Harley Davidson Xl1200n",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_929646-MLA84457146670_052025-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-2784446530-harley-davidson-xl1200n-_JM#polycard_client=search-desktop&search_layout=grid&position=27&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Yamaha Tracer 900",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_946245-MLA80676455394_112024-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-3099838434-yamaha-tracer-900-_JM#polycard_client=search-desktop&search_layout=grid&position=28&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Kymco Xciting S 400l",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_837946-MLA84754102603_052025-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-2784740190-kymco-xciting-s-400l-_JM#polycard_client=search-desktop&search_layout=grid&position=29&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Kymco Ak 550",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_802883-MLA108719824330_032026-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-3105262604-kymco-ak-550-_JM#polycard_client=search-desktop&search_layout=grid&position=30&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Yamaha Nmax",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_678174-MLA104220564718_012026-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-1644302913-yamaha-nmax-_JM#polycard_client=search-desktop&search_layout=grid&position=31&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Yamaha R3",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_756676-MLA74421557971_022024-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-1674276315-yamaha-r3-_JM#polycard_client=search-desktop&search_layout=grid&position=32&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",
    "name": "Suzuki Lt 160",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_632281-MLA81972847090_022025-E.webp",
    "link": "https://vehiculo.mercadolibre.com.ar/MLA-1674250537-suzuki-lt-160-_JM#polycard_client=search-desktop&search_layout=grid&position=33&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  },
  {
    "type": "motorcycle",

    "name": "Bmw Gs 650",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_611359-MLA71646048588_092023-E.webp",
    "link": "https://moto.mercadolibre.com.ar/MLA-2805051474-bmw-gs-650-_JM#polycard_client=search-desktop&search_layout=grid&position=34&type=item&tracking_id=8c809635-0f86-4f15-a34f-aa76d8466107"
  }
  ];

  const [displayInventory,setDisplayInventory] = useState(false);

  const showInventory = () => {
    setDisplayInventory(true);
  }
  const hideInventory = () => {
    setDisplayInventory(false);
  }

  const [filteredCars, setFilteredCars] = useState({
    car:true,
    pickup:true,
    motorcycle:true
  });

  const handleFilteredCar = () => {
    setFilteredCars(prevData => ({ ...prevData, car: !prevData.car }));
  }
  const handleFilteredPickup = () => {
    setFilteredCars(prevData => ({ ...prevData, pickup: !prevData.pickup }));
  }
  const handleFilteredMotorcycle = () => {
    setFilteredCars(prevData => ({ ...prevData, motorcycle: !prevData.motorcycle }));
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <span className="font-semibold text-lg">South Automóviles</span>
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
          <button className="bg-primaryDark text-white px-6 py-3 rounded-xl shadow hover:bg-black transition">
          Ver Inventario
          </button>
        </a>

        <div className="flex justify-center">
          <div className="border-t border-gray-300 mt-20 w-96"></div>
        </div>
        
      </section>

      

      {/* Inventory */}
      <section id="inventory" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Nuestro Inventario Destacado
        </h2>

        <FilterButtons 
          handleFilteredCar={handleFilteredCar} 
          handleFilteredPickup={handleFilteredPickup} 
          handleFilteredMotorcycle={handleFilteredMotorcycle} 
          filteredCars={filteredCars}
        />

        <Inventory displayInventory={displayInventory} cars={cars} filteredCars={filteredCars}/>

        <InventoryButton cars ={cars} displayInventory={displayInventory} showInventory={showInventory} hideInventory={hideInventory} />
    
        
      </section>

      {/* US */}
      <section id="us" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[primaryDark]">
              Nosotros
            </h2>
            <p className="text-gray-600 mb-6">
              Somos South Automoviles...
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
              <button className="bg-primaryDark text-white px-6 py-3 rounded-xl">
                Contáctanos
              </button>
            </a>
          </div>

          <img
            src="https://instagram.feze14-1.fna.fbcdn.net/v/t51.82787-15/525168182_18140973277406718_8278623931767130485_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzY4NzU0ODY0OTE1MzU2NDYwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5NS5zZHIuQzMifQ%3D%3D&_nc_ohc=SeR3B944mmQQ7kNvwHgy1KW&_nc_oc=Adqk2BtKkuqMad9-YRSc7pLrR7uwnPznLEMpZUlVbfmJ8M5OHPKYvSo7KeR6FSvVuYM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.feze14-1.fna&_nc_gid=smmDjBXutwcSSXOO9UGEQw&_nc_ss=7a32e&oh=00_Af33XfL6IL00dtYXGGSSspW2_RKvunkew0ScDIkR3ZvBLQ&oe=69E4BB0B"
            className="rounded-2xl shadow w-full h-96 object-cover"
          />
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="flex text-center justify-center items-center gap-4 text-gray-600 border-2 border-gray-300 rounded-xl p-6 max-w-md mx-auto">
            <p>+11 6492-6987
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
                  <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-22 h-22" />
                  </a>
                </div>
                
              </div>
          </div>
        </div>
      </section>

      <a target="_blank" class="fixed right-5 bottom-5 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600" href={whatsappLink}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></a>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} South Automóviles. Todos los derechos reservados.
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
          <button className="bg-primaryDark text-white px-6 py-3 rounded-xl shadow hover:bg-black transition" onClick={showInventory}>
            Ver Más
          </button>
        </div>
        );
      }else{
        return(null);
      }
      
    }
}

function Inventory({displayInventory,cars,filteredCars}){
  if(displayInventory){
    return(
      <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car, i) => (
              <InventoryItems car={car} i={i} filteredCars={filteredCars} />
            ))}
          </div>  
    );
  }else{
    if (cars.length > 3){
       return(
        <div className="grid md:grid-cols-3 gap-8">
          {cars.slice(0, 3).map((car, i) => (
            <InventoryItems car={car} i={i} filteredCars={filteredCars}/>
          ))}
        </div> 
      );
    }else{
      return(
         <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <InventoryItems car={car} i={i} filteredCars={filteredCars}/>
          ))}
        </div>  
      );
    }
  }
}

function InventoryItems({car,i,filteredCars}){
  if(filteredCars[car.type] == true){
  return (
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
  );}

}


function FilterButtons({handleFilteredCar,handleFilteredPickup,handleFilteredMotorcycle,filteredCars}){
  const base = "px-4 py-2 rounded-lg transition";
  const active = "bg-black text-white";
  const inactive = "bg-gray-200 hover:bg-gray-300";
  
  return(
    <div className="flex justify-center gap-4 mb-16">
      <button className={`${base} ${filteredCars.car ? active : inactive}`} onClick={() => handleFilteredCar()}>
        Autos
      </button>
      <button className={`${base} ${filteredCars.pickup ? active : inactive}`} onClick={() => handleFilteredPickup()}>
        Pickups
      </button>
      <button className={`${base} ${filteredCars.motorcycle ? active : inactive}`} onClick={() => handleFilteredMotorcycle()}>
        Motos
      </button>
    </div>

  );
}