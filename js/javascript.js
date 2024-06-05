// Sélectionne l'élément de navigation et le bouton du menu par leurs ID
const navToggle = document.getElementById("navigation");
const menu = document.getElementById("menu");

// Ajoute un écouteur d'événements pour le clic sur le bouton du menu
menu.addEventListener('click', function () {
  // Bascule la classe 'active' sur l'élément de navigation pour afficher ou masquer le menu
  navToggle.classList.toggle('active');
});
