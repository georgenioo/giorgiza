
const genreData = {
    hiphop: {
        title: "HIP-HOP" ,
        description: "Rhythmic music featuring rap vocals, beats, and urban culture themes.",
        background: "linear-gradient(135deg, #000000 0%, #7c2d12 50%, #fbbf24 100%)",
        songs: [
            { title: "IGOR", artist: "Tyler, the Creator", },
            { title: "HUMBLE", artist: "Kendrick Lamar" },
            { title: "See You Again", artist: "Tyler, The Creator" },
            { title: "Without Me", artist: "Eminem" },
            { title: "Lose Yourself", artist: "Eminem" },
            { title: "One Mic", artist: "Nas" },
            { title: "Halftime", artist: "Nas" },
            { title: "Wild for the Night", artist: "A$AP Rocky" },
            { title: "Hotline Bling", artist: "Drake" },
            { title: "One Dance", artist: "Drake" },
            { title: "Nice For What", artist: "Drake" },
            { title: "Peso", artist: "A$AP Rocky" },
            { title: "No Vaseline", artist: "Ice Cube" },
            { title: "99 Problems", artist: "Jay-Z" },
            { title: "Hard Knock Life", artist: "Jay-Z" },
            { title: "Swimming Pools", artist: "Kendrick Lamar" },
            { title: "m.A.A.d city", artist: "Kendrick Lamar" },
            { title: "Money Trees", artist: "Kendrick Lamar" },
            { title: "Who Dat Boy", artist: "Tyler, The Creator" }
        ]
    },
    pop: {
        title: "POP",
        description: "Popular music with catchy melodies and mainstream appeal, including R&B influences.",
        background: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fde047 100%",
        songs: [
            { title: "Umbrella", artist: "Rihanna" },
            { title: "Blinding Lights", artist: "The Weeknd" },
            { title: "Shake It Off", artist: "Taylor Swift" },
            { title: "Work", artist: "Rihanna" },
            { title: "Starboy", artist: "The Weeknd" },
            { title: "The Hills", artist: "The Weeknd" },
            { title: "Call Out My Name", artist: "The Weeknd" },
            { title: "S&M", artist: "Rihanna" },
            { title: "Disturbia", artist: "Rihanna" },
            { title: "Love Story", artist: "Taylor Swift" },
            { title: "22", artist: "Taylor Swift" },
            { title: "Problem", artist: "Ariana Grande" },
            { title: "Side to Side", artist: "Ariana Grande" },
            { title: "Hips Don't Lie", artist: "Shakira" },
            { title: "She Wolf", artist: "Shakira" },
            { title: "Whenever, Wherever", artist: "Shakira" },
            { title: "Good Days", artist: "SZA" },
            { title: "Drew Barrymore", artist: "SZA" },
            { title: "Fallin', If I Ain't Got You", artist: "Alicia Keys" },
            { title: "No One", artist: "Alicia Keys" },
            { title: "Girl on Fire", artist: "Alicia Keys" },
            { title: "Smooth Criminal", artist: "Michael Jackson" },
            { title: "Thriller", artist: "Michael Jackson" },
            { title: "Rock With You", artist: "Michael Jackson" },
            { title: "Man in the Mirror", artist: "Michael Jackson" }
        ]
    },
    rock: {
        title: "ROCK",
        description: "Guitar-driven music with strong rhythms and powerful vocals.",
         background: "linear-gradient(135deg, #1f2937 0%, #374151 50%, #6b7280 100%)",
        songs: [
            { title: "Can't Help Falling in Love", artist: "Elvis Presley" },
            { title: "Last Nite", artist: "The Strokes" },
            { title: "Another Brick in the Wall", artist: "Pink Floyd" },
            { title: "Paint It Black", artist: "The Rolling Stones" },
            { title: "Bohemian Rhapsody", artist: "Queen" },
            { title: "Roll over Beethoven", artist: "Chuck Berry" },
            { title: "We Will Rock You", artist: "Queen" },
            { title: "Satisfaction", artist: "The Rolling Stones" },
            { title: "Johnny B. Goode", artist: "Chuck Berry" },
            { title: "Blowin' in the Wind", artist: "Bob Dylan" },
            { title: "Like a Rolling Stone", artist: "Bob Dylan" },
            { title: "Hound Dog", artist: "Elvis Presley" },
            { title: "Someday", artist: "The Strokes" },
            { title: "Learning to Fly", artist: "Pink Floyd" },
            { title: "Wish You Were Here", artist: "Pink Floyd" },
            { title: "Time", artist: "Pink Floyd" },
            { title: "Let It Be", artist: "The Beatles" },
            { title: "A Hard Day's Night", artist: "The Beatles" },
            { title: "Hey Jude", artist: "The Beatles" },
            { title: "Come Together", artist: "The Beatles" },
            { title: "Love Me Tender", artist: "Elvis Presley" },
            { title: "Jailhouse Rock", artist: "Elvis Presley" },
            { title: "Hard to Explain", artist: "The Strokes" },
            { title: "Maybelline", artist: "Chuck Berry" }
        ]
    },

    soulblues: {
        title: "SOUL & BLUES",
        description: "Emotionally expressive music rooted in gospel, rhythm & blues, and traditional American blues.",
         background: "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #a855f7 100%)",
        songs: [
            { title: "Georgia on My Mind", artist: "Ray Charles" },
            { title: "I Got a Woman", artist: "Ray Charles" },
            { title: "Hit the Road Jack", artist: "Ray Charles" },
            { title: "Rock Me Baby", artist: "B.B. King" },
            { title: "The Thrill Is Gone", artist: "B.B. King" },
            { title: "Sweet Little Angel", artist: "B.B. King" }
        ]
    },
    electronic: {
        title: "ELECTRONIC & AMBIENT",
        description: "Music created using electronic instruments, digital technology, and atmospheric soundscapes.",
        background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #5eead4 100%)",
        songs: [
            { title: "Get Lucky", artist: "Daft Punk" },
            { title: "Around the World", artist: "Daft Punk" },
            { title: "Harder Better Faster Stronger", artist: "Daft Punk" },
            { title: "Derezzed", artist: "Daft Punk" },
        ]
    },
    international: {
        title: "INTERNATIONAL",
        description: "Music from various global cultures including Caribbean, Latin, and world music traditions.",
         background: "linear-gradient(135deg, #dc2626 0%, #f97316 50%, #facc15 100%)",
        songs: [
            { title: "No Woman No Cry", artist: "Bob Marley" },
            { title: "One Love", artist: "Bob Marley" },
            { title: "Three Little Birds", artist: "Bob Marley" },
            { title: "Get Up, Stand Up", artist: "Bob Marley" },
            { title: "Dakiti", artist: "Bad Bunny" },
            { title: "Tití Me Preguntó", artist: "Bad Bunny" },
            { title: "Safaera", artist: "Bad Bunny" },
            { title: "Soy Peor", artist: "Bad Bunny" },
            { title: "Set, Immigres", artist: "Youssou N'Dour" },
            { title: "Birima", artist: "Youssou N'Dour" },
            { title: "Mesečina, Kalašnikov", artist: "Goran Bregović" },
            { title: "Underground", artist: "Goran Bregović" },
            { title: "Ederlezi", artist: "Goran Bregović" }
        ]
    },
   
};


  

function displayGenres() {
    const genresContainer = document.getElementById('genres');
    if (!genresContainer) {
        console.error('Genres container element not found');
        return;
    }
    
    genresContainer.innerHTML = '';

    Object.keys(genreData).forEach((genreKey) => {
        const genre = genreData[genreKey];
        
        const genreCard = document.createElement('div');
        genreCard.className = 'genre-card';
        genreCard.style.cursor = 'pointer';
        genreCard.setAttribute('title', genre.description);
        
        // Apply the background gradient if it exists
        if (genre.background) {
            genreCard.style.background = genre.background;
        }

        genreCard.innerHTML = `
            <div class="genre-overlay">
                <h2>${genre.title}</h2>
                <span class="song-count">${genre.songs.length} songs</span>
            </div>
        `;

        genreCard.addEventListener('click', () => {
            navigateToGenreSongs(genreKey);
        });

        genresContainer.appendChild(genreCard);
    });
}

function navigateToGenreSongs(genreKey) {
    if (!genreKey) {
        console.error('Genre key is required for navigation');
        return;
    }

    const genreParam = encodeURIComponent(genreKey);
    const targetUrl = `genresongs.html?genre=${genreParam}`;
    
    window.location.href = targetUrl;
}

document.addEventListener('DOMContentLoaded', function() {
    displayGenres();
});