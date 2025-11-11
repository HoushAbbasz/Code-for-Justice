
window.addEventListener('scroll', ()=>{
    const button = document.getElementById('backToTop');
    if(window.scrollY > 200){
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', () =>{
    window.scrollTo({ top: 0, behavior: 'smooth'});
});