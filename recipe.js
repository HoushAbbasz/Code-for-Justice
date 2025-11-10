// waits until the page is fully loaded

document.addEventListener("DOMContentLoaded", () => {
    // selects all filter buttons and recipe cards

    const filterButtons = document.querySelectorAll(".filters button");
    const recipeCards = document.querySelectorAll(".recipe-card");

// loop through each filter button
filterButtons.forEach(button =>{
    button.addEventListener("click", () =>{
        // gets the category name from the button text
        const category = button.textContent.trim();

        // Remove "active" class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        //highlights the clicked button
        button.classList.add("active");

        //loop through recipe cards, shows/hides them
        recipeCards.forEach(card => {
            if (category === "All"){
                card.style.display = "block";
            }else{
                if (card.dataset.category.includes(category)){
                    card.style.display ="block";
            }else{
                card.style.display = "none"
                    }
                }
            });
        });
    });
});

//back to the top button//
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