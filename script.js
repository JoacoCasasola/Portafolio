document.addEventListener('DOMContentLoaded', function () {

    const cube = document.getElementById('cube');
    const barraLateral = document.querySelector('.barra-lateral');
    const spans = document.querySelectorAll('.barra-lateral span');
    const swit = document.querySelector('.switch');
    const circulo = document.querySelector('.circulo');
    const moon = document.querySelector(".moon");
    const moonInf = document.querySelector(".moon-inferior ion-icon");
    const modoTexto = document.querySelector(".modo-texto");

    const toggleDarkMode = () => {
        document.body.classList.toggle("darck-mode");
        circulo.classList.toggle("on");

        if (document.body.classList.contains("darck-mode")) {
            moon.setAttribute("name", "moon-outline");
            moonInf.setAttribute("name", "moon-outline");
            modoTexto.textContent = "Modo Oscuro";

            localStorage.setItem("modo-oscuro", "true");
        } else {
            moon.setAttribute("name", "sunny-outline");
            moonInf.setAttribute("name", "sunny-outline");
            modoTexto.textContent = "Modo Claro";

            localStorage.setItem("modo-oscuro", "false");
        }
    };

    if (localStorage.getItem("modo-oscuro") === "true") {
        document.body.classList.add("darck-mode");
        moon.setAttribute("name", "moon-outline");
        moonInf.setAttribute("name", "moon-outline");
        modoTexto.textContent = "Modo Oscuro";

    } else {
        document.body.classList.remove("darck-mode");
        moon.setAttribute("name", "sunny-outline");
        moonInf.setAttribute("name", "sunny-outline");
        modoTexto.textContent = "Modo Claro";
    }

    moon.addEventListener('click', toggleDarkMode);
    moonInf.addEventListener('click', toggleDarkMode);
    swit.addEventListener('click', toggleDarkMode);

    cube.addEventListener('click', () => {
        barraLateral.classList.toggle('mini-barra-lateral');
        spans.forEach((span) => {
            span.classList.toggle('oculto');
        });
    });

    barraLateral.addEventListener('mouseover', () => {
        barraLateral.classList.remove('mini-barra-lateral');
    });

    barraLateral.addEventListener('mouseout', () => {
        if (!barraLateral.classList.contains('mini-barra-lateral')) {
            barraLateral.classList.add('mini-barra-lateral');
        }
    });

    const tecnologiaColores = {
        html: '#DF573A',
        css: '#427ED2',
        javascript: '#9D9429',
        python: '#2A46E1',
        react: '#00c1dd',
        node_js: '#57BC3E',
        tailwind: '#21C4AB',
    };

    const proyectos = [
        {
            titulo: "Recomendador de musica",
            descripcion: "Recomendador de playlists en base a tu estado de animo y tareas que estes realizando.",
            imagen: "./assets/Captura de pantalla (83).png",
            video: "./assets/Timeline 2.mov",
            tecnologias: ["HTML", "CSS", "javaScript", "Tailwind"],
            link1: "https://voluble-nougat-4ec8ac.netlify.app/",
            link2: "https://github.com/JoacoCasasola/AppMusicRecomender.git"
        },
        {
            titulo: "Rick & Morty",
            descripcion: "Web de practica usando React y tomando datos de API, mostrando personajes de Rick & Morty.",
            imagen: "./assets/Captura de pantalla (85).png",
            video: "./assets/videoRick.mov",
            tecnologias: ["HTML", "CSS", "javaScript","React"],
            link1: "https://delicate-tiramisu-85edfb.netlify.app/",
            link2: "https://github.com/JoacoCasasola/Ryck-Morty_Api.git"
        },
        {
            titulo: "Web Inmobiliaria",
            descripcion: "Web de practica usando html, css y javaScript.",
            imagen: "./assets/Captura de pantalla (86).png",
            video: "./assets/videoInmobiliaria.mov",
            tecnologias: ["HTML", "CSS", "javaScript", "Tailwind"],
            link1: "https://meek-parfait-dbc518.netlify.app/",
            link2: "https://github.com/JoacoCasasola/TP_LaboIII.git"
        },
        {
            titulo: "CRUD de Practica",
            descripcion: "Listado de planetas practicando CRUD y manipulacion de Local Storage, utilizando html, css y javaScript.",
            imagen: "./assets/Captura de pantalla (87).png",
            video: "./assets/videoPlanetas.mov",
            tecnologias: ["HTML", "CSS", "javaScript"],
            link1: "https://unique-brioche-efe3ad.netlify.app/",
            link2: "https://github.com/JoacoCasasola/Parcial1_Labo3.git"
        },
    ]


    function crearTarjetas(proyectos) {
        const container = document.querySelector('.cards');
        proyectos.forEach(proyecto => {
            const card = document.createElement('div');
            card.className = 'card relative flex flex-col';

            card.innerHTML = `
                <a href="#">
                    <img class="rounded-t-lg" src="${proyecto.imagen}" alt="" />
                </a>
                <video class="rounded-t-lg" src="${proyecto.video}" muted loop></video>
                <div class="p-5 flex flex-col flex-grow">
                    <div class="flex-grow">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight">${proyecto.titulo}</h5>
                        </a>
                        <p class="mb-3 font-normal">${proyecto.descripcion}</p>
                        <div class="tecnologias">
                            ${proyecto.tecnologias.map(tech => {
                                const color = tecnologiaColores[tech.toLowerCase()] || 'var(--back3)';
                                return `<span class="tag-${tech.toLowerCase()}" style="background-color: ${color};">${tech}</span>`;
                            }).join('')}
                        </div>
                    </div>
                    <div class="botones mt-auto">
                        <a href="${proyecto.link1}" target="_blank" class="btn inline-flex items-center text-sm font-medium text-center rounded-lg">
                        Ver Web
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        </a>
                        <a href="${proyecto.link2}" target="_blank" class="btn inline-flex items-center text-sm font-medium text-center rounded-lg">
                            Github
                            <i class='github bx bxl-github'></i>
                        </a>
                    </div>
                </div>
            `;

            card.addEventListener('mouseenter', () => {
                const video = card.querySelector('video');
                video.classList.remove('hidden');
                video.play();
            });

            card.addEventListener('mouseleave', () => {
                const video = card.querySelector('video');
                video.classList.add('hidden');
                video.pause();
                video.currentTime = 0;
            });

            container.appendChild(card);
        });
    }

    crearTarjetas(proyectos);

    const yearElement = document.getElementById('year');

    const year = new Date().getFullYear();
    yearElement.textContent = year;
});