document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="text"]');
    
    function searchContent(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
    
        const artistCards = document.querySelectorAll('.card');
        
       
        
        if (term === '') {
            artistCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        artistCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
           
            
            if (cardText.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    searchInput.addEventListener('input', function(e) {
        searchContent(e.target.value);
    });

    const songsContainer = document.getElementById('songs');
    if (songsContainer) {
        new MutationObserver(() => {
            searchContent(searchInput.value);
        }).observe(songsContainer, { childList: true, subtree: true });
    }});