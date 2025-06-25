const genreData = {
    hiphop: {
        title: "HIP-HOP",
        description: "Rhythmic music featuring rap vocals, beats, and urban culture themes.",
            background: "linear-gradient(135deg, #000000 0%, #7c2d12 50%, #fbbf24 100%)",
        songs: [
            { title: "EARFQUAKE", artist: "Tyler, the Creator", image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", duration: "3:16", listens: "384,756,291" },
            { title: "HUMBLE", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b2732171b967bef683ab0eaf12e9", duration: "2:57", listens: "1,294,736,582" },
            { title: "See You Again", artist: "Tyler, The Creator", image: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", duration: "3:03", listens: "1,284,739,582" },
            { title: "Without Me", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b2735157f8b4710f9cc538213cb6", duration: "4:50", listens: "2,186,473,829" },
            { title: "Lose Yourself", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b273968da85f248a7e7747767801", duration: "5:26", listens: "2,047,593,816" },
            { title: "One Mic", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2731799d1e5c10a0cb1866a45a1", duration: "4:38", listens: "194,758,362" },
            { title: "Halftime", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2736d971b45082f2fd64b4af39d", duration: "4:04", listens: "184,759,372" },
            { title: "Wild for the Night", artist: "A$AP Rocky", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI3Kdp_AvhxNyEbF_lMYQD1WQ1cJeC-31tA&s", duration: "3:17", listens: "247,593,816" },
            { title: "Hotline Bling", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b27393d393bbc923a9e0e1ec77dd", duration: "4:27", listens: "2,394,758,162" },
            { title: "One Dance", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2734476434ef5142600fcd39ad9", duration: "2:54", listens: "3,247,593,816" },
            { title: "Nice For What", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2739cf12cef382235aed22437f8", duration: "3:30", listens: "1,947,593,816" },
            { title: "Peso", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d0000b27320f0799a7bfd974e465fea7a", duration: "2:13", listens: "294,758,162" },
            { title: "No Vaseline", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b27366884667b3a8901fb702ba92", duration: "5:20", listens: "247,593,816" },
            { title: "99 Problems", artist: "Jay-Z", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QQ4O3MrJWGvjy9ZUP9l6Tgne6n26ZITiaA&s", duration: "3:52", listens: "638,274,951" },
            { title: "Hard Knock Life", artist: "Jay-Z", image: "https://i.scdn.co/image/ab67616d0000b273bb2ae5776f2821b21f3761ff", duration: "3:57", listens: "638,274,951" },
            { title: "Swimming Pools", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b2730ad5098c562d43ce8211539c", duration: "5:13", listens: "638,274,951" },
            { title: "m.A.A.d city", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d", duration: "5:50", listens: "494,758,162" },
            { title: "Money Trees", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797", duration: "6:26", listens: "847,392,658" },
            { title: "Who Dat Boy", artist: "Tyler, The Creator", image: "https://i.scdn.co/image/ab67616d0000b2730f14a4f77129c75ae50809d4", duration: "3:23", listens: "274,638,591" }
        ]
    },
    pop: {
        title: "POP",
        description: "Popular music with catchy melodies and mainstream appeal, including R&B influences.",
        background: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fde047 100%",
        songs: [
            { title: "Umbrella", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27314bd90935ed5a2ac6c662373", duration: "4:15", listens: "963,847,521" },
            { title: "Blinding Lights", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b273a3eff72f62782fb589a492f9", duration: "3:20", listens: "3,847,561,923" },
            { title: "Shake It Off", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b2730a65d3623ee522d772cc426a", duration: "3:39", listens: "2,847,392,658" },
            { title: "Work", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27333c6b920eabcf4c00d7a1093", duration: "3:39", listens: "847,392,658" },
            { title: "Starboy", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452", duration: "3:50", listens: "2,183,749,625" },
            { title: "The Hills", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b27357b02e479a9f7d11ac7e60d6", duration: "4:02", listens: "2,847,593,628" },
            { title: "Call Out My Name", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730", duration: "3:48", listens: "1,638,274,951" },
            { title: "S&M", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27331548865f7c729290b96c794", duration: "4:03", listens: "847,392,658" },
            { title: "Disturbia", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b2739414baf36a285e9c268b50ad", duration: "3:59", listens: "638,274,951" },
            { title: "Love Story", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de", duration: "3:55", listens: "1,847,392,658" },
            { title: "22", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b2734c5607f129e9b28fced17fe6", duration: "3:52", listens: "1,394,758,162" },
            { title: "Problem", artist: "Ariana Grande", image: "https://i.scdn.co/image/ab67616d0000b273deec12a28d1e336c5052e9aa", duration: "3:13", listens: "847,392,658" },
            { title: "Side to Side", artist: "Ariana Grande", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DBIdzFfS70zqAHa9TZt8NYdtLoybVodhfA&s", duration: "3:46", listens: "947,593,816" },
            {title: "HIPS DON'T LIE", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b273318395259d13702aa1b5e6a3", duration: "3:38", listens: "2,284,759,384"},
            { title: "She Wolf", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b27338abd299129f8be89e636d98", duration: "3:08", listens: "527,391,648" },
            { title: "Whenever, Wherever", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b27370dd68cd18095663f447de14", duration: "3:16", listens: "1,284,759,372" },
            { title: "Good Days", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b2733097b1375ab17ae5bf302a0a", duration: "4:39", listens: "594,736,821" },
            { title: "Drew Barrymore", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b2737897c90f769272afaba304c8", duration: "4:16", listens: "394,758,162" },
            { title: "No One", artist: "Alicia Keys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO1jrYo_lY4Y1edBwtrA2ntPMDGzGnNWESw&s", duration: "4:18", listens: "638,274,951" },
            { title: "Girl on Fire", artist: "Alicia Keys", image: "https://i.scdn.co/image/ab67616d0000b273a4fe49eb27e8152710e7a590", duration: "3:04", listens: "638,274,951" },
            { title: "Smooth Criminal", artist: "Michael Jackson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8jq3HzZHjCbSwWu3zrEX9qvt6_5x3pUESg&s", duration: "4:17", listens: "1,047,593,816" },
            { title: "Thriller", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97", duration: "5:57", listens: "1,638,274,951" },
            { title: "Rock With You", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac", duration: "3:40", listens: "847,392,658" },
            { title: "Man in the Mirror", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b273531f7042cfa8b43a09e05edf", duration: "5:19", listens: "847,392,658" }
        ]
    },
    rock: {
        title: "ROCK",
        description: "Guitar-driven music with strong rhythms and powerful vocals.",
          background: "linear-gradient(135deg, #1f2937 0%, #374151 50%, #6b7280 100%)",
        songs: [
            { title: "Can't Help Falling in Love", artist: "Elvis Presley", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRRWr3qKqu6TtyHL-9TIY1hFg6WNX1aQp4g&s", duration: "3:02", listens: "847,392,657" },
            { title: "Last Nite", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b27313f2466b83507515291acce4", duration: "3:17", listens: "394,756,283" },
            { title: "Another Brick in the Wall", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf", duration: "3:21", listens: "638,274,951" },
            { title: "Paint It Black", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b273e33b92dd515979177fbc2905", duration: "3:44", listens: "476,384,729" },
            { title: "Satisfaction", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b27305c5be85b64eaff732f7cb0b", duration: "3:43", listens: "638,274,951" },
            { title: "Johnny B. Goode", artist: "Chuck Berry", image: "https://i.scdn.co/image/dd7b763fb49c35b1ebaadf3695156aeb7d9f9ca3", duration: "2:41", listens: "384,759,271" },
            { title: "Blowin' in the Wind", artist: "Bob Dylan", image: "https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573", duration: "2:48", listens: "294,758,162" },
            { title: "Hound Dog", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b273dec09ec14280fcffb7eacadb", duration: "2:16", listens: "294,736,582" },
            { title: "Someday", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273de675dad9a07eed831e6fb02", duration: "3:07", listens: "184,759,372" },
            { title: "Learning to Fly", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b27361f734a2370207feda78d018", duration: "4:53", listens: "428,573,691" },
            { title: "Wish You Were Here", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b273502bbf975cb8d7537f206780", duration: "5:34", listens: "892,473,651" },
            { title: "Time", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b273e739105d5da748b35b35f20d", duration: "6:53", listens: "847,392,658" },
            { title: "Let It Be", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1", duration: "3:50", listens: "973,847,562" },
            { title: "Hey Jude", artist: "The Beatles", image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84cfbd1f5ced2fd84b57c157aa", duration: "7:11", listens: "1,274,638,591" },
            { title: "Come Together", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b273699c3d063dad4e127247ed69", duration: "4:20", listens: "1,184,759,372" },
            { title: "Love Me Tender", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b27361b5cdb256024de5e72080bc", duration: "2:42", listens: "184,759,372" },
            { title: "Jailhouse Rock", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b273de10aca58082517bed287863", duration: "2:27", listens: "347,285,916" },
            { title: "Hard to Explain", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273a4a47040a6d6e340b90845fd", duration: "3:48", listens: "247,593,816" },
            { title: "Maybelline", artist: "Chuck Berry", image: "https://i.scdn.co/image/ab67616d0000b273196bf0b7be78c73f0bddd728", duration: "2:21", listens: "184,759,372" }
        ]
    },
    soulblues: {
        title: "SOUL & BLUES",
        description: "Emotionally expressive music rooted in gospel, rhythm & blues, and traditional American blues.",
        background: "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #a855f7 100%)",
        songs: [
            { title: "Georgia on My Mind", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273df3d459abce953d24caf1f91", duration: "3:38", listens: "183,749,625" },
            { title: "I Got a Woman", artist: "Ray Charles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk-hxtNAA6du9zIlqh7BLJfo4rr5HKmBnYw&s", duration: "2:56", listens: "147,285,936" },
            { title: "Hit the Road Jack", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273661bd83a66caed448af485db", duration: "2:01", listens: "347,285,916" },
            { title: "Rock Me Baby", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2730cb9e4d49412fce4ae730004", duration: "3:25", listens: "94,758,162" },
            { title: "The Thrill Is Gone", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2731a04649cc2ddb348a9e08f23", duration: "5:26", listens: "247,593,816" },
            { title: "Sweet Little Angel", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b273e080a606d640e4379222a592", duration: "6:28", listens: "147,285,936" }
        ]
    },
    electronic: {
        title: "ELECTRONIC & AMBIENT",
        description: "Music created using electronic instruments, digital technology, and atmospheric soundscapes.",
         background: "linear-gradient(135deg, #0f766e 0%, #14b8a6 50%, #5eead4 100%)",
        songs: [
            { title: "Get Lucky", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d00001e021d5cf960a92bb8b03fc2be7f", duration: "6:07", listens: "1,847,392,658" },
            { title: "Around the World", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d00001e0244d9e117d2a21880f06f57b7", duration: "7:09", listens: "847,392,658" },
            { title: "Harder Better Faster Stronger", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d0000b273432134900b972043b6faaccd", duration: "3:45", listens: "1,047,593,816" },
            { title: "Derezzed", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d0000b27397020c0136e12bb33c7e2cb7", duration: "1:44", listens: "184,759,372" }
        ]
    },
    international: {
        title: "INTERNATIONAL",
        description: "Music from various global cultures including Caribbean, Latin, and world music traditions.",
        background: "linear-gradient(135deg, #dc2626 0%, #f97316 50%, #facc15 100%)",
        songs: [
            { title: "No Woman No Cry", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b273b5a0ee94e2741374ce5c71a2", duration: "7:08", listens: "728,394,561" },
            {title: "ONE LOVE", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b273ef4e05f6dff96e307b43ecd8", duration: "2:52", listens: "284,759,384"},
            { title: "Three Little Birds", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b2733dad91f4a796045ac25496f3", duration: "3:00", listens: "638,274,951" },
            { title: "Get Up, Stand Up", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d00001e024462f1a2ddb7f08f0c9264b9", duration: "3:17", listens: "394,758,162" },
            {title: "DAKITI", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d00001e0234c8199b0b3b3fb42b8a98a8", duration: "3:25", listens: "3,194,728,563"},
            {title: "Titi Me Pregunto", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72", duration: "4:02", listens: "2,847,392,658"},
            { title: "Safaera", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0", duration: "4:55", listens: "1,184,759,372" },
            { title: "Soy Peor", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b273955c3c2ac8d97e1355b2e3c2", duration: "3:20", listens: "847,392,658" },
            { title: "Birima", artist: "Youssou N'Dour", image: "https://i.scdn.co/image/ab67616d0000b2732940ec3c084328a8410a0d8a", duration: "4:32", listens: "47,285,936" },
            { title: "Underground", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b2730ff44bf2e8ffddb0ed3c6b5a", duration: "3:28", listens: "83,749,625" },
            { title: "Ederlezi", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b273fb29659220ed95f3b095703f", duration: "4:08", listens: "94,758,162" },
            {title: "A Muslim Tale", artist: "Goran Bregović", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcttnnS4tLn7SNKSWvHRmABti5W5Aq1CgfDg&s", duration: "4:18", listens: "47,382,659"},
            {title: "Bella Ciao", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b273d5855facf0c208c6ab59df73", duration: "3:28", listens: "156,473,829"},
        ]
    }
};
const genres = Object.keys(genreData).map(key => ({
    name: genreData[key].title,
    key: key,
    description: genreData[key].description,
    songs: genreData[key].songs
}));

// Create songs array from all genres
const songs = Object.values(genreData).flatMap(genre => genre.songs);

// Create artists array from unique artists
const artists = [...new Set(songs.map(song => song.artist))].map(artist => ({
    name: artist,
    songs: songs.filter(song => song.artist === artist)
}));

// Display genres function
function displayGenres() {
    const genresContainer = document.getElementById('genres');
    if (!genresContainer) {
        console.error('Genres container element not found');
        return;
    }
    
    genresContainer.innerHTML = '';

    genres.forEach((genre, index) => {
        const circle = document.createElement('div');
        circle.className = 'genre-card';
        circle.style.cursor = 'pointer';
        circle.setAttribute('title', genre.name);

        circle.innerHTML = `
            <div class="genre-overlay">
                <p>${genre.name}</p>
            </div>
        `;

        circle.addEventListener('click', () => {
            navigateToGenreSongs(genre.key); // Use genre key instead of name
        });

        genresContainer.appendChild(circle);
    });
}

// Navigation function - fixed file name
function navigateToGenreSongs(genreKey) {
    if (!genreKey) {
        console.error('Genre key is required for navigation');
        return;
    }

    const genreParam = encodeURIComponent(genreKey);
    // Fixed: Use correct HTML file name
    const targetUrl = `genresong.html?genre=${genreParam}`;
    
    window.location.href = targetUrl;
}

// Helper function to get genre from URL
function getGenreFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('genre');
}

// Helper function to get artist from URL
function getArtistFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('artist');
}

// Helper function to create song card
function createSongCard(song, index) {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.style.backgroundImage = `url('${song.image}')`;
    card.innerHTML = `
     <div class="full">
     <div class="song-number">${index + 1}</div>
        <h4>${song.title}</h4>
        <p class="songartist">${song.artist}</p>
        <p class="songduration">${song.duration}</p>
        </div>
    `;

    card.addEventListener('click', () => {
        window.location.href = `song.html?title=${encodeURIComponent(song.title)}&artist=${encodeURIComponent(song.artist)}`;
    });

    return card;
}

// Helper function to get songs by artist
function getArtistSongs(artistName) {
    return songs.filter(song => song.artist === artistName);
}

// Display songs for a specific genre
function displayGenreSongs() {
    const genreKey = getGenreFromURL();
    const songGrid = document.getElementById('segnresong');
    
    if (!songGrid) {
        console.error('Song grid element not found');
        return;
    }
    
    if (!genreKey || !genreData[genreKey]) {
        songGrid.innerHTML = '<div class="no-songs"><p>Genre not found</p></div>';
        return;
    }
    
    const genre = genreData[genreKey];
    const genreSongs = genre.songs;
    
    // Display genre title and description
    displayGenreHeader(genre.title, genre.description);
    
    if (genreSongs.length === 0) {
        songGrid.innerHTML = '<div class="no-songs"><p>No songs found in this genre</p></div>';
        return;
    }
    
    songGrid.innerHTML = '';
    
    // Fixed: Pass index parameter to createSongCard
    genreSongs.forEach((song, index) => {
        const card = createSongCard(song, index);
        songGrid.appendChild(card);
    });
    
    document.title = `${genre.title} - Songs`;
}

// Display all songs
function displaySongs(songsToShow = songs) {
    const songGrid = document.getElementById('segnresong');
    if (!songGrid) return;
    
    songGrid.innerHTML = '';
    
    if (songsToShow.length === 0) {
        songGrid.innerHTML = '<div class="no-songs"><p>No songs found</p></div>';
        return;
    }
    
    // Fixed: Pass index parameter to createSongCard
    songsToShow.forEach((song, index) => {
        songGrid.appendChild(createSongCard(song, index));
    });
}

// Initialize the appropriate display based on the current page
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and call appropriate function
    if (document.getElementById('genres')) {
        // We're on the genres page
        displayGenres();
    } else if (document.getElementById('segnresong')) {
        // We're on a songs page, determine which type
        const genreParam = getGenreFromURL();
        const artistParam = getArtistFromURL();
        
        if (genreParam) {
            displayGenreSongs();
        } else if (artistParam) {
            displayArtistSongs();
        } else {
            displaySongs(); // Display all songs by default
        }
    }
});

// Function to display genre header (title and description)
function displayGenreHeader(title, description) {
    // Try to find existing header container
    let headerContainer = document.getElementById('genre-header');
    
    // If no header container exists, create one and insert it before the song grid
    if (!headerContainer) {
        headerContainer = document.createElement('div');
        headerContainer.id = 'genre-header';
        headerContainer.className = 'genre-header';
        
        const songGrid = document.getElementById('segnresong');
        if (songGrid && songGrid.parentNode) {
            songGrid.parentNode.insertBefore(headerContainer, songGrid);
        } else {
            // Fallback: append to body if songGrid not found
            document.body.appendChild(headerContainer);
        }
    }
    
    // Set the header content
    headerContainer.innerHTML = `
        <div class="genre-info">
            <h1 class="genre-title">${title}</h1>
            <h3 class="genre-description">${description}</h3>
        </div>
    `;
}