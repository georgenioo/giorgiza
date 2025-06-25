const songs = [
  {title: "Ring of Fire", artist: "Johnny Cash", image: "https://i.scdn.co/image/ab67616d0000b273dfe4bfe695c4192e547e72c7", duration: "2:38", listens: "287,394,756", releaseYear: 1963, audio:"../audios/Johnny Cash - Ring of Fire (Official Audio) (1).mp3"},
  {title: "Get Lucky", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d00001e021d5cf960a92bb8b03fc2be7f", duration: "6:07", listens: "1,847,392,658", releaseYear: 2013, audio:"../audios/Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers.mp3"},
  {title: "EARFQUAKE", artist: "Tyler the Creator", image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", duration: "3:16", listens: "384,756,291", releaseYear: 2019, audio:"../audios/EARFQUAKE.mp3"},
  {title: "Umbrella", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27314bd90935ed5a2ac6c662373", duration: "4:15", listens: "963,847,521", releaseYear: 2007, audio:"../audios/Rihanna - Umbrella (Orange Version) (Official Music Video) ft. JAY-Z.mp3"},
  {title: "Blinding Lights", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b273a3eff72f62782fb589a492f9", duration: "3:20", listens: "3,847,561,923", releaseYear: 2019, audio:"../audios/The Weeknd - Blinding Lights (Official Audio).mp3"},
  {title: "Round Midnight", artist: "Miles Davis", image: "https://i.scdn.co/image/ab67616d0000b273cb6f92683ff9ad65f27a3f9f", duration: "5:57", listens: "127,563,847", releaseYear: 1956, audio:"../audios/Miles Davis - 'Round Midnight (Official Audio).mp3"},
  {title: "No Woman No Cry", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b273b5a0ee94e2741374ce5c71a2", duration: "7:08", listens: "728,394,561", releaseYear: 1974, audio:"../audios/Bob Marley & The Wailers - No Woman, No Cry (Live At The Rainbow 4th June 1977).mp3"},
  {title: "HUMBLE", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b2732171b967bef683ab0eaf12e9", duration: "2:57", listens: "1,294,736,582", releaseYear: 2017, audio:"../audios/HUMBLE..mp3"},
  {title: "Can't Help Falling in Love", artist: "Elvis Presley", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRRWr3qKqu6TtyHL-9TIY1hFg6WNX1aQp4g&s", duration: "3:02", listens: "847,392,657", releaseYear: 1961,audio:"../audios/Elvis Presley - Can't Help Falling In Love (Official Audio).mp3" },
  {title: "Last Nite", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b27313f2466b83507515291acce4", duration: "3:17", listens: "394,756,283", releaseYear: 2001, audio:"../audios/The Strokes - Last Nite [Audio].mp3"},
  {title: "The Trooper", artist: "Iron Maiden", image: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84504448ac225560c35d449390", duration: "4:12", listens: "276,847,391", releaseYear: 1983, audio:"../audios/ron Maiden - The Trooper. HQ audio.mp3"},
  {title: "Another Brick in the Wall", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf", duration: "3:21", listens: "638,274,951", releaseYear: 1979, audio:"../audios/pink floyd - another brick in the wall.mp3"},
  {title: "Shake It Off", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b2730a65d3623ee522d772cc426a", duration: "3:39", listens: "2,847,392,658", releaseYear: 2014, audio:"../audios/Taylor Swift - Shake It Off.mp3"},
  {title: "Good Days", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b2733097b1375ab17ae5bf302a0a", duration: "4:39", listens: "594,736,821", releaseYear: 2020, audio:"../audios/SZA - Good Days (Audio).mp3"},
  {title: "Paint It Black", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b273e33b92dd515979177fbc2905", duration: "3:44", listens: "476,384,729", releaseYear: 1966, audio:"../audios/Paint It, Black (Official Lyric Video).mp3"},
  {title: "Georgia on My Mind", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273df3d459abce953d24caf1f91", duration: "3:38", listens: "183,749,625", releaseYear: 1960, audio:"../audios/Ray Charles - Georgia On My Mind (The Orginal Song From The Albom).mp3"},
  {title: "Wild for the Night", artist: "A$AP Rocky", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI3Kdp_AvhxNyEbF_lMYQD1WQ1cJeC-31tA&s", duration: "3:17", listens: "247,593,816", releaseYear: 2013, audio:"../audios/A$AP Rocky - Wild for the Night (Official Audio) ft. Skrillex, Birdy Nam Nam.mp3"},
  {title: "Hotline Bling", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b27393d393bbc923a9e0e1ec77dd", duration: "4:27", listens: "2,394,758,162", releaseYear: 2015, audio:"../audios/Drake- Hotline Bling (Official Audio).mp3"},
  {title: "Thriller", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97", duration: "5:57", listens: "1,638,274,951", releaseYear: 1982, audio:"../audios/Michael Jackson - Thriller (Official Video - Shortened Version).mp3"},
  {title: "Who Dat Boy", artist: "Tyler The Creator", image: "https://i.scdn.co/image/ab67616d0000b2730f14a4f77129c75ae50809d4", duration: "3:23", listens: "274,638,591", releaseYear: 2017, audio:"../audios/Tyler, The Creator - Who Dat Boy.mp3"},
  {title: "Work", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27333c6b920eabcf4c00d7a1093", duration: "3:39", listens: "847,392,658", releaseYear: 2016, audio:"../audios/Work.mp3"},
  {title: "Starboy", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452", duration: "3:50", listens: "2,183,749,625", releaseYear: 2016, audio:"../audios/The Weeknd - Starboy (Audio) ft. Daft Punk.mp3"},
  {title: "Let It Be", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1", duration: "3:50", listens: "973,847,562", releaseYear: 1970, audio:"../audios/The Beatles - Let It Be.mp3"},
  {title: "Swimming Pools", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b2730ad5098c562d43ce8211539c", duration: "5:13", listens: "638,274,951", releaseYear: 2012, audio:"../audios/Kendrick Lamar - Swimming Pools (Drank).mp3"},
  {title: "Hound Dog", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b273dec09ec14280fcffb7eacadb", duration: "2:16", listens: "294,736,582", releaseYear: 1956, audio:"../audios/Elvis Presley - Hound Dog (Official Audio).mp3"},
  {title: "Someday", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273de675dad9a07eed831e6fb02", duration: "3:07", listens: "184,759,372", releaseYear: 2001, audio:"../audios/The Strokes - Someday.mp3"},
  {title: "Run to the Hills", artist: "Iron Maiden", image: "https://i.scdn.co/image/ab67616d0000b273a633718a1d28f157193bd865", duration: "3:54", listens: "347,285,916", releaseYear: 1982, audio:"../audios/Iron Maiden - Run To The Hills (Official Video).mp3"},
  {title: "Learning to Fly", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b27361f734a2370207feda78d018", duration: "4:53", listens: "428,573,691", releaseYear: 1987, audio:"../audios/Learning To Fly.mp3"},
  {title: "Love Story", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de", duration: "3:55", listens: "1,847,392,658", releaseYear: 2008, audio:"../audios/Taylor Swift - Love Story.mp3"},
  {title: "Drew Barrymore", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b2737897c90f769272afaba304c8", duration: "4:16", listens: "394,758,162", releaseYear: 2017, audio:"../audios/SZA - Drew Barrymore (Audio).mp3"},
  {title: "Satisfaction", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b27305c5be85b64eaff732f7cb0b", duration: "3:43", listens: "638,274,951", releaseYear: 1965, audio:"../audios/The Rolling Stones - (I Can't Get No) Satisfaction (Official Lyric Video).mp3"},
  {title: "One Dance", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2734476434ef5142600fcd39ad9", duration: "2:54", listens: "3,247,593,816", releaseYear: 2016, audio:"../audios/One Dance (feat. WizKid & Kyla) - Drake (Official Audio).mp3"},
  {title: "I Got a Woman", artist: "Ray Charles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk-hxtNAA6du9zIlqh7BLJfo4rr5HKmBnYw&s", duration: "2:56", listens: "147,285,936", releaseYear: 1954, audio:"../audios/Ray Charles - I got a woman.mp3"},
  {title: "She Wolf", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b27338abd299129f8be89e636d98", duration: "3:08", listens: "527,391,648", releaseYear: 2009, audio:"../audios/Shakira - She Wolf (Audio).mp3"},
  {title: "Johnny B. Goode", artist: "Chuck Berry", image: "https://i.scdn.co/image/dd7b763fb49c35b1ebaadf3695156aeb7d9f9ca3", duration: "2:41", listens: "384,759,271", releaseYear: 1958, audio:"../audios/Johnny Be Goode.mp3"},
  {title: "Blowin' in the Wind", artist: "Bob Dylan", image: "https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573", duration: "2:48", listens: "294,758,162", releaseYear: 1963, audio:"../audios/Bob Dylan - Blowin' in the Wind (Official Audio).mp3"},
  {title: "Safaera", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0", duration: "4:55", listens: "1,184,759,372", releaseYear: 2020, audio:"../audios/Safaera - Bad Bunny x Jowell & Randy x Nengo Flow (Audio Oficial) YHLQMDLG.mp3"},
  {title: "No One", artist: "Alicia Keys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO1jrYo_lY4Y1edBwtrA2ntPMDGzGnNWESw&s", duration: "4:18", listens: "638,274,951", releaseYear: 2007, audio:"../audios/Alicia Keys - No One (Official Music Video).mp3"},
   {title: "Underground", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b2730ff44bf2e8ffddb0ed3c6b5a", duration: "3:28", listens: "83,749,625", releaseYear: 1995, audio:"../audios/08 - Goran Bregovic - Underground (Cocek).mp3"},
  {title: "Lose Yourself", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b273968da85f248a7e7747767801", duration: "5:26", listens: "2,047,593,816", releaseYear: 2002, audio:"../audios/Eminem - Lose Yourself.mp3"},
  {title: "Problem", artist: "Ariana Grande", image: "https://i.scdn.co/image/ab67616d0000b273deec12a28d1e336c5052e9aa", duration: "3:13", listens: "847,392,658", releaseYear: 2014, audio:"../audios/Ariana Grande - Problem ft. Iggy Azalea.mp3"},
  {title: "One Mic", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2731799d1e5c10a0cb1866a45a1", duration: "4:38", listens: "194,758,362", releaseYear: 2001, audio:"../audios/Nas - One Mic (Official HD Video).mp3"},
  {title: "Rock With You", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac", duration: "3:40", listens: "847,392,658", releaseYear: 1979, audio:"../audios/Rock With You.mp3"},
  {title: "Hey Jude", artist: "The Beatles", image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84cfbd1f5ced2fd84b57c157aa", duration: "7:11", listens: "1,274,638,591", releaseYear: 1968, audio:"../audios/Hey Jude (Remastered 2015).mp3"},
  {title: "I Walk the Line", artist: "Johnny Cash", image: "https://i.scdn.co/image/ab67616d0000b2732fc24df8bf525d82a5d8cf88", duration: "2:44", listens: "384,759,271", releaseYear: 1956, audio:"../audios/I Walk the Line.mp3"},
  {title: "The Thrill Is Gone", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2731a04649cc2ddb348a9e08f23", duration: "5:26", listens: "247,593,816", releaseYear: 1969, audio:"../audios/B.B. King - The Thrill Is Gone ( 1969 ) HD.mp3"},
  {title: "99 Problems", artist: "Jay-Z", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QQ4O3MrJWGvjy9ZUP9l6Tgne6n26ZITiaA&s", duration: "3:52", listens: "638,274,951", releaseYear: 2003, audio:"../audios/JAY-Z - 99 Problems.mp3"},
  {title: "m.A.A.d city", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d", duration: "5:50", listens: "494,758,162", releaseYear: 2012, audio:"../audios/m.A.A.d city.mp3"},
  {title: "Harder Better Faster Stronger", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d0000b273432134900b972043b6faaccd", duration: "3:45", listens: "1,047,593,816", releaseYear: 2001, audio:"../audios/Daft Punk - Harder, Better, Faster, Stronger (Official Audio).mp3"},
  {title: "Call Out My Name", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730", duration: "3:48", listens: "1,638,274,951", releaseYear: 2018, audio:"../audios/The Weeknd - Call Out My Name (Official Audio).mp3"},
  {title: "S&M", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27331548865f7c729290b96c794", duration: "4:03", listens: "847,392,658", releaseYear: 2010, audio:"../audios/Rihanna - S&M (Audio).mp3"},
  {title: "My Funny Valentine", artist: "Miles Davis", image: "https://i.scdn.co/image/ab67616d0000b273a12dbaf6a9ef150a29062472", duration: "5:57", listens: "94,758,162", releaseYear: 1956, audio:"../audios/My Funny Valentine (Live at Philharmonic Hall, New York, NY - February 1964).mp3"},
  {title: "Three Little Birds", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b2733dad91f4a796045ac25496f3", duration: "3:00", listens: "638,274,951", releaseYear: 1977, audio:"../audios/Bob Marley & The Wailers - Three Little Birds (Official Music Video).mp3"},
  {title: "Love Me Tender", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b27361b5cdb256024de5e72080bc", duration: "2:42", listens: "184,759,372", releaseYear: 1956, audio:"../audios/Love Me Tender.mp3"},
  {title: "Jailhouse Rock", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b273de10aca58082517bed287863", duration: "2:27", listens: "347,285,916", releaseYear: 1957, audio:"../audios/Elvis Presley - Jailhouse Rock (Official Audio).mp3"},
  {title: "Hard to Explain", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273a4a47040a6d6e340b90845fd", duration: "3:48", listens: "247,593,816", releaseYear: 2001, audio:"../audios/The Strokes - Hard To Explain (Official HD Video).mp3"},
  {title: "Iron Maiden", artist: "Iron Maiden", image: "https://i.scdn.co/image/ab67616d0000b273c5be9a6c4dd7040f58521f68", duration: "3:51", listens: "294,758,162", releaseYear: 1980, audio:"../audios/IRON MAIDEN - IRON MAIDEN Studio version.mp3"},
  {title: "Time", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b273e739105d5da748b35b35f20d", duration: "6:53", listens: "847,392,658", releaseYear: 1973, audio:"../audios/Pink Floyd – Time (Official Audio).mp3"},
  {title: "22", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b2734c5607f129e9b28fced17fe6", duration: "3:52", listens: "1,394,758,162", releaseYear: 2012, audio:"../audios/Taylor Swift - 22.mp3"},
  {title: "Disturbia", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b2739414baf36a285e9c268b50ad", duration: "3:59", listens: "638,274,951", releaseYear: 2008, audio:"../audios/Rihanna - Disturbia.mp3"},
  {title: "Derezzed", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d0000b27397020c0136e12bb33c7e2cb7", duration: "1:44", listens: "184,759,372", releaseYear: 2010, audio:"../audios/Derezzed - Daft Punk ‎- TRON: Legacy (Original Motion Picture Soundtrack).mp3"},
  {title: "Hit the Road Jack", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273661bd83a66caed448af485db", duration: "2:01", listens: "347,285,916", releaseYear:1960, audio:"../audios/Ray Charles - Hit The Road Jack (Official Lyrics Video).mp3"},
  {title: "Nice For What", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2739cf12cef382235aed22437f8", duration: "3:30", listens: "1,947,593,816", releaseYear: 2018,audio:"../audios/Drake - Nice For What.mp3"},
  {title: "Peso", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d0000b27320f0799a7bfd974e465fea7a", duration: "2:13", listens: "294,758,162", releaseYear: 2011,audio:"../audios/A$AP Rocky - Peso (Audio).mp3"},
  {title: "Soy Peor", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b273955c3c2ac8d97e1355b2e3c2", duration: "3:20", listens: "847,392,658", releaseYear: 2017, audio:"../audios/BAD BUNNY - SOY PEOR (Official Audio).mp3"},
  {title: "Girl on Fire", artist: "Alicia Keys", image: "https://i.scdn.co/image/ab67616d0000b273a4fe49eb27e8152710e7a590", duration: "3:04", listens: "638,274,951", releaseYear: 2012, audio:"../audios/Alicia Keys - Girl on Fire (Official Video).mp3"},
  {title: "Ederlezi", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b273fb29659220ed95f3b095703f", duration: "4:08", listens: "94,758,162", releaseYear: 1989, audio:"../audios/Ederlezi: Time of the Gypsies - Goran Bregović, Emir Kusturica.mp3"},
  {title: "Side to Side", artist: "Ariana Grande", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DBIdzFfS70zqAHa9TZt8NYdtLoybVodhfA&s", duration: "3:46", listens: "947,593,816", releaseYear: 2016, audio:"../audios/Ariana Grande ft. Nicki Minaj - Side To Side (Official Video) ft. Nicki Minaj.mp3"},
  {title: "Halftime", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2736d971b45082f2fd64b4af39d", duration: "4:04", listens: "184,759,372", releaseYear: 1992, audio:"../audios/Nas%20-%20Halftime%20%28Official%20Video%20-%20Explicit%29.mp3"},
  {title: "Man in the Mirror", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b273531f7042cfa8b43a09e05edf", duration: "5:19", listens: "847,392,658", releaseYear: 1987, audio:"../audios/Man in the Mirror.mp3"},
  {title: "Come Together", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b273699c3d063dad4e127247ed69", duration: "4:20", listens: "1,184,759,372", releaseYear: 1969, audio:"../audios/The Beatles - Come Together.mp3"},
  {title: "Get Up, Stand Up", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d00001e024462f1a2ddb7f08f0c9264b9", duration: "3:17", listens: "394,758,162", releaseYear: 1973, audio:"../audios/Bob Marley - Get Up Stand Up [HQ Sound].mp3"},
  {title: "No Vaseline", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b27366884667b3a8901fb702ba92", duration: "5:20", listens: "247,593,816", releaseYear: 1991, audio:"../audios/No Vaseline.mp3"},
  {title: "Hard Knock Life", artist: "Jay-Z", image: "https://i.scdn.co/image/ab67616d0000b273bb2ae5776f2821b21f3761ff", duration: "3:57", listens: "638,274,951", releaseYear: 1998, audio:"../audios/Jay Z - Hard Knock Life [Explicit].mp3"},
  {title: "Sweet Little Angel", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b273e080a606d640e4379222a592", duration: "6:28", listens: "147,285,936", releaseYear: 1956, audio:"../audios/B.B. King - Sweet Little Angel (Live).mp3"},
  {title: "Money Trees", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797", duration: "6:26", listens: "847,392,658", releaseYear: 2012, audio:"../audios/Money Trees.mp3"},
  {title: "Whenever, Wherever", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b27370dd68cd18095663f447de14", duration: "3:16", listens: "1,284,759,372", releaseYear: 2001, audio:"../audios/Shakira - Whenever, Wherever (Official HD Video).mp3"},
  {title: "Bad", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b273eb6fdc5c1ca10534895005aa", duration: "4:07", listens: "638,274,951", releaseYear: 1987, audio:"../audios/Michael Jackson - Bad (Shortened Version).mp3"},
  {title: "Smooth Criminal", artist: "Michael Jackson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8jq3HzZHjCbSwWu3zrEX9qvt6_5x3pUESg&s", duration: "4:17", listens: "1,047,593,816", releaseYear: 1988, audio:"../audios/Michael Jackson - Smooth Criminal (Single Version) HD.mp3"},
  {title: "Rock Me Baby", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2730cb9e4d49412fce4ae730004", duration: "3:25", listens: "94,758,162", releaseYear: 1964, audio:"../audios/BB King Rock Me Baby.mp3"},
  {title: "You Gonna Miss Me", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2736db321dc703ff22acd14255a", duration: "3:58", listens: "47,285,936", releaseYear: 1962, audio:"../audios/You're Gonna Miss Me.mp3"},
  {title: "Why I Sing Blues", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2734636d061a68c21cc8691588e", duration: "8:27", listens: "84,759,372", releaseYear: 1969, audio:"../audios/B.B. King - Why I Sing the Blues.mp3"},
  {title: "School Days", artist: "Chuck Berry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnz62b1wryzqP7Tka-TGQx3WXxdTOE_uvfA&s", duration: "3:27", listens: "147,285,936", releaseYear: 1957, audio:"../audios/School Days - Chuck Berry.mp3"},
  {title: "Maybelene", artist: "Chuck Berry", image: "https://i.scdn.co/image/ab67616d00001e02e226488b7af9f296c95be551", duration: "2:21", listens: "94,758,162", releaseYear: 1955, audio:"../audios/Maybeline.mp3"},
  {title: "Carol", artist: "Chuck Berry", image: "https://i.scdn.co/image/ab67616d0000b2734d46a5195bc862525bab76c1", duration: "2:47", listens: "147,285,936", releaseYear: 1958, audio:"../audios/Chuck Berry - Carol.mp3"},
  {title: "Taxman", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b27328b8b9b46428896e6491e97a", duration: "2:39", listens: "394,758,162", releaseYear: 1966, audio:"../audios/The Beatles - Taxman.mp3"},
  {title: "Yesterday", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa", duration: "2:05", listens: "1,584,759,372", releaseYear: 1965, audio:"../audios/Yesterday (Remastered 2009).mp3"},
  {title: "God's Plan", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5", duration: "3:19", listens: "2,847,593,816", releaseYear: 2018, audio:"../audios/God's Plan.mp3"},
  {title: "Feel No Ways", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c", duration: "4:02", listens: "394,758,162", releaseYear: 2016, audio:"../audios/Drake - Feel No Ways.mp3"},
  {title: "Tailor Swif", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288", duration: "3:14", listens: "247,593,816", releaseYear: 2013, audio:"../audios/Tailor Swif.mp3"},
  {title: "L$D", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d0000b27380a87640a0f002121e284af1", duration: "3:52", listens: "638,274,951", releaseYear: 2015, audio:"../audios/L$D.mp3"},
  {title: "JD", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d0000b273b1c42af52ff03037bbe5956a", duration: "3:25", listens: "184,759,372", releaseYear: 2018,audio:"../audios/A$AP ROCKY - JD.mp3"},
  {title: "Angie", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b273fa3c4374e2cdd3cc1636c79b", duration: "4:32", listens: "394,758,162", releaseYear: 1973 ,audio:"../audios/The Rolling Stones - Angie [Official Lyric Video].mp3"},
  {title: "Gimme Shelter", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b2732af30c881bb23cfb82a8cf99", duration: "4:30", listens: "847,392,658", releaseYear: 1969, audio:"../audios/The Rolling Stones - Gimme Shelter (Official Lyric Video).mp3"},
  {title: "She Was Hot", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b27325942d24cbd89a94410d6087", duration: "4:25", listens: "94,758,162", releaseYear: 1984,audio:"../audios/The Rolling Stones - She Was Hot - OFFICIAL PROMO.mp3"},
  {title: "What'd I Say", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d00001e021990f67950270de15b709d99", duration: "6:30", listens: "247,593,816", releaseYear: 1959,audio:"../audios/Ray Charles - What'd I Say (1959).mp3"},
  {title: "That's Enough", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273594bda8769fad1fbc92156e2", duration: "2:47", listens: "84,759,372", releaseYear: 1959,audio:"../audios/That's Enough (2005 Remaster).mp3"},
  {title: "BAD BLOOD", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b2737941dc6a3a023016acbe3d06", duration: "3:31", listens: "1,247,583,924", releaseYear: 2015,audio:"../audios/Taylor Swift - Bad Blood (Taylor's Version) (Lyric Video).mp3"},
  {title: "Wish You Were Here", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b273502bbf975cb8d7537f206780", duration: "5:34", listens: "892,473,651", releaseYear: 1975,audio:"../audios/Wish You Were Here.mp3"},
  {title: "I Can", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2730b3331c0bfce749049377d70", duration: "4:12", listens: "156,284,739", releaseYear: 2002,audio:"../audios/I Can.mp3"},
  {title: "Patience", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2736464d88f4a4cc33bac40030f", duration: "5:14", listens: "198,473,852", releaseYear: 2012,audio:"../audios/Nas & Damian Marley - Patience.mp3"},
  {title: "Snooze", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1", duration: "3:22", listens: "1,892,647,283", releaseYear: 2022,audio:"../audios/SZA - Snooze (Official Video).mp3"},
  {title: "Broken Clocks", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b273ea477be88fd2fb3166eec4f1", duration: "3:53", listens: "647,293,184", releaseYear: 2017,audio:"../audios/SZA - Broken Clocks (Official Audio).mp3"},
  {title: "All The Stars", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888", duration: "3:52", listens: "1,584,726,391", releaseYear: 2018,audio:"../audios/All The Stars.mp3"},
  {title: "Without Me", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b2735157f8b4710f9cc538213cb6", duration: "4:50", listens: "2,186,473,829", releaseYear: 2002,audio:"../audios/Eminem - Without Me (Audio).mp3"},
  {title: "Mockingbird", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d00001e021303ee5b2e9a7a294efa35da", duration: "4:10", listens: "1,947,382,657", releaseYear: 2004,audio:"../audios/Mockingbird.mp3"},
  {title: "Godzilla", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c", duration: "3:31", listens: "1,738,594,726", releaseYear: 2020,audio:"../audios/Godzilla (feat. Juice WRLD) [Official Audio].mp3"},
  {title: "Boplicity", artist: "Miles Davis", image: "https://i.scdn.co/image/ab67616d0000b273f44518f7aea6cc64ecca8448", duration: "3:00", listens: "89,473,629", releaseYear: 1957,audio:"../audios/Miles Davis - Boplicity.mp3"},
  {title: "Autumn Leaves", artist: "Miles Davis", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k_gtUUUGLN6d8R6yncOP6Lc-RMTT0StDkA&s", duration: "12:54", listens: "156,284,937", releaseYear: 1958,audio:"../audios/Cannonball Adderly & Miles Davis - Autumn Leaves.mp3"},
  {title: "The Hills", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b27357b02e479a9f7d11ac7e60d6", duration: "4:02", listens: "2,847,593,628", releaseYear: 2015,audio:"../audios/The Hills.mp3"},
  {title: "Empire State Of Mind", artist: "Jay-Z", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G8Spoh_yRoya0SYE1q6jPtFqI3fxxxd2Fg&s", duration: "4:36", listens: "1,594,728,463", releaseYear: 2009,audio:"../audios/Jay-Z - Empire State Of Mind (Feat. Alicia Keys).mp3"},
  {title: "Song Cry", artist: "Jay-Z", image: "https://i.scdn.co/image/ab67616d0000b2731b3f6f34954118500ed3e7a7", duration: "5:20", listens: "284,759,384", releaseYear: 2001,audio:"../audios/Jay-Z - Song Cry.mp3"},
  {title: "IGOR'S THEME", artist: "Tyler The Creator", image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", duration: "3:15", listens: "894,573,629", releaseYear: 2019,audio:"../audios/Tyler, The Creator - IGOR'S THEME (feat. Lil Uzi Vert).mp3"},
  {title: "See You Again", artist: "Tyler The Creator", image: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", duration: "3:03", listens: "1,284,739,582", releaseYear: 2017,audio:"../audios/Tyler, The Creator - SEE YOU AGAIN (ft. Kali Uchis).mp3"},
  {title: "A Muslim Tale", artist: "Goran Bregović", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcttnnS4tLn7SNKSWvHRmABti5W5Aq1CgfDg&s", duration: "4:18", listens: "47,382,659", releaseYear: 1995,audio:"../audios/A Muslim Tale (The Judgement Day).mp3"},
 {title: "It Was A Good Day", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b273994c319841a923465d62e271", duration: "4:20", listens: "294,738,472", releaseYear: 1992,audio:"../audios/07. Ice Cube - It Was A Good Day.mp3"},
  {title: "You Can Do It", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b27355af7e0cd246a50f8cd15194", duration: "3:54", listens: "186,473,829", releaseYear: 2000,audio:"../audios/You Can Do It.mp3"},
  {title: "It's My Ego", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b27301768d3269f907b7962e57d9", duration: "4:07", listens: "94,728,563", releaseYear: 2008,audio:"../audios/It's My Ego.mp3"},
  {title: "Fallin'", artist: "Alicia Keys", image: "https://i.scdn.co/image/ab67616d0000b27318b31906d928fe22eec5e673", duration: "3:30", listens: "647,382,951", releaseYear: 2001,audio:"../audios/Alicia Keys - Fallin' (Remastered) [Audio HQ].mp3"},
  {title: "UNDERDOG", artist: "Alicia Keys", image: "https://i.scdn.co/image/ab67616d0000b273df9b70f870bb942ad900061d", duration: "3:11", listens: "284,759,384", releaseYear: 2020,audio:"../audios/Alicia Keys - Underdog (Lyrics).mp3"},
  {title: "Titi Me Pregunto", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72", duration: "4:02", listens: "2,847,392,658", releaseYear: 2022,audio:"../audios/Titi Me Pregunto - Bad Bunny (AudioEstudio) 2022.mp3"},
  {title: "DAKITI", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d00001e0234c8199b0b3b3fb42b8a98a8", duration: "3:25", listens: "3,194,728,563", releaseYear: 2020,audio:"../audios/BAD BUNNY x JHAY CORTEZ - DÁKITI | EL ÚLTIMO TOUR DEL MUNDO (Official Video).mp3"},
  {title: "Selfless", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273bfa99afb5ef0d26d5064b23b", duration: "3:41", listens: "156,473,829", releaseYear: 2020,audio:"../audios/The Strokes - Selfless (Official Audio).mp3"},
  {title: "WAKA WAKA", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b273752d2becbb91841a31c556b8", duration: "3:22", listens: "1,594,738,472", releaseYear: 2010,audio:"../audios/Shakira - Waka Waka (This Time for Africa) (Audio).mp3"},
  {title: "HIPS DON'T LIE", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b273318395259d13702aa1b5e6a3", duration: "3:38", listens: "2,284,759,384", releaseYear: 2006,audio:"../audios/Shakira - Hips Don't Lie (Official 4K Video) ft. Wyclef Jean [DUT5rEU6pqM].mp3"},
  {title: "Pay In Blood", artist: "Bob Dylan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfkb-iue0vqScTx2iRIM5lYmwY7iZq68A-w&s", duration: "5:09", listens: "47,392,658", releaseYear: 2012,audio:"../audios/Bob Dylan - Pay in Blood (Official Audio).mp3"},
  {title: "Most Of The Time", artist: "Bob Dylan", image: "https://i.scdn.co/image/ab67616d0000b2735954a6441cc1d88011841d1c", duration: "5:01", listens: "94,758,162", releaseYear: 1989,audio:"../audios/Most of the Time.mp3"},
  {title: "THE WAY", artist: "Ariana Grande", image: "https://i.scdn.co/image/ab67616d0000b27363a765b4cb921a65a344f45d", duration: "3:46", listens: "1,284,759,384", releaseYear: 2013,audio:"../audios/Ariana Grande - The Way ft. Mac Miller.mp3"},
  {title: "Break Free", artist: "Ariana Grande", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGaICAQqnxBxUEAX5r68S52pBDaCjJYliDg&s", duration: "3:34", listens: "1,847,392,658", releaseYear: 2014,audio:"../audios/Ariana Grande - Break Free feat. Zedd (Audio).mp3"},
  {title: "Hey Porter", artist: "Johnny Cash", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeyv1BMRqPa_DDZpc0O5wT23alOxOOFvhaQ&s", duration: "2:14", listens: "84,739,582", releaseYear: 1955,audio:"../audios/Hey Porter.mp3"},
  {title: "Hurt", artist: "Johnny Cash", image: "https://i.scdn.co/image/ab67616d0000b2736f4f62da3d811b6501a69ffa", duration: "3:38", listens: "394,728,563", releaseYear: 2002,audio:"../audios/Johnny Cash- Hurt (HQ).mp3"},
  {title: "Noid", artist: "Tyler The Creator", image: "https://i.scdn.co/image/ab67616d0000b273dc620428d6bbc305cd43c19b", duration: "4:44", listens: "647,382,951", releaseYear: 2024,audio:"../audios/Tyler, The Creator - Noid (AUDIO) (Single from Chromakopia).mp3"},
  {title: "ONE LOVE", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b273ef4e05f6dff96e307b43ecd8", duration: "2:52", listens: "284,759,384", releaseYear: 1977,audio:"../audios/Bob Marley - One Love.mp3"},
  {title: "Wasted Years", artist: "Iron Maiden", image: "https://i.scdn.co/image/ab67616d0000b2733bba790a6a10949ef45bfe2a", duration: "5:06", listens: "194,728,563", releaseYear: 1986,audio:"../audios/Iron Maiden - Wasted Years (1998 Remastered Version) #02mp3"},
  {title: "Bella Ciao", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b273d5855facf0c208c6ab59df73", duration: "3:28", listens: "156,473,829", releaseYear: 1995,audio:"../audios/Bella Ciao.mp3"},
  {title: "Around the World", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d00001e0244d9e117d2a21880f06f57b7", duration: "7:09", listens: "847,392,658", releaseYear: 1997,audio:"../audios/Daft Punk - Around the World (Official Audio).mp3"},
  {title: "Ordinary", artist: "Alex Warren", image: "https://i.scdn.co/image/ab67616d0000b273fa2bcf3df669bde08b2e7d36", duration: "3:12", listens: "45,123,789", releaseYear: 2023,audio:"../audios/Alex Warren - Ordinary (Official Video).mp3"},
  {title: "Luther", artist: "Kendrick Lamar & SZA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAdC8Smk1_y0GInWv-KHQZ4OCjTsMx-eujw&s", duration: "3:47", listens: "127,456,321", releaseYear: 2024,audio:"../audios/Kendrick Lamar - luther (Official Audio).mp3"},
  {title: "Cliché", artist: "Machine Gun Kelly", image: "https://i.scdn.co/image/ab67616d0000b2734fcac0fac2799a4dda037cc1", duration: "3:25", listens: "89,234,567", releaseYear: 2022,audio:"../audios/mgk - cliché (Official Music Video).mp3"},
  {title: "Party 4 U", artist: "Charli XCX", image: "https://i.scdn.co/image/ab6761610000f17864584f6175cff36d2d8c57d1", duration: "2:58", listens: "156,789,123", releaseYear: 2024,audio:"../audios/Charli XCX - party 4 u [Official Audio].mp3"},
  {title: "Don't Say You Love Me", artist: "Jin (BTS)", image: "https://i.scdn.co/image/ab67616d0000b27389228504f700641956e29f5d", duration: "3:41", listens: "98,765,432", releaseYear: 2022,audio:"../audios/진 (Jin) 'Don't Say You Love Me' Lyric Video.mp3"},
  {title: "What I Want", artist: "Morgan Wallen & Tate McRae", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hJ6YOZwuesR_7QzqpjIc6tTc5_a_wDs7uw&s", duration: "3:15", listens: "234,567,890", releaseYear: 2024,audio:"../audios/Morgan Wallen, Tate McRae - What I Want (Audio).mp3"},
  {title: "Made You Look", artist: "Meghan Trainor", image: "https://i.scdn.co/image/ab67616d0000b2731a4f1ada93881da4ca8060ff", duration: "2:21", listens: "789,123,456", releaseYear: 2022,audio:"../audios/Meghan Trainor - Made You Look (Official Music Video).mp3"},
  {title: "Flowers", artist: "Miley Cyrus", image: "https://i.scdn.co/image/ab67616d00001e02cd222052a2594be29a6616b5", duration: "3:20", listens: "1,234,567,890", releaseYear: 2023,audio:"../audios/Miley Cyrus - Flowers (Official Video).mp3"},
  {title: "As It Was", artist: "Harry Styles", image: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14", duration: "2:47", listens: "1,567,890,123", releaseYear: 2022,audio:"../audios/Harry Styles - As It Was (Official Video).mp3"},
  {title: "Disease", artist: "Lady Gaga", image: "https://i.scdn.co/image/ab67616d0000b273b0860cf0a98e09663c82290c", duration: "3:33", listens: "345,678,901", releaseYear: 2024,audio:"../audios/Disease.mp3"},
  {title: "Man's Best Friend", artist: "Sabrina Carpenter", image: "https://i.scdn.co/image/ab67616d00001e022713d6564a3aa09d099ec502", duration: "2:45", listens: "123,456,789", releaseYear: 2024,audio:"../audios/Sabrina Carpenter - Manchild (Official Video).mp3"},
  {title: "Preacher Man", artist: "Kanye West", image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84a6702df7b7b0cb327d5d243b", duration: "4:02", listens: "678,901,234", releaseYear: 2024,audio:"../audios/Ye (Kanye West) -01 - Preacher Man.mp3"},
  {title: "Henry, Come On", artist: "Lana Del Rey", image: "https://i.scdn.co/image/ab67616d0000b2734fb0b47e965f62951205cc5a", duration: "4:18", listens: "234,567,890", releaseYear: 2024,audio:"../audios/Lana Del Rey - Henry, come on (Audio).mp3"},
  {title: "Why Love", artist: "Asake", image: "https://i.scdn.co/image/ab67616d0000b273c6fc6f8b30fad679a22b05ce", duration: "3:28", listens: "567,890,123", releaseYear: 2023,audio:"../audios/Asake - WHY LOVE (Official Video).mp3"},
  {title: "Anxiety", artist: "Doechii", image: "https://i.scdn.co/image/ab67616d0000b2733de7e97b3e5aa3eaccfc19ec", duration: "3:07", listens: "89,012,345", releaseYear: 2024,audio:"../audios/Doechii - Anxiety (Visualizer).mp3"},
  {title: "POP OUT", artist: "Playboi Carti", image: "https://i.scdn.co/image/ab67616d0000b2736b219c8d8462bfe254a20469", duration: "2:52", listens: "890,123,456", releaseYear: 2024,audio:"../audios/POP OUT.mp3"},
  {title: "Was I Wrong?", artist: "Hotline TNT", image: "https://i.scdn.co/image/ab67616d00001e02e5e11d0c0bfcabed2733335e", duration: "3:41", listens: "12,345,678", releaseYear: 2023,audio:"../audios/Was I Wrong_.mp3"},
  {title: "Baby (Is It a Crime)", artist: "Rema", image: "https://i.scdn.co/image/ab67616d0000b273723f2575f85a9a1f6a93f4bf", duration: "3:19", listens: "456,789,012", releaseYear: 2024,audio:"../audios/Rema - Baby (Is it a Crime) [Official Video].mp3"},
  {title: "Heat Waves", artist: "Glass Animals", image: "https://i.scdn.co/image/ab67616d0000b273ab9d1ae18b640b7b0ce390d4", duration: "3:58", listens: "2,345,678,901", releaseYear: 2020,audio:"../audios/Glass Animals - Heat Waves (Official Video).mp3"},
  {title: "Mad World", artist: "Gary Jules", image: "https://i.scdn.co/image/ab67616d0000b2737948eec521c67e76cafe30a0", duration: "3:07", listens: "456,789,123", releaseYear: 2001,audio:"../audios/Mad World - Gary Jules (Lyrics).mp3"},
  {title: "Good 4 U", artist: "Olivia Rodrigo", image: "https://i.scdn.co/image/ab67616d0000b273670ec029374e082f921f9f74", duration: "2:58", listens: "1,789,012,345", releaseYear: 2021,audio:"../audios/Olivia Rodrigo - good 4 u (Lyrics).mp3"},
  {title: "Somebody Else", artist: "The 1975", image: "https://i.scdn.co/image/ab67616d0000b273d3de03550f715df1ea7e0c08", duration: "5:47", listens: "789,012,345", releaseYear: 2016,audio:"../audios/the 1975 - somebody else // lyrics.mp3"},
  {title: "Stay", artist: "The Kid LAROI & Justin Bieber", image: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5", duration: "2:21", listens: "2,012,345,678", releaseYear: 2021,audio:"../audios/The Kid LAROI, Justin Bieber - STAY (Official Video).mp3"},
  {title: "Hotel California", artist: "Eagles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQEFl5A-AC98rIoGAMAGcPgiCzh_TImGdGw&s", duration: "6:30", listens: "1,456,789,012", releaseYear: 1976,audio:"../audios/Eagles - Hotel California (Official Audio).mp3"},
  {title: "Somebody Told Me", artist: "The Killers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNfueskbVtIG037YOFVWi2oz3udCSGhsT5A&s", duration: "3:17", listens: "345,678,901", releaseYear: 2004,audio:"../audios/Somebody Told Me - The Killers.mp3"},
  {title: "Vampire", artist: "Olivia Rodrigo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMmBy8h30LNu7c0Dl1g5BmuYPa283R0fYKw&s", duration: "3:39", listens: "1,123,456,789", releaseYear: 2023,audio:"../audios/vampire.mp3"},
  {title: "The Night We Met", artist: "Lord Huron", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EY392Qei21HoYEhKlJI5RXVz1DQdbuY8MQ&s", duration: "3:28", listens: "567,890,123", releaseYear: 2015,audio:"../audios/Lord Huron - The Night We Met (Official Audio).mp3"},
  {title: "Sandstorm", artist: "Darude", image: "https://i.scdn.co/image/ab67616d0000b273932a43c4d4fec920f567c771", duration: "3:49", listens: "456,789,012", releaseYear: 1999,audio:"../audios/Sandstorm.mp3"},
  {title: "Levels", artist: "Avicii", image: "https://i.scdn.co/image/ab67616d0000b273f06f1900957a4c6b1d2a5e07", duration: "3:18", listens: "789,012,345", releaseYear: 2011,audio:"../audios/Avicii - Levels.mp3"},
  {title: "Tsunami", artist: "DVBBS & Borgeous", image: "https://i.scdn.co/image/ab67616d0000b27321d1a642761f8d4779cc2c38", duration: "4:08", listens: "234,567,890", releaseYear: 2013,audio:"../audios/DVBBS & Borgeous - TSUNAMI (Original Mix).mp3"},
  {title: "Bad and Boujee", artist: "Migos", image: "https://i.scdn.co/image/ab67616d0000b2736275aeac316378b0dd4f31fd", duration: "5:43", listens: "1,890,123,456", releaseYear: 2016,audio:"../audios/Migos - Bad and Boujee ft Lil Uzi Vert [Official Video].mp3"},
  {title: "Calabria 2008", artist: "Benny Benassi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RlAO38BRn3UflMU5AkMCAhwErYvLT3oiZA&s", duration: "3:29", listens: "123,456,789", releaseYear: 2008,audio:"../audios/Calabria 2008 (feat. Natasja) by Enur Raggatronic Audio.mp3"},
  {title: "Mo Bamba", artist: "Sheck Wes", image: "https://i.scdn.co/image/ab67616d0000b27359cd47039c5b10ed919fbaa8", duration: "3:03", listens: "678,901,234", releaseYear: 2017,audio:"../audios/Sheck Wes - Mo Bamba (Official Music Video).mp3"},
  {title: "XO Tour Llif3", artist: "Lil Uzi Vert", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQLeVtLByI8eMXq5uNp9UuupHTVLaBfqlOA&s", duration: "3:03", listens: "1,567,890,123", releaseYear: 2017,audio:"../audios/Lil Uzi Vert - XO Tour Llif3 (Official Music Video).mp3"},
  {title: "Harlem Shake", artist: "Baauer", image: "https://i.scdn.co/image/ab67616d0000b273bce7a01cbaffe3e94e5323f5", duration: "3:15", listens: "890,123,456", releaseYear: 2012,audio:"../audios/Baauer - Harlem Shake [Official Audio].mp3"},
  {title: "Bangarang", artist: "Skrillex", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4U5fM2BvlkrW9rA0y-yuSBKVbqZqeti_2og&s", duration: "3:35", listens: "345,678,901", releaseYear: 2011,audio:"../audios/Skrillex - Bangarang (Ft. Sirah) [Official Audio].mp3"}
  ];



const songsContainer = document.getElementById('songs');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');

let currentSong = null;


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
      })
      .catch(error => {
        console.error('Error playing audio:', error);
      });
  }
}

function pauseSong() {
  audioPlayer.pause();
  updatePlayButton(false);
}

function updatePlayButton(isPlaying) {
  if (isPlaying) {
    playBtn.textContent = '';
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  } else {
    playBtn.textContent = '';
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
  }
}

function updateSeekBar() {
  if (audioPlayer.duration) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = progress;
  }
}


function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function findSong(title, artist) {
  return songs.find(song => 
    song.title.toLowerCase() === title.toLowerCase() &&
    song.artist.toLowerCase() === artist.toLowerCase()
  );
}

function findSimilarArtistSongs(artist, currentSongTitle) {
  return songs.filter(song => 
    song.artist.toLowerCase() === artist.toLowerCase() && 
    song.title.toLowerCase() !== currentSongTitle.toLowerCase()
  );
}

function navigateToSong(song) {
  const encodedTitle = encodeURIComponent(song.title);
  const encodedArtist = encodeURIComponent(song.artist);
  window.location.href = `song.html?title=${encodedTitle}&artist=${encodedArtist}`;
}

function playSpecificSong(title, artist) {
  const song = findSong(title, artist);
  if (song) {
    loadSong(song);
    playSong();
  }
}


function displaysongs(songsToDisplay = songs) { 
  songsContainer.innerHTML = '';
     
  songsToDisplay.forEach(song => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url('${song.image}')`;
         
    card.innerHTML = `
      <h4>${song.title}</h4>
      <p>${song.artist}</p>
      <h3>${song.listens}</h3>
      <button class="play-song-btn" onclick="event.stopPropagation(); playSpecificSong('${song.title}', '${song.artist}')"></button>
    `;
         
    card.addEventListener('click', function() {
      navigateToSong(song);
    });
         
    card.style.cursor = 'pointer';
    songsContainer.appendChild(card);
  });
}


playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);

seekBar.addEventListener('input', function() {
  if (audioPlayer.duration) {
    const seekTime = (seekBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
  }
});

volumeBar.addEventListener('input', function() {
  audioPlayer.volume = volumeBar.value;
});


document.addEventListener('DOMContentLoaded', function() {
  const songTitle = getUrlParameter('title');
  const songArtist = getUrlParameter('artist');
  
  updatePlayButton(false);
  
  if (songTitle && songArtist) {
    displaySelectedSong(); 
  } else {
    displaysongs(); 
  }
});


if (typeof songs === 'undefined') {
  console.error('Songs array is not defined. Make sure to include your songs data.');
}
function displaySelectedSong() {
    const songTitle = getUrlParameter('title');
    const songArtist = getUrlParameter('artist');
    
    if (!songTitle || !songArtist) {
        console.error('No song information found in URL');
        displaysongs();
        return;
    }
    
    const decodedTitle = decodeURIComponent(songTitle);
    const decodedArtist = decodeURIComponent(songArtist);
    
    const selectedSong = findSong(decodedTitle, decodedArtist);
    
    if (!selectedSong) {
        console.error('Song not found in database');
        songsContainer.innerHTML = '<p>Song not found</p>';
        return;
    }
    
    loadSong(selectedSong);
    
    songsContainer.innerHTML = '';
    
    const selectedCard = document.createElement('div');
    selectedCard.className = 'card selected-song-card';
    selectedCard.style.backgroundImage = `url('${selectedSong.image}')`;
    
    selectedCard.innerHTML = `
        <h1 class="selectedsong">${selectedSong.title}</h1>
        <h3 class="selectedartist">Artist - ${selectedSong.artist}</h3>
        <h3 class="listens">Listens - ${selectedSong.listens}</h3>
        <h3 class="year">Releases - ${selectedSong.releaseYear}</h3>
        <p class="duration">${selectedSong.duration}</p>
    `;
    
    selectedCard.addEventListener('click', function() {
        console.log('Selected song clicked:', selectedSong.title);
    });
    
    selectedCard.style.cursor = 'pointer';
    songsContainer.appendChild(selectedCard);
    
    const similarSongs = findSimilarArtistSongs(selectedSong.artist, selectedSong.title);
    
    if (similarSongs.length > 0) {
        const similarSongsTitle = document.createElement('div');
        similarSongsTitle.className = 'similar-songs-title';
        similarSongsTitle.innerHTML = `<h2>More from ${selectedSong.artist}</h2>`;
        songsContainer.appendChild(similarSongsTitle);
        
        // Fixed: Added index parameter and song numbering
        similarSongs.forEach((song, index) => {
            const similarCard = document.createElement('div');
            similarCard.className = 'card similar-artist-card';
            similarCard.style.backgroundImage = `url('${song.image}')`;
            
            similarCard.innerHTML = `
                <div class="song-number">${index + 1}</div>
                <h4 class="similar-song-title">${song.title}</h4>
                <p class="similar-song-duration">${song.duration}</p>
                <p class="similar-song-listens">${song.listens}</p>
                <button class="play-song-btn" onclick="event.stopPropagation(); playSpecificSong('${song.title}', '${song.artist}')"></button>
            `;
            
            similarCard.addEventListener('click', function() {
                navigateToSong(song);
            });
            
            similarCard.style.cursor = 'pointer';
            songsContainer.appendChild(similarCard);
        });
    }
}