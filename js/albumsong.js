const albums = [
  {
    title: "After School Session",
    artist: "Chuck Berry",
    image: "https://www.vintagerockmag.com/wp-content/uploads/2023/01/Chuck.jpg",
    releaseYear: 1957
  },
  {
    title: "Take Care",
    artist: "Drake",
    image: "https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550",
    releaseYear: 2011
  },
  {
    title: "1989",
    artist: "Taylor Swift",
    image: "https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac",
    releaseYear: 2014
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    image: "https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe",
    releaseYear: 1973
  },

  {
    title: "Kind of Blue",
    artist: "Miles Davis",
    image: "https://i.scdn.co/image/ab67616d0000b273fe4b3055b00bba6425106bd5",
    releaseYear: 1959
  },
  {
    title: "Ctrl",
    artist: "SZA",
    image: "https://i.scdn.co/image/ab67616d0000b27375b3880bfb2edba90b192c08",
    releaseYear: 2017
  },
  {
    title: "From Elvis in Memphis",
    artist: "Elvis Presley",
    image: "https://i.scdn.co/image/ab67616d0000b27380e2e1d41d36bec9a42b5d94",
    releaseYear: 1969
  },
];
 const songs=[
     {title: "Deep Feeling", artist: "Chuck Berry", image: "https://www.vintagerockmag.com/wp-content/uploads/2023/01/Chuck.jpg", duration: "3:12", listens: "2.1M", audio:"../audios/Chuck Berry - Deep Feeling (1957).mp3"},
{title: "School Days (Ring Ring Goes the Bell)", artist: "Chuck Berry", image: "https://www.vintagerockmag.com/wp-content/uploads/2023/01/Chuck.jpg", duration: "2:43", listens: "15.3M", audio:"../audios/School Days - Chuck Berry.mp3"},
{title: "Too Much Monkey Business", artist: "Chuck Berry", image: "https://www.vintagerockmag.com/wp-content/uploads/2023/01/Chuck.jpg", duration: "2:55", listens: "8.7M", audio:"../audios/Chuck Berry - Too Much Monkey Business.mp3"},
{title: "Wee Wee Hours", artist: "Chuck Berry", image: "https://www.vintagerockmag.com/wp-content/uploads/2023/01/Chuck.jpg", duration: "3:08", listens: "1.8M", audio:"../audios/1955 Chuck Berry - Wee Wee Hours.mp3"},
{title: "Roly Poly (aka Rolli Polli)", artist: "Chuck Berry", image: "https://www.vintagerockmag.com/wp-content/uploads/2023/01/Chuck.jpg", duration: "2:51", listens: "950K", audio:"../audios/Roly Poly (Aka Rolli Polli) (Remastered).mp3"},
{title: "No Money Down", artist: "Chuck Berry", image: "https://www.vintagerockmag.com/wp-content/uploads/2023/01/Chuck.jpg", duration: "2:58", listens: "3.2M", audio:"../audios/No Money Down.mp3"},
{title:"Over My Dead Body", artist:"Drake", image:"https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550", duration:"4:23", listens:"203,658,947", audio:"../audios/Over My Dead Body.mp3"},
{title:"Shot for Me", artist:"Drake", image:"https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550", duration:"3:45", listens:"127,543,892", audio:"../audios/Shot For Me.mp3"},
{title:"Headlines", artist:"Drake", image:"https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550", duration:"3:27", listens:"298,761,203", audio:"../audios/Headlines.mp3"},  
{title:"Crew Love", artist:"Drake", image:"https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550", duration:"4:12", listens:"89,432,156", audio:"../audios/Crew Love.mp3"},
{title:"Take Care", artist:"Drake", image:"https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550", duration:"4:37", listens:"456,789,321", audio:"../audios/Take Care.mp3"},
{title:"Marvin’s Room", artist:"Drake", image:"https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550",duration:"5:48", listens:"368,655,110",  audio:"../audios/Marvins Room.mp3"},
 {title:"Blank Space", artist:"Taylor Swift", image:"https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac", duration:"3:51", listens:"2,890,456,789", audio:"../audios/Taylor Swift - Blank Space.mp3"},
  {title:"Style", artist:"Taylor Swift", image:"https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac", duration:"3:51", listens:"1,245,678,901", audio:"../audios/Taylor Swift - Style.mp3"},
  {title:"Shake It Off", artist:"Taylor Swift", image:"https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac", duration:"3:39", listens:"3,156,789,012", audio:"../audios/Taylor Swift - Shake It Off.mp3"},
  {title:"Wildest Dreams", artist:"Taylor Swift", image:"https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac", duration:"3:40", listens:"1,987,654,321", audio:"../audios/Taylor Swift - Wildest Dreams.mp3"},
  {title:"Out of the Woods", artist:"Taylor Swift", image:"https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac", duration:"3:55", listens:"1,123,456,789", audio:"../audios/Taylor Swift - Out Of The Woods.mp3"},
  {title:"Bad Blood", artist:"Taylor Swift", image:"https://i.scdn.co/image/ab67616d00001e02904445d70d04eb24d6bb79ac", duration:"3:31", listens:"1,654,321,098", audio:"../audios/Taylor Swift - Bad Blood (Taylor's Version) (Lyric Video).mp3"},
  {title:"Speak to Me", artist:"Pink Floyd", image:"https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe", duration:"1:30", listens:"89,456,123", audio:"../audios/Pink Floyd - Speak To Me / Breathe HD (Studio Version).mp3"},
  {title:"Breathe (In the Air)", artist:"Pink Floyd", image:"https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe", duration:"2:49", listens:"156,789,456", audio:"../audios/Pink Floyd - Breathe (In The Air) (2023 Remaster).mp3"},
  {title:"On the Run", artist:"Pink Floyd", image:"https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe", duration:"3:36", listens:"78,234,567", audio:"../audios/Pink Floyd - On The Run (2023 Remaster).mp3"},
  {title:"Time", artist:"Pink Floyd", image:"https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe", duration:"6:53", listens:"234,567,890", audio:"../audios/Pink Floyd – Time (Official Audio).mp3"},
  {title:"The Great Gig in the Sky", artist:"Pink Floyd", image:"https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe", duration:"4:36", listens:"123,456,789", audio:"../audios/Pink Floyd - The Great Gig In The Sky (Official 2023 Remaster).mp3"},
  {title:"Money", artist:"Pink Floyd", image:"https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe", duration:"6:23", listens:"345,678,901", audio:"../audios/Pink Floyd - Money (2023 Remaster).mp3"},
  {title:"So What", artist:"Miles Davis", image:"https://i.scdn.co/image/ab67616d0000b273fe4b3055b00bba6425106bd5", duration:"9:22", listens:"45,678,234", audio:"../audios/Miles Davis - So What (Official Audio).mp3"},
  {title:"Freddie Freeloader", artist:"Miles Davis", image:"https://i.scdn.co/image/ab67616d0000b273fe4b3055b00bba6425106bd5", duration:"9:46", listens:"32,456,789", audio:"../audios/Miles Davis - Freddie Freeloader (Official Audio).mp3"},
  {title:"Blue in Green", artist:"Miles Davis", image:"https://i.scdn.co/image/ab67616d0000b273fe4b3055b00bba6425106bd5", duration:"5:37", listens:"28,345,612", audio:"../audios/Miles Davis - Blue In Green (Official Audio).mp3"},
  {title:"All Blues", artist:"Miles Davis", image:"https://i.scdn.co/image/ab67616d0000b273fe4b3055b00bba6425106bd5", duration:"11:33", listens:"41,234,567", audio:"../audios/Miles Davis - All Blues (Official Audio).mp3"},
  {title:"Flamenco Sketches", artist:"Miles Davis", image:"https://i.scdn.co/image/ab67616d0000b273fe4b3055b00bba6425106bd5", duration:"9:26", listens:"35,789,123", audio:"../audios/Miles Davis - Flamenco Sketches (Official Audio).mp3"},
    {title:"Wearin' That Loved On Look", artist:"Elvis Presley", image:"https://i.scdn.co/image/ab67616d0000b27380e2e1d41d36bec9a42b5d94", duration:"3:15", listens:"2,847,392", audio:"../audios/Wearin' That Loved On Look.mp3"},
  {title:"Only the Strong Survive", artist:"Elvis Presley", image:"https://i.scdn.co/image/ab67616d0000b27380e2e1d41d36bec9a42b5d94", duration:"3:28", listens:"1,923,847", audio:"../audios/Only the Strong Survive.mp3"},
  {title:"Long Black Limousine", artist:"Elvis Presley", image:"https://i.scdn.co/image/ab67616d0000b27380e2e1d41d36bec9a42b5d94", duration:"4:12", listens:"3,458,291", audio:"../audios/Long Black Limousine.mp3"},
  {title:"Any Day Now", artist:"Elvis Presley", image:"https://i.scdn.co/image/ab67616d0000b27380e2e1d41d36bec9a42b5d94", duration:"2:58", listens:"1,672,839", audio:"../audios/Any Day Now.mp3"},
  {title:"In the Ghetto", artist:"Elvis Presley", image:"https://i.scdn.co/image/ab67616d0000b27380e2e1d41d36bec9a42b5d94", duration:"2:55", listens:"48,293,751", audio:"../audios/In the Ghetto.mp3"},
  {title:"I'll Hold You in My Heart ", artist:"Elvis Presley", image:"https://i.scdn.co/image/ab67616d0000b27380e2e1d41d36bec9a42b5d94", duration:"3:42", listens:"2,954627", audio:"../audios/I'll Hold You In My Heart (Till I Can Hold You In My Arms).mp3"},
  {title:"Supermodel", artist:"SZA", image:"https://i.scdn.co/image/ab67616d0000b27375b3880bfb2edba90b192c08", duration:"3:01", listens:"134,829,475", audio:"../audios/Supermodel.mp3"},
  {title: "Drew Barrymore", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b27375b3880bfb2edba90b192c08", duration: "4:16", listens: "394,758,162", releaseYear: 2017, audio:"../audios/SZA - Drew Barrymore (Audio).mp3"},
  {title:"The Weekend", artist:"SZA", image:"https://i.scdn.co/image/ab67616d0000b27375b3880bfb2edba90b192c08", duration:"4:32", listens:"247,583,619", audio:"../audios/SZA - The Weekend (Official Audio).mp3"},
  {title:"Go Gina", artist:"SZA", image:"https://i.scdn.co/image/ab67616d0000b27375b3880bfb2edba90b192c08", duration:"3:51", listens:"165,729,384", audio:"../audios/SZA - Go Gina (Audio).mp3"},
  {title:"Garden (Say It Like Dat)", artist:"SZA", image:"https://i.scdn.co/image/ab67616d0000b27375b3880bfb2edba90b192c08", duration:"3:28", listens:"71,648,293", audio:"../audios/SZA - Garden (Say It Like Dat) (Official Audio).mp3"},
  {title:"Love Galore", artist:"SZA", image:"https://i.scdn.co/image/ab67616d0000b27375b3880bfb2edba90b192c08", duration:"4:35", listens:"209,847,526", audio:"../audios/SZA - Love Galore (Alt Version) (Audio).mp3"}


 ]


const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');

let currentSong = null;
let currentSongCard = null;

function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}


const albumTitle = decodeURIComponent(getUrlParameter('title') || '');
const albumArtist = decodeURIComponent(getUrlParameter('artist') || '');


const selectedAlbum = albums.find(album => album.title === albumTitle && album.artist === albumArtist);


function displayAlbumCard() {
  const songgrid = document.getElementById('songgrid');
  
  if (selectedAlbum) {
 
    const albumSection = document.createElement('div');
    albumSection.className = 'album-section';
    
    albumSection.innerHTML = `
      <div class="album-image">
        <img src="${selectedAlbum.image}" alt="${selectedAlbum.title}">
      </div>
      <div class="album-info">
        <h1 class="title">${selectedAlbum.title}</h1>
        <h2 class="artist">Artist - ${selectedAlbum.artist}</h2>
        <h2 class="release">Release - ${selectedAlbum.releaseYear || 'Unknown'}</h2>
       </div>
    `;
    
    songgrid.appendChild(albumSection);
  }
}


function displayArtistSongs() {
  const songgrid = document.getElementById('songgrid');
  
  
  let artistToShow = selectedAlbum ? selectedAlbum.artist : null;
  let songsToShow = artistToShow ? songs.filter(song => song.artist === artistToShow) : songs;

  const songsSection = document.createElement('div');
  songsSection.className = 'songs-section';

  const songsTitle = document.createElement('h3');
  songsTitle.className = 'songs-title';

  const songsGrid = document.createElement('div');
  songsGrid.className = 'songs-grid';
  
  songsToShow.forEach((song, index) => {
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.dataset.songIndex = index;
    
    songCard.innerHTML = `
      <div class="song-number">${index + 1}</div>
      <div class="song-image">
        <img src="${song.image}" alt="${song.title}">
      </div>
      <div class="song-info">
        <h4>${song.title}</h4>
        <p class="song-artist">${song.artist}</p>
      </div>
      <div class="song-stats">
        <div>${song.duration}</div>
        <div>${song.listens}</div>
      </div>
      <div class="song-play-button">
        <button class="play-song-btn" data-song='${JSON.stringify(song)}'>▶</button>
      </div>
    `;
    
    
    songCard.addEventListener('click', (e) => {
     
      if (!e.target.classList.contains('play-song-btn')) {
        playSongFromCard(song, songCard);
      }
    });
    

    const playButton = songCard.querySelector('.play-song-btn');
    playButton.addEventListener('click', (e) => {
      e.stopPropagation();
      playSongFromCard(song, songCard);
    });
    
    songsGrid.appendChild(songCard);
  });
  
  songsSection.appendChild(songsTitle);
  songsSection.appendChild(songsGrid);
  songgrid.appendChild(songsSection);
}


function playSongFromCard(song, songCard) {
 
  if (currentSong && currentSong.title === song.title && !audioPlayer.paused) {
    pauseSong();
    return;
  }
  

  loadSong(song);
  playSong();
  setCurrentSongCard(songCard);
}

function loadSong(song) {
  currentSong = song;
  audioPlayer.src = song.audio;
  audioPlayer.load();
  console.log(`Loaded: ${song.title} by ${song.artist}`);
}

function playSong() {
  if (audioPlayer.src && currentSong) {
    audioPlayer.play()
      .then(() => {
        console.log(`Playing: ${currentSong.title}`);
        updatePlayButton(true);
        updateSongCardPlayState();
      })
      .catch(error => {
        console.error('Error playing audio:', error);
        alert('Could not play audio file. Please check if the file exists.');
      });
  }
}

function pauseSong() {
  audioPlayer.pause();
  updatePlayButton(false);
  updateSongCardPlayState();
}

function updatePlayButton(isPlaying) {
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  
  if (playBtn && pauseBtn) {
    if (isPlaying) {
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'inline-block';
    } else {
      playBtn.style.display = 'inline-block';
      pauseBtn.style.display = 'none';
    }
  }
}

function setCurrentSongCard(songCard) {
  if (currentSongCard) {
    currentSongCard.classList.remove('playing');
    const prevButton = currentSongCard.querySelector('.play-song-btn');
    if (prevButton) prevButton.textContent = '▶';
  }
  

  currentSongCard = songCard;
}

function updateSongCardPlayState() {
  if (currentSongCard) {
    const playButton = currentSongCard.querySelector('.play-song-btn');
    if (audioPlayer.paused) {
      currentSongCard.classList.remove('playing');
      if (playButton) playButton.textContent = '▶';
    } else {
      currentSongCard.classList.add('playing');
      if (playButton) playButton.textContent = '⏸';
    }
  }
}

function updateSeekBar() {
  if (audioPlayer.duration) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = progress;
  }
}


audioPlayer.addEventListener('timeupdate', updateSeekBar);

audioPlayer.addEventListener('ended', () => {
  updatePlayButton(false);
  updateSongCardPlayState();
});

audioPlayer.addEventListener('loadstart', () => {
  console.log('Loading audio...');
});

audioPlayer.addEventListener('canplay', () => {
  console.log('Audio can start playing');
});

audioPlayer.addEventListener('error', (e) => {
  console.error('Audio error:', e);
  alert('Error loading audio file');
});


if (playBtn) {
  playBtn.addEventListener('click', () => {
    if (currentSong) {
      playSong();
    }
  });
}

if (pauseBtn) {
  pauseBtn.addEventListener('click', () => {
    pauseSong();
  });
}


seekBar.addEventListener('input', () => {
  if (audioPlayer.duration) {
    const seekTime = (seekBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  }
});

volumeBar.addEventListener('input', () => {
  audioPlayer.volume = volumeBar.value;
});


document.addEventListener('DOMContentLoaded', () => {

  console.log('Songs:', songs);
  console.log('Selected Album:', selectedAlbum);
  
  if (!songs) {
    console.error('Songs data is not loaded!');
    return;
  }
  

  if (selectedAlbum) {
    displayAlbumCard();
  }
  

  displayArtistSongs();
  
  audioPlayer.volume = volumeBar.value;
});