    const phrases = [
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Acredite em si mesmo e tudo será possível.",
        "A jornada de mil milhas começa com um único passo.",
        "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.",
        "Nada é impossível para aquele que persiste.",
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    ];
    
    const randomLucky = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomLucky];
    const openLucky = document.querySelector("#abrir")
    const resetPage = document.querySelector("#resetPage")
    
    
    function lateLucky() {
        document.querySelector(".biscoito").classList.add("tremendo");
        setTimeout(generateLucky, 3000);
    }

    function generateLucky() {

            document.querySelector(".homeScreen").classList.add("hide");
            document.querySelector(".luckyScreen").classList.remove("hide");
            document.querySelector("body").classList.add("gradiente");
            document.querySelector("#lucky").innerText = randomPhrase;
    }

    function reloadPage() {
        location.reload(true)
    }

    openLucky.addEventListener('click', lateLucky);
    resetPage.addEventListener('click', reloadPage);
