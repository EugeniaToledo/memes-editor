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
    domtoimage.toBlob($(".main__editor")).then((blob) => {
        saveAs(blob, "mi-meme.png")
    })
}

$("#button__download").addEventListener("click", memeDownload)

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








// panel --- aside image --


