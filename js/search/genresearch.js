document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.querySelector('input[type="text"]');
    const genresCards = document.querySelectorAll('.card');
    
    function searchGenre(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
      
        if (term === '') {
            genresCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        genresCards.forEach(card => {
            const genresName = card.querySelector('h1').textContent.toLowerCase();
            
            if (genresName.includes(term)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        })
    }
    searchInput.addEventListener('input', function(a) {
        searchGenre(a.target.value);
    });  
});