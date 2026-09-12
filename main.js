document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Gestion du Menu Mobile (Burger) ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });

    // Fermer le menu mobile lors d'un clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });


    // --- 2. Système d'Onglets Interactifs (Services) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Retirer l'état actif de tous les boutons et contenus
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activer le bouton et le contenu ciblé
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });


    // --- 3. Validation et Soumission du Formulaire ---
    const quoteForm = document.getElementById('quote-form');
    const formFeedback = document.getElementById('form-feedback');

    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Récupération des valeurs entrées par l'utilisateur
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service-needed').value;
        const message = document.getElementById('message').value.trim();

        if (name && email && service && message) {
            // Simulation d'un envoi API réussi
            formFeedback.style.color = "green";
            formFeedback.textContent = "Merci ! Votre demande de devis a été envoyée avec succès. Notre équipe vous recontactera sous 24h.";
            
            // Réinitialisation du formulaire
            quoteForm.reset();
        } else {
            formFeedback.style.color = "red";
            formFeedback.textContent = "Veuillez remplir correctement tous les champs du formulaire.";
        }
    });
});
