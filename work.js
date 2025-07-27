let search =  document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
} 

document.getElementById("palette-icon").addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});
