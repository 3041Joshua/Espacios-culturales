const places = [
{name:"Museo de Arte de Tlaxcala (MAT)",lat:19.3170698,lng:-98.2389584,type:"museo",label:"Museo",location:"Tlaxcala capital",address:"Plaza de la Constitución 21, Centro, Tlaxcala de Xicohténcatl, Tlax., México",gestion:"Secretaría de Cultura de Tlaxcala",scope:"Estatal",description:"Exposiciones temporales de arte moderno y contemporáneo, actividades educativas y programas curatoriales.",image:"assets/logos/museo-arte-tlaxcala.jpg",instagram:"https://www.instagram.com/matmuseodeartedetlaxcala?stkn=Y2h3NG1yNXlka3Z6",facebook:"https://www.facebook.com/share/19KoDGjLX9/",maps:"https://maps.app.goo.gl/oiLLiKNMoi7y26fo6"},
{name:"Pinacoteca Desiderio Hernández Xochitiotzin",lat:19.3147188,lng:-98.2401001,type:"museo",label:"Museo",location:"Tlaxcala capital",address:"Av. Vicente Guerrero 15, Centro, Tlaxcala de Xicohténcatl, Tlax., México",gestion:"Secretaría de Cultura",scope:"Estatal",description:"Conservación del patrimonio pictórico y exposiciones temporales.",image:"assets/logos/pinacoteca.jpg",instagram:"https://www.instagram.com/pinacotecadhx?stkn=d2c4bGVkemhoOXQ=",facebook:"https://www.facebook.com/share/1EoTPXSzT3/",maps:"https://maps.app.goo.gl/w2ULKijQphK17aPY7"},
{name:"Galería Munive Arte Contemporáneo",lat:19.3134261,lng:-98.239955,type:"galeria",label:"Galería",location:"Tlaxcala capital",address:"Independencia 33, Centro Histórico, Tlaxcala de Xicohténcatl, Tlax.",gestion:"Privada",scope:"Privado",description:"Exposiciones profesionales de arte contemporáneo.",image:"assets/logos/galeria-munive.jpg",instagram:"",facebook:"",maps:"https://maps.app.goo.gl/J1noT6ewaMCdMQwy6"},
{name:"Triángulo Gráfico",lat:19.2940363,lng:-98.2484437,type:"independiente",label:"Espacio independiente",location:"Tlaxcala capital",address:"La Loma Xicohténcatl, Xicohténcatl, Tlaxcala de Xicohténcatl, Tlax.",gestion:"Independiente",scope:"Independiente",description:"Clases prácticas y talleres de grabado, cianotipia y acuarela abiertos al público; colaboran activamente en espacios públicos.",image:"assets/logos/triangulo-grafico.jpg",instagram:"https://www.instagram.com/triangulo.grafico?stkn=MXh2NDR4NDZ0dmZ2aQ==",facebook:"https://www.facebook.com/share/1CFBjnfhhX/",maps:"https://maps.app.goo.gl/BEtWBCDBf3FrVXKq8"},
{name:"La FanSimioteca",lat:19.313561,lng:-98.233992,type:"independiente",label:"Espacio independiente",location:"Tlaxcala capital",address:"Calle Primero de Mayo, número 9, San Gabriel Cuauhtla, Tlaxcala.",gestion:"Independiente",scope:"Independiente",description:"Resguarda un acervo de más de 1,200 fanzines, publicaciones independientes, cómics, stickers, parches y libros de artista. Talleres, bazares y residencias para promover la autopublicación.",image:"assets/logos/fansimioteca.jpg",instagram:"https://www.instagram.com/atopica_editorial?stkn=NjRmYjFsOXhqbTAz",facebook:"",maps:"https://maps.app.goo.gl/TdMiqVXb3FmPctQG7"},
{name:"Galería Bilulu",lat:19.3162959,lng:-98.2377274,type:"independiente",label:"Espacio independiente",location:"Tlaxcala capital",address:"Plaza de la Constitución 8, Tlaxcala de Xicohténcatl, Tlax.",gestion:"Independiente",scope:"Independiente",description:"Arte emergente y diseño contemporáneo.",image:"assets/logos/galeria-bilulu.jpg",instagram:"",facebook:"https://www.facebook.com/BiluluArte/?locale=es_LA",maps:"https://maps.app.goo.gl/psMeuZ33UdPuBd2UA"},
{name:"Centro de las Artes Tlaxcala",lat:19.4242017,lng:-98.1166236,type:"centro",label:"Centro cultural",location:"Apizaco",address:"Ángel Solana 1, Primera Secc, San Luis Apizaquito, Tlax., México",gestion:"Secretaría de Cultura",scope:"Estatal",description:"Formación artística, residencias, exposiciones y talleres especializados.",image:"assets/logos/centro-de-las-artes.jpg",instagram:"https://www.instagram.com/tlaxcala.centro.artes?stkn=MWg5dHcxZXNjM3ozdg==",facebook:"https://www.facebook.com/share/18J2DuFqmR/",maps:"https://maps.app.goo.gl/WqkxYfx2ABxqRyon9"},
{name:"Centro Cultural La Libertad",lat:19.4173986,lng:-98.1381507,type:"centro",label:"Centro cultural",location:"Apizaco",address:"Av. 5 de Mayo s/n, Centro, Cdad. de Apizaco, Tlax., México",gestion:"Secretaría de Cultura",scope:"Estatal",description:"Galería, talleres y actividades culturales.",image:"assets/logos/centro-cultural-la-libertad.jpg",instagram:"",facebook:"https://www.facebook.com/share/195uknPzZQ/",maps:"https://maps.app.goo.gl/WBB7hNqt2jFfLLMS8"},
{name:"Centro Cultural Huamantla",lat:19.3131662,lng:-97.9234114,type:"centro",label:"Centro cultural",location:"Huamantla",address:"Parque Juárez 14, Centro, Huamantla, Tlax., México",gestion:"Secretaría de Cultura",scope:"Estatal",description:"Talleres y exposiciones.",image:"assets/logos/centro-cultural-huamantla.jpg",instagram:"",facebook:"https://www.facebook.com/share/1DVcv84E7j/",maps:"https://maps.app.goo.gl/DwJA8ZanttkvBBqPA"},
{name:"Galería del Agua",lat:19.4307231,lng:-97.7959709,type:"galeria",label:"Galería",location:"Altzayanca",address:"5 de Mayo Sur #10 A, San Antonio, Altzayanca, Tlax.",gestion:"Independiente",scope:"Independiente",description:"Residencias artísticas, arte en vidrio y educación ambiental.",image:"assets/logos/galeria-del-agua.jpg",instagram:"https://www.instagram.com/galeria_del_agua?stkn=Y2drbDhvbm0zN3dk",facebook:"https://www.facebook.com/share/18BpkDrxoL/",maps:"https://maps.app.goo.gl/XQTgerroaR8YNqvs9"}
];

const iconPin=`<svg viewBox="0 0 24 24" width="12" height="12"><path d="M12 22s7-7.2 7-12.5S16 2 12 2 5 4.7 5 9.5 12 22 12 22z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.5" r="2.6" fill="currentColor"/></svg>`;
const iconInsta=`<svg viewBox="0 0 24 24" width="12" height="12"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/></svg>`;
const iconFb=`<svg viewBox="0 0 24 24" width="12" height="12"><path d="M14 8.5h2.2V5.3h-2.6c-2.2 0-3.6 1.5-3.6 3.6v1.8H7.8v3.2H10V21h3.2v-7.1h2.2l.4-3.2h-2.6V9c0-.5.3-1 .8-1z" fill="currentColor"/></svg>`;
const iconArrow=`<svg viewBox="0 0 24 24" width="11" height="11"><line x1="4" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polyline points="13,6 19,12 13,18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const grid=document.getElementById("places-grid");

function render(filter="todos"){
  grid.innerHTML="";
  places.forEach((place,i)=>{
    if(filter!=="todos" && place.type!==filter)return;
    const imgContent=place.image
      ? `<img src="${place.image}" alt="Logo de ${place.name}">`
      : `<div class="placeholder">${place.name}</div>`;
    const pin=place.maps?`<a class="icon-btn" href="${place.maps}" target="_blank" rel="noopener" title="Cómo llegar">${iconPin}</a>`:`<span class="icon-btn disabled">${iconPin}</span>`;
    const insta=place.instagram?`<a class="icon-btn" href="${place.instagram}" target="_blank" rel="noopener" title="Instagram">${iconInsta}</a>`:`<span class="icon-btn disabled">${iconInsta}</span>`;
    const fb=place.facebook?`<a class="icon-btn" href="${place.facebook}" target="_blank" rel="noopener" title="Facebook">${iconFb}</a>`:`<span class="icon-btn disabled">${iconFb}</span>`;
    grid.insertAdjacentHTML("beforeend",`<article class="card" data-type="${place.type}">
      <div class="card-image">${imgContent}</div>
      <div class="card-body">
        <h3>${place.name}</h3>
        <span class="card-type">${place.label}</span>
        <p class="desc">${place.description}</p>
        <p class="card-extra" id="extra-${i}"><b>Ubicación:</b> ${place.location}<br><b>Dirección:</b> ${place.address}<br><b>Gestión:</b> ${place.gestion} (${place.scope})</p>
        <div class="icons-row">${pin}${insta}${fb}</div>
        <button class="ver-mas" data-target="extra-${i}">Ver más ${iconArrow}</button>
      </div>
    </article>`);
  });
  document.querySelectorAll(".card-image img").forEach(img=>{
    img.addEventListener("error",()=>{
      const name=img.getAttribute("alt").replace("Logo de ","");
      img.closest(".card-image").innerHTML=`<div class="placeholder">${name}</div>`;
    });
  });
  document.querySelectorAll(".ver-mas").forEach(btn=>btn.addEventListener("click",()=>{
    const extra=document.getElementById(btn.dataset.target);
    const open=extra.classList.toggle("open");
    btn.classList.toggle("open",open);
    btn.innerHTML=(open?"Ver menos ":"Ver más ")+iconArrow;
  }));
}

document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  button.classList.add("active");
  render(button.dataset.filter);
}));

document.querySelectorAll("a[data-filter]").forEach(link=>link.addEventListener("click",()=>{
  const f=link.dataset.filter;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===f));
  render(f);
}));

render();

// Buscador de lugares
const searchButton=document.querySelector(".search-icon");
const searchPanel=document.getElementById("search-panel");
const searchInput=document.getElementById("search-input");
const searchResults=document.getElementById("search-results");
const searchClose=document.querySelector(".search-close");

function normalizeText(value){
  return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
}
function showSearchResults(query=""){
  const q=normalizeText(query).trim();
  if(!q){
    searchResults.innerHTML='<div class="search-empty">Escribe el nombre de un museo, galería o espacio cultural.</div>';
    return;
  }
  const results=places.filter(place=>normalizeText([
    place.name,place.label,place.type,place.location,place.address,place.description
  ].join(" ")).includes(q));
  if(!results.length){
    searchResults.innerHTML='<div class="search-empty">No encontramos resultados para tu búsqueda.</div>';
    return;
  }
  searchResults.innerHTML=results.map(place=>`<button class="search-result" type="button" data-search-type="${place.type}" data-search-name="${encodeURIComponent(place.name)}"><strong>${place.name}</strong><span>${place.label} · ${place.location}</span></button>`).join("");
  searchResults.querySelectorAll(".search-result").forEach(btn=>btn.addEventListener("click",()=>{
    const type=btn.dataset.searchType;
    const name=decodeURIComponent(btn.dataset.searchName);
    document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===type));
    render(type);
    closeSearch();
    document.getElementById("lugares").scrollIntoView({behavior:"smooth",block:"start"});
    setTimeout(()=>{
      [...document.querySelectorAll(".card h3")].find(h=>h.textContent===name)?.closest(".card")?.scrollIntoView({behavior:"smooth",block:"center"});
    },450);
  }));
}
function openSearch(){
  searchPanel.hidden=false;
  searchButton.setAttribute("aria-expanded","true");
  searchInput.value="";
  showSearchResults();
  setTimeout(()=>searchInput.focus(),0);
}
function closeSearch(){
  searchPanel.hidden=true;
  searchButton.setAttribute("aria-expanded","false");
}
if(searchButton && searchPanel){
  searchButton.addEventListener("click",()=>searchPanel.hidden?openSearch():closeSearch());
  searchClose.addEventListener("click",closeSearch);
  searchInput.addEventListener("input",e=>showSearchResults(e.target.value));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!searchPanel.hidden)closeSearch();});
}

const menuToggle=document.querySelector(".menu-toggle"),nav=document.getElementById("nav");
if(menuToggle && nav){
  menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
  document.querySelectorAll(".nav a").forEach(link=>link.addEventListener("click",()=>nav.classList.remove("open")));
}

const backToTop=document.querySelector(".back-to-top");
if(backToTop){
  backToTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
}

const mapColors={museo:"#a96e57",galeria:"#647255",centro:"#3f4a34",independiente:"#8a6f4d"};
const mapEl=document.getElementById("map");
if(mapEl && typeof L!=="undefined"){
  const map=L.map("map",{scrollWheelZoom:false}).setView([19.36,-98.05],10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom:18
  }).addTo(map);
  places.forEach(place=>{
    if(!place.lat||!place.lng)return;
    const marker=L.circleMarker([place.lat,place.lng],{
      radius:9,
      fillColor:mapColors[place.type]||"#647255",
      color:"#fdfbf6",
      weight:2,
      fillOpacity:1
    }).addTo(map);
    const mapsLink=place.maps?`<a href="${place.maps}" target="_blank" rel="noopener">Cómo llegar →</a>`:"";
    marker.bindPopup(`<strong>${place.name}</strong><br>${place.label}<br>${mapsLink}`);
  });
}
