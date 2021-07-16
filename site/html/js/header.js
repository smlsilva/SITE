function criarElemento(tagName, className){

    const elemento = document.createElement(tagName)
    elemento.classList.add(className)

    return elemento
}

function criarImg(src, alt){

    const imgElemento = document.createElement("img")
    imgElemento.src = src
    imgElemento.alt = alt

    return imgElemento
}

function addElemento(){
    
    const body = document.querySelector('body')
    
    const header = criarElemento("header")
    body.appendChild(header)

    const div = criarElemento("div", "cabecalho")
    header.appendChild(div)
    
    const picture = criarElemento("picture")
    div.appendChild(picture)

    const img = criarImg("./img/samuel.jpeg", "samuelsilva")
    picture.appendChild(img)

}

addElemento()