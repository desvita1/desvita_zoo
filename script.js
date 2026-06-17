alert("🐼 Selamat Datang di DESVITA ZOO 🦁");

document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mouseover",()=>{
        card.style.boxShadow="0 0 30px orange";
    });

    card.addEventListener("mouseout",()=>{
        card.style.boxShadow="0 0 20px gray";
    });
});
