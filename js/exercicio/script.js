function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background='#c8996b'
    } else if(hora >=12 && hora <18){
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background='#fa7d00'
    } else{
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background='#496080'
    }
}