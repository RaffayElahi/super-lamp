function navbar(){
    const container = document.getElementById("U");
    const hamburger = document.getElementById("image");
    hamburger.addEventListener("click", () =>{
        container.classList.toggle('nav-in-action');
    });
}

navbar();

const button_a = document.getElementById('button-a-slide');
const button_b = document.getElementById('button-b-slide');
const button_c = document.getElementById('button-c-slide');
const image_a = document.getElementById("slid-image-a")
const image_b = document.getElementById("slid-image-b")
const image_c = document.getElementById("slid-image-b")

function slider(){
    button_b.addEventListener("click", ()=>{
        image_b.classList.toggle('image-b-in-action');
    });
}
