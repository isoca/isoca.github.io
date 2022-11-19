document.body.addEventListener('click', e => {
    if (e.target.id == 'acertar-numero'){
        window.open('https://isoca.github.io/acertar-numero/', '_blank');
    } 
    else if (e.target.id == 'mochila-listadora'){
        window.open("https://isoca.github.io/mochila-listadora/");
    }
    else if (e.target.id == 'midi-teclado'){
        window.open("https://isoca.github.io/teclado-midi/");
    }
})
