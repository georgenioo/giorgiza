document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="text"]');
    
    function searchArtists(searchTerm) {
        const artistCircles = document.querySelectorAll('.circle');
        const term = searchTerm.toLowerCase().trim();
        
        if (term === '') {
            artistCircles.forEach(circle => {
                circle.style.display = 'block';
            });
            return;
        }
        
        artistCircles.forEach(circle => {
            const artistName = circle.querySelector('p').textContent.toLowerCase();
            
            if (artistName.includes(term)) {
                circle.style.display = 'block'; 
            } else {
                circle.style.display = 'none'; 
            }
        });
    }
    
    searchInput.addEventListener('input', function(e) {
        searchArtists(e.target.value);
    });  
    
    const artistsContainer = document.getElementById('artists');
    if (artistsContainer) {
        new MutationObserver(() => {
            searchArtists(searchInput.value);
        }).observe(artistsContainer, { childList: true, subtree: true });
    }
});