let hambager = document.querySelector(".hambager");
let navigation = document.querySelector(".nav-list");

hambager.addEventListener("click", ()=>{
    navigation.classList.toggle('active');
});