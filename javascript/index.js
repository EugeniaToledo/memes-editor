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


// panel --- aside text --










// panel --- aside image --

$("#bckg__image").addEventListener("input", () => {
    $("#image__meme").style.backgroundColor=$("#bckg__image").value
    $("#bckg__image-span").innerText = ($("#bckg__image").value).toUpperCase()
    $("#bckg__image").style.backgroundColor = $ ("#bckg__image").value
})
