const $ = (selector) => document.querySelector(selector)

// Board Image appear

$("#button__image").addEventListener("click", () => {
    $(".board__image").classList.remove("hidden")
    if($(".board__image").style.display = "block"){
        $(".board__text").style.display = "none"
    }
})

// Board Image disappear

$(".board__btn-exit-image").addEventListener("click", () =>{
    $(".board__image").classList.add("hiden")
    $(".board__image").style.display = "none"
})

//Board Text appear

$("#button__text").addEventListener("click", ()=> {
    $(".board__text").classList.remove("hidden")
    if ($(".board__text").style.display = "block"){
        $(".board__image").style.display = "none"
    }
})

//Board Text desappear

$(".board__btn-exit-text").addEventListener("click", () =>{
    $(".board__text").classList.add("hiden")
    $(".board__text").style.display = "none"
})

// Change mode light or dark

const change__mode = () => {
    const dark = $("body").getAttribute("data-theme")
    if (dark === $("light__mode")){
        $("#button__dark").classList.remove("hidden")
        $("#button__light").classList.add("hidden")
        $("body").setAttribute("data-theme", "light__mode")
    } else {
        $("#button__dark").classList.add("hidden")
        $("#button__light").classList.remove("hidden")
        $("body").removeAttribute("data-theme", "light__mode")
    }
}

// Buttons dark and light


$("#button__dark").addEventListener("click",change__mode)

$("#button__light").addEventListener("click",change__mode)

// url image

$("#image__url").addEventListener("input", () => {
    $("#image__meme").style.backgroundImage = `url(${$("#image__url").value})`
})

// meme download

const memeDownload = () => {
    domtoimage.toBlob($("#meme__photo")).then((blob) => {
        saveAs(blob, "meme__photo.png")
    })
}

$("#button__download").addEventListener('click', memeDownload)

// panel --- aside text --

$(".main__editor-top-text").style.backgroundColor = "white"
$("#text__top").addEventListener("input", () => {
    $(".main__editor-top-text").innerText = $("#text__top").value
})

$(".main__editor-bottom-text").style.backgroundColor = "white"
$("#text__bottom").addEventListener("input", () => {
    $(".main__editor-bottom-text").innerText = $("#text__bottom").value
})

// text desappear t&b

$("#text__top-check").addEventListener("change", () => {
    if ($("#text__top-check").checked){
        $(".main__editor-top-text").classList.add("hidden")
    }else {
        $(".main__editor-top-text").classList.remove("hidden")
    }
})

$("#text__bottom-check").addEventListener("change", () => {
    if ($("#text__bottom-check").checked){
        $(".main__editor-bottom-text").classList.add("hidden")
    } else {
        $(".main__editor-bottom-text").classList.remove("hidden")
    }
})

// fonts section

$(".fonts").addEventListener("click", () => {
    $(".main__editor-top-text").style.fontFamily = $(".fonts").value
    $(".main__editor-bottom-text").style.fontFamily = $ (".fonts").value
})

$(".size__input").addEventListener("click", () => {
    $(".main__editor-top-text").style.fontSize = `${$(".size__input").value}px`
    $(".main__editor-bottom-text").style.fontSize = `${$(".size__input").value}px`
})

$(".text__left").addEventListener("click", () => {
    $(".main__editor-top-text").style.textAlign = "left"
    $(".main__editor-bottom-text").style.textAlign = "left"
})

$(".text__center").addEventListener("click", () => {
    $(".main__editor-top-text").style.textAlign = "center"
    $(".main__editor-bottom-text").style.textAlign = "center"
})

$(".text__right").addEventListener("click", () => {
    $(".main__editor-top-text").style.textAlign = "right"
    $(".main__editor-bottom-text").style.textAlign = "right"
})

//color -- t & b

$("#color__font").addEventListener("input", () => {
    $(".main__editor-top-text").style.color = $ ("#color__font").value
    $(".main__editor-bottom-text").style.color = $ ("#color__font").value
    $("#span__color-font").innerText = ($("#color__font").value).toUpperCase()
    $("#color__font").style.backgroundColor = $("#color__font").value
})

//background-color -- t & b

$("#background__font").addEventListener("input", () => {
    $(".main__editor-top-text").style.backgroundColor = $ ("#background__font").value
    $(".main__editor-bottom-text").style.backgroundColor = $ ("#background__font").value
    $("#span__color-background").innerText = ($("#background__font").value).toUpperCase()
    $("#background__font").style.backgroundColor = $("#background__font").value
})

// transparent background-color -- t & b

$("#transparent__background").addEventListener ("change" , () => {
    if ($("#transparent__background").checked){
        $(".main__editor-top-text").style.position= "absolute"
        $(".main__editor-top-text").style.backgroundColor = "transparent"
        $(".main__editor-top-text").style.top = "0"
        $(".main__editor-bottom-text").style.position= "absolute"
        $(".main__editor-bottom-text").style.backgroundColor = "transparent"
        $(".main__editor-bottom-text").style.bottom = "0"
 
    }else {
        $(".main__editor-top-text").style.backgroundColor = $ ("#background__font").value
        $(".main__editor-bottom-text").style.backgroundColor = $ ("#background__font").value
    }
})

// contour none -- t & b

$(".button__none").addEventListener("click", () => {
    $(".main__editor-top-text").style.textShadow = "none"
    $(".main__editor-bottom-text").style.textShadow = "none"
})


// contour light -- t & b 
$(".button__light").addEventListener("click", () => {
    $(".main__editor-top-text").style.textShadow = "-2px -2px 0px #FFF, 2px -2px 0px #FFF, -2px 2px 0px #FFF, 2px 2px 0px #FFF"
    $(".main__editor-bottom-text").style.textShadow = "-2px -2px 0px #FFF, 2px -2px 0px #FFF, -2px 2px 0px #FFF, 2px 2px 0px #FFF"
})

//contour dark -- t & b

$(".button__dark-out").addEventListener ( "click" , () => {
    $(".main__editor-top-text").style.textShadow = "-2px -2px 2px #000, 2px 2px 2px #000, -2px 2px 2px #000, 2px -2px 2px #000"
    $(".main__editor-bottom-text").style.textShadow = "-2px -2px 2px #000, 2px 2px 2px #000, -2px 2px 2px #000, 2px -2px 2px #000"
})

// spacing -- t & b

$(".spacing__button").addEventListener ("input", () => {
    $(".main__editor-top-text").style.padding = `${$(".spacing__button").value}px`
    $(".main__editor-bottom-text").style.paddin = `${$(".spacing__button").value}px`
})

// leading -- t & b

$(".leading__select").addEventListener ( "input" , () => {
    $(".main__editor-top-text").style.lineHeight = $(".leading__select").value
    $(".main__editor-bottom-text").style.lineHeight = $(".leading__select").value
})



// panel --- aside image --


