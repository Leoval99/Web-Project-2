const link = document.querySelector("#link")
btn.addEventListener("click", () => {
    lista.classList.toggle("mostrar");
});
btn.addEventListener("click", () => {
    btn.classList.toggle("btn-1");
});

link.addEventListener("click", () =>{
    lista.classList.toggle("ocultar");
})