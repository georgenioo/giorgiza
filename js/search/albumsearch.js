document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.querySelector('input[type="text"]');
    const artistCards = document.querySelectorAll('.card');
    
    function searchArtists(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
      
        if (term === '') {
            artistCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        artistCards.forEach(card => {
            const artistName = card.querySelector('p').textContent.toLowerCase();
            
            if (artistName.includes(term)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        })
    }
    searchInput.addEventListener('input', function(a) {
        searchArtists(a.target.value);
    });  
});