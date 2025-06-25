const albums = [
  {
    title: "After School Session",
    artist: "Chuck Berry",
    image: "https://www.vintagerockmag.com/wp-content/uploads/2023/01/Chuck.jpg"
  },
  {
    title: "Take Care",
    artist: "Drake",
    image: "https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550"
  },

  {
    title: "1989",
    artist: "Taylor Swift",
    image: "https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac"
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    image: "https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe"
  },

  {
    title: "Kind of Blue",
    artist: "Miles Davis",
    image: "https://i.scdn.co/image/ab67616d0000b273fe4b3055b00bba6425106bd5"
  },
  {
    title: "Ctrl",
    artist: "SZA",
    image: "https://i.scdn.co/image/ab67616d0000b27375b3880bfb2edba90b192c08"
  },
  {
    title: "From Elvis in Memphis",
    artist: "Elvis Presley",
    image: "https://i.scdn.co/image/ab67616d0000b27380e2e1d41d36bec9a42b5d94"
  },
  
 
 

 

 
  
];


const albumscontainer = document.getElementById('albums');

albums.forEach(albums => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url('${albums.image}')`;

    card.innerHTML = `
      <h4>${albums.title}</h4>
      <p>${albums.artist}</p>
    `;
card.addEventListener('click', () => {
    navigateToSong(albums);
  });
    albumscontainer.appendChild(card);
})


function navigateToSong(albums) {
  const encodedTitle = encodeURIComponent(albums.title);
  const encodedArtist = encodeURIComponent(albums.artist);
  window.location.href = `albumsong.html?title=${encodedTitle}&artist=${encodedArtist}`;
}

