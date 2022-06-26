/* get the trend element */
const cardGroup = document.querySelectorAll('.card-group');

/* trend card */
let trendData = [
    {
        image: './asset/image/dune.jpg',
        title: 'Dune',
        date: '15 sept 2021',
        pourcent : '80%'
    },
    {
        image: './asset/image/squidgame.jpg',
        title: 'Squid Game',
        date: '15 sept 2021',
        pourcent : '80%'
    },
    {
        image: './asset/image/hypnotic.jpg',
        title: 'Hypnotic',
        date: '15 sept 2021',
        pourcent : '80%'
    },
    {
        image: './asset/image/after.jpg',
        title: 'After',
        date: '15 sept 2021',
        pourcent : '80%'
    }
];

/* creating trend card */
trendData.forEach((data)=>{
    let card = document.createElement('div');
    card.classList.add('card')
    card.innerHTML = `
    <div class="card-image">
        <div class="card-pourcent"><p>${data.pourcent}</p></div>
        <img src="${data.image}" alt="${data.title}">
    </div>
    <div class="card-info">
        <p class="card-title">${data.title}</p>
        <p class="card-date">${data.date}</p>
    </div>
    `;

    cardGroup[0].appendChild(card);
})

/* get the popular element */

/* popular card */
let popularData = [
    {
        image: './asset/image/greys.jpg',
        title: 'Greys',
        date: '15 sept 2021',
        pourcent : '80%'
    },
    {
        image: './asset/image/got.jpg',
        title: 'Game of Throne',
        date: '15 sept 2021',
        pourcent : '80%'
    },
    {
        image: './asset/image/mortal.jpg',
        title: 'Mortal Kombat',
        date: '15 sept 2021',
        pourcent : '80%'
    },
    {
        image: './asset/image/lucas.jpg',
        title: 'Luca',
        date: '15 sept 2021',
        pourcent : '80%'
    }
];

/* creating trend card */
popularData.forEach((data)=>{
    let card = document.createElement('div');
    card.classList.add('card')
    card.innerHTML = `
    <div class="card-image">
        <div class="card-pourcent"><p>${data.pourcent}</p></div>
        <img src="${data.image}" alt="${data.title}">
    </div>
    <div class="card-info">
        <p class="card-title">${data.title}</p>
        <p class="card-date">${data.date}</p>
    </div>
    `;

    cardGroup[1].appendChild(card);
})

