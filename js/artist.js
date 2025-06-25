const artists = [
  { name: "Miles Davis", image: "https://i.scdn.co/image/ab67616d00001e025c08161ee7e97c376c59c6ef" },
  { name: "Michael Jackson", image: "https://www.slantmagazine.com/wp-content/uploads/2023/08/michaeljackson.jpg" },
  { name: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25" },
  { name: "Drake", image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9" },
  { name: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d00001e022bb4bbf62bc82d2f4ce59397" },
  { name: "The Rolling Stones", image: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO19s0CZ-default.jpg" },
  { name: "Ray Charles", image: "https://i.scdn.co/image/ab6761610000e5eb6fc460f10177fa38af69b8bf" },
  { name: "Taylor Swift", image: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676" },
  { name: "Pink Floyd", image: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO07zaak-default.jpg" },
  { name: "Nas", image: "https://i.scdn.co/image/ab67616d0000b273045fc920ecf4f8094888ec26" },
  { name: "SZA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6nIqQPsw39_2G_jmh4RoluQMhj-wmzWwdg&s" },
  { name: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d00001e021a5725deb59665ae814a9372" },
  { name: "Kendrick Lamar", image: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022" },
  { name: "Eminem", image: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b" },
  { name: "Daft Punk", image: "https://i.scdn.co/image/ab6761610000e5ebdc93bb227980211b325b9d70" },
  { name: "The Weeknd", image: "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae" },
  { name: "Jay-Z", image: "https://i.scdn.co/image/ab6761610000e5ebc75afcd5a9027f60eaebb5e4" },
  { name: "Chuck Berry", image: "https://i.scdn.co/image/d58323616d4f5d22b51e9dfe0ba53aedabe53cd4" },
  { name: "Tyler The Creator", image: "https://i.scdn.co/image/ab6761610000e5ebdfa2b0c7544a772042a12e52" },
  { name: "Johnny Cash", image: "https://i.scdn.co/image/ab6761610000e5eb94a8326675bfcafb20f0a235" },
  { name: "Ariana Grande", image: "https://i.scdn.co/image/ab6761610000e5eb6725802588d7dc1aba076ca5" },
  { name: "Bob Marley", image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84770bd4f6dc9810dbc4cafd7a" },
  { name: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d00001e0247b6aa6654babde64e55da33" },
  { name: "Rihanna", image: "https://i.scdn.co/image/ab6761610000e5eb99e4fca7c0b7cb166d915789" },
  { name: "Ice Cube", image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c7d6edcf721b2eb9a1ab267d" },
  { name: "Bob Dylan", image: "https://i.scdn.co/image/ab6761610000e5eb791742524609864273747ef5" },
  { name: "Alicia Keys", image: "https://i.scdn.co/image/ab6761610000e5ebebfd16a3bca87c31c1e20576" },
  { name: "Bad Bunny", image: "https://i.scdn.co/image/ab6761610000e5eb81f47f44084e0a09b5f0fa13" },
    { name: "B.B. King", image: "https://i.scdn.co/image/ffb3ff26238fe635a230bb0feb59dd0a5b209b6f" },
  { name: "The Strokes", image: "https://i.scdn.co/image/ab6761610000e5ebc3b137793230f4043feb0089" },
  { name: "Iron Maiden", image: "https://i.scdn.co/image/ab67616d0000b2736ac3ed972e1c181cd2ee8d55" },
  { name: "Shakira", image: "https://i.scdn.co/image/ab6761610000e5eb2528c726e5ddb90a7197e527" },

];
const songs = [
  {title: "Ring of Fire",artist: "Johnny Cash",image: "https://i.scdn.co/image/ab67616d0000b273dfe4bfe695c4192e547e72c7"},
  {title: "Nessun Dorma",artist: "Luciano Pavarotti",image: "https://i.scdn.co/image/ab67616d00001e0242048a3c6feeeaa655dc9d48"},
  {title: "Get Lucky",artist: "Daft Punk",image: "https://i.scdn.co/image/ab67616d00001e021d5cf960a92bb8b03fc2be7f"},
  {title: "IGOR",artist: "Tyler, the Creator",image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57"},
  {title: "Umbrella",artist: "Rihanna",image: "https://i.scdn.co/image/ab67616d0000b27314bd90935ed5a2ac6c662373"},
  { title: "Blinding Lights", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b273a3eff72f62782fb589a492f9"},
  {title: "'Round Midnight",artist: "Miles Davis",image: "https://i.scdn.co/image/ab67616d0000b273cb6f92683ff9ad65f27a3f9f"},
  {title: "No Woman No Cry",artist: "Bob Marley",image: "https://i.scdn.co/image/ab67616d0000b273b5a0ee94e2741374ce5c71a2"},
  {title: "HUMBLE",artist: "Kendrick Lamar",image: "https://i.scdn.co/image/ab67616d0000b2732171b967bef683ab0eaf12e9"},
  {title: "Can't Help Falling in Love",artist: "Elvis Presley",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRRWr3qKqu6TtyHL-9TIY1hFg6WNX1aQp4g&s"},
  {title: "Last Nite",artist: "The Strokes",image: "https://i.scdn.co/image/ab67616d0000b27313f2466b83507515291acce4"},
  {title: "The Trooper",artist: "Iron Maiden",image: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84504448ac225560c35d449390"},
  {title: "Another Brick in the Wall",artist: "Pink Floyd",image: "https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf"},
  {title: "Shake It Off",artist: "Taylor Swift",image: "https://i.scdn.co/image/ab67616d0000b2730a65d3623ee522d772cc426a" },
  {title: "Good Days",artist: "SZA",image: "https://i.scdn.co/image/ab67616d0000b2733097b1375ab17ae5bf302a0a"},
  {title: "Paint It Black",artist: "The Rolling Stones",image: "https://i.scdn.co/image/ab67616d0000b273e33b92dd515979177fbc2905"},
  {title: "Georgia on My Mind",artist: "Ray Charles",image: "https://i.scdn.co/image/ab67616d0000b273df3d459abce953d24caf1f91"},
  {title: "Wild for the Night",artist: "A$AP Rocky",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI3Kdp_AvhxNyEbF_lMYQD1WQ1cJeC-31tA&s"},
  {title: "Hotline Bling",artist: "Drake",image: "https://i.scdn.co/image/ab67616d0000b27393d393bbc923a9e0e1ec77dd"},
  { title: "Thriller", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97" },
  { title: "Who Dat Boy", artist: "Tyler, The Creator", image: "https://i.scdn.co/image/ab67616d0000b2730f14a4f77129c75ae50809d4" },
  { title: "Work", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27333c6b920eabcf4c00d7a1093" },
  { title: "Starboy", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452" },
  { title: "Let It Be", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1" },
  { title: "Swimming Pools", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b2730ad5098c562d43ce8211539c" },
  { title: "Hound Dog", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b273dec09ec14280fcffb7eacadb" },
  { title: "Someday", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273de675dad9a07eed831e6fb02" },
  { title: "Run to the Hills,", artist: "Iron Maiden", image: "https://i.scdn.co/image/ab67616d0000b273a633718a1d28f157193bd865" },
  { title: "Learning to Fly", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b27361f734a2370207feda78d018" },
  { title: "Love Story", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de" },
  { title: "Drew Barrymore", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b2737897c90f769272afaba304c8" },
  { title: "Satisfaction,", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b27305c5be85b64eaff732f7cb0b" },
  { title: "One Dance", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2734476434ef5142600fcd39ad9" },
  { title: "I Got a Woman", artist: "Ray Charles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk-hxtNAA6du9zIlqh7BLJfo4rr5HKmBnYw&s" },
  { title: "She Wolf", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b27338abd299129f8be89e636d98" },
  { title: "Johnny B. Goode", artist: "Chuck Berry", image: "https://i.scdn.co/image/dd7b763fb49c35b1ebaadf3695156aeb7d9f9ca3" },
  { title: "Blowin' in the Wind", artist: "Bob Dylan", image: "https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573" },
  { title: "Safaera", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0" },
  { title: "No One", artist: "Alicia Keys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO1jrYo_lY4Y1edBwtrA2ntPMDGzGnNWESw&s" },
  { title: "Birima", artist: "Youssou N'Dour", image: "https://i.scdn.co/image/ab67616d0000b2732940ec3c084328a8410a0d8a" },
  { title: "Underground", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b2730ff44bf2e8ffddb0ed3c6b5a" },
  { title: "Lose Yourself", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b273968da85f248a7e7747767801" },
  { title: "Problem", artist: "Ariana Grande", image: "https://i.scdn.co/image/ab67616d0000b273deec12a28d1e336c5052e9aa" },
  { title: "One Mic", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2731799d1e5c10a0cb1866a45a1" },
  { title: "Rock With You", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac" },
  { title: "Hey Jude", artist: "The Beatles", image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84cfbd1f5ced2fd84b57c157aa" },
  { title: "I Walk the Line", artist: "Johnny Cash", image: "https://i.scdn.co/image/ab67616d0000b2732fc24df8bf525d82a5d8cf88" },
  { title: "The Thrill Is Gone", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2731a04649cc2ddb348a9e08f23" },
  { title: "99 Problems", artist: "Jay-Z",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QQ4O3MrJWGvjy9ZUP9l6Tgne6n26ZITiaA&s"},
  { title: "m.A.A.d city", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d"},
  {title: "Harder Better Faster Stronger",artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d0000b273432134900b972043b6faaccd"},
  {title: "Call Out My Name", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730"},
  {title: "S&M", artist: "Rihanna",image: "https://i.scdn.co/image/ab67616d0000b27331548865f7c729290b96c794"},
  {title: "My Funny Valentine", artist: "Miles Davis",image: "https://i.scdn.co/image/ab67616d0000b273a12dbaf6a9ef150a29062472"},
  {title: "Three Little Birds",artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b2733dad91f4a796045ac25496f3"},
  {title: "Love Me Tender",artist: "Elvis Presley",image: "https://i.scdn.co/image/ab67616d0000b27361b5cdb256024de5e72080bc"},
  {title: "Jailhouse Rock",artist: "Elvis Presley",image: "https://i.scdn.co/image/ab67616d0000b273de10aca58082517bed287863"},
  {title: "Hard to Explain", artist: "The Strokes",image: "https://i.scdn.co/image/ab67616d0000b273a4a47040a6d6e340b90845fd"},
  {title: "Aces High",artist: "Hard to Explain",image: "https://i.scdn.co/image/ab67616d0000b273c5be9a6c4dd7040f58521f68"},
  {title: "Time",artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b273e739105d5da748b35b35f20d"},
  {title: "22",artist: "Taylor Swift",image: "https://i.scdn.co/image/ab67616d0000b2734c5607f129e9b28fced17fe6"},
  {title: "Disturbia",artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b2739414baf36a285e9c268b50ad"},
  {title: "Derezzed",artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d0000b27397020c0136e12bb33c7e2cb7"},
  {title: "Hit the Road Jack",artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273661bd83a66caed448af485db"},
  {title: "Nice For What", artist: "Drake",image: "https://i.scdn.co/image/ab67616d0000b2739cf12cef382235aed22437f8"},
  {title: "Peso",artist: "A$AP Rocky",image: "https://i.scdn.co/image/ab67616d0000b27320f0799a7bfd974e465fea7a" },
  {title: "Soy Peor",artist: "Bad Bunny",image: "https://i.scdn.co/image/ab67616d0000b273955c3c2ac8d97e1355b2e3c2"},
  {title: "Girl on Fire",artist: "Alicia Keys", image: "https://i.scdn.co/image/ab67616d0000b273a4fe49eb27e8152710e7a590"},
  { title: "Ederlezi",artist: "Goran Bregović",image: "https://i.scdn.co/image/ab67616d0000b273fb29659220ed95f3b095703f"},
  {title: "Side to Side",artist: "Ariana Grande", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DBIdzFfS70zqAHa9TZt8NYdtLoybVodhfA&s"},
  {title: "Halftime",artist: "Nas",image: "https://i.scdn.co/image/ab67616d0000b2736d971b45082f2fd64b4af39d" },
  {title: "Man in the Mirror",artist: "Michael Jackson",image: "https://i.scdn.co/image/ab67616d0000b273531f7042cfa8b43a09e05edf"},
  {title: "Come Together",artist: "The Beatles",image: "https://i.scdn.co/image/ab67616d0000b273699c3d063dad4e127247ed69"},
  {title: "La donna è mobile",artist: "Luciano Pavarotti", image: "https://i.scdn.co/image/ab67616d0000b2733836c8d610b5928dea42700f"},
  {title: "Get Up, Stand Up",artist: "Bob Marley",image: "https://i.scdn.co/image/ab67616d00001e024462f1a2ddb7f08f0c9264b9"},
  { title: "No Vaseline",artist: "Ice Cube",image: "https://i.scdn.co/image/ab67616d0000b27366884667b3a8901fb702ba92"},
  {title: "Hard Knock Life",artist: "Jay-Z", image: "https://i.scdn.co/image/ab67616d0000b273bb2ae5776f2821b21f3761ff" },
  { title: "Sweet Little Angel",artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b273e080a606d640e4379222a592"},
  {title: "Maybelline", artist: "Chuck Berry", image: "https://i.scdn.co/image/ab67616d0000b273196bf0b7be78c73f0bddd728"},
  { title: "Money Trees", artist: "Kendrick Lamar",image: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797"},
  { title: "Whenever, Wherever",artist: "Shakira",image: "https://i.scdn.co/image/ab67616d0000b27370dd68cd18095663f447de14"}

];




 function displayArtists() {
    const artistsContainer = document.getElementById('artists');
    if (!artistsContainer) {
        console.error('Artists container element not found');
        return;
    }
    
    artistsContainer.innerHTML = '';

    artists.forEach((artist, index) => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        
        if (artist.image) {
            circle.style.backgroundImage = `url('${artist.image}')`;
            circle.style.backgroundSize = 'cover'; 
            circle.style.backgroundPosition = 'center';
            circle.style.backgroundRepeat = 'no-repeat';
        }
        
        circle.style.cursor = 'pointer';
        circle.setAttribute('title', artist.name);

        circle.innerHTML = `
            <div class="artist-overlay">
                <p>${artist.name}</p>
            </div>
        `;

     
        circle.addEventListener('click', () => {
            navigateToArtistSongs(artist.name);
        });

        artistsContainer.appendChild(circle);
    });
}


function navigateToArtistSongs(artistName) {
    if (!artistName) {
        console.error('Artist name is required for navigation');
        return;
    }

    const artistParam = encodeURIComponent(artistName);
    const targetUrl = `artist_songs.html?artist=${artistParam}`;
    
    window.location.href = targetUrl;
}


document.addEventListener('DOMContentLoaded', function() {
    displayArtists();
});
