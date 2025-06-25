const songs = [
  {title: "Ring of Fire", artist: "Johnny Cash", image: "https://i.scdn.co/image/ab67616d0000b273dfe4bfe695c4192e547e72c7", duration: "2:38", listens: "287,394,756"},
  {title: "Get Lucky", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d00001e021d5cf960a92bb8b03fc2be7f", duration: "6:07", listens: "1,847,392,658"},
  {title: "EARFQUAKE", artist: "Tyler the Creator", image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", duration: "3:16", listens: "384,756,291"},
  {title: "Umbrella", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27314bd90935ed5a2ac6c662373", duration: "4:15", listens: "963,847,521"},
  {title: "Blinding Lights", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b273a3eff72f62782fb589a492f9", duration: "3:20", listens: "3,847,561,923"},
  {title: "Round Midnight", artist: "Miles Davis", image: "https://i.scdn.co/image/ab67616d0000b273cb6f92683ff9ad65f27a3f9f", duration: "5:57", listens: "127,563,847"},
  {title: "No Woman No Cry", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b273b5a0ee94e2741374ce5c71a2", duration: "7:08", listens: "728,394,561"},
  {title: "HUMBLE", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b2732171b967bef683ab0eaf12e9", duration: "2:57", listens: "1,294,736,582"},
  {title: "Can't Help Falling in Love", artist: "Elvis Presley", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRRWr3qKqu6TtyHL-9TIY1hFg6WNX1aQp4g&s", duration: "3:02", listens: "847,392,657"},
  {title: "Last Nite", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b27313f2466b83507515291acce4", duration: "3:17", listens: "394,756,283"},
  {title: "The Trooper", artist: "Iron Maiden", image: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84504448ac225560c35d449390", duration: "4:12", listens: "276,847,391"},
  {title: "Another Brick in the Wall", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf", duration: "3:21", listens: "638,274,951"},
  {title: "Shake It Off", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b2730a65d3623ee522d772cc426a", duration: "3:39", listens: "2,847,392,658"},
  {title: "Good Days", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b2733097b1375ab17ae5bf302a0a", duration: "4:39", listens: "594,736,821"},
  {title: "Paint It Black", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b273e33b92dd515979177fbc2905", duration: "3:44", listens: "476,384,729"},
  {title: "Georgia on My Mind", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273df3d459abce953d24caf1f91", duration: "3:38", listens: "183,749,625"},
  {title: "Wild for the Night", artist: "A$AP Rocky", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI3Kdp_AvhxNyEbF_lMYQD1WQ1cJeC-31tA&s", duration: "3:17", listens: "247,593,816"},
  {title: "Hotline Bling", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b27393d393bbc923a9e0e1ec77dd", duration: "4:27", listens: "2,394,758,162"},
  {title: "Thriller", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97", duration: "5:57", listens: "1,638,274,951"},
  {title: "Who Dat Boy", artist: "Tyler, The Creator", image: "https://i.scdn.co/image/ab67616d0000b2730f14a4f77129c75ae50809d4", duration: "3:23", listens: "274,638,591"},
  {title: "Work", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27333c6b920eabcf4c00d7a1093", duration: "3:39", listens: "847,392,658"},
  {title: "Starboy", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452", duration: "3:50", listens: "2,183,749,625"},
  {title: "Let It Be", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1", duration: "3:50", listens: "973,847,562"},
  {title: "Swimming Pools", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b2730ad5098c562d43ce8211539c", duration: "5:13", listens: "638,274,951"},
  {title: "Hound Dog", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b273dec09ec14280fcffb7eacadb", duration: "2:16", listens: "294,736,582"},
  {title: "Someday", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273de675dad9a07eed831e6fb02", duration: "3:07", listens: "184,759,372"},
  {title: "Run to the Hills", artist: "Iron Maiden", image: "https://i.scdn.co/image/ab67616d0000b273a633718a1d28f157193bd865", duration: "3:54", listens: "347,285,916"},
  {title: "Learning to Fly", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b27361f734a2370207feda78d018", duration: "4:53", listens: "428,573,691"},
  {title: "Love Story", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b273a48964b5d9a3d6968ae3e0de", duration: "3:55", listens: "1,847,392,658"},
  {title: "Drew Barrymore", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b2737897c90f769272afaba304c8", duration: "4:16", listens: "394,758,162"},
  {title: "Satisfaction", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b27305c5be85b64eaff732f7cb0b", duration: "3:43", listens: "638,274,951"},
  {title: "One Dance", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2734476434ef5142600fcd39ad9", duration: "2:54", listens: "3,247,593,816"},
  {title: "I Got a Woman", artist: "Ray Charles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk-hxtNAA6du9zIlqh7BLJfo4rr5HKmBnYw&s", duration: "2:56", listens: "147,285,936"},
  {title: "She Wolf", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b27338abd299129f8be89e636d98", duration: "3:08", listens: "527,391,648"},
  {title: "Johnny B. Goode", artist: "Chuck Berry", image: "https://i.scdn.co/image/dd7b763fb49c35b1ebaadf3695156aeb7d9f9ca3", duration: "2:41", listens: "384,759,271"},
  {title: "Blowin' in the Wind", artist: "Bob Dylan", image: "https://i.scdn.co/image/ab67616d0000b2737d214af8499aa95ad220f573", duration: "2:48", listens: "294,758,162"},
  {title: "Safaera", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0", duration: "4:55", listens: "1,184,759,372"},
  {title: "No One", artist: "Alicia Keys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO1jrYo_lY4Y1edBwtrA2ntPMDGzGnNWESw&s", duration: "4:18", listens: "638,274,951"},
  {title: "Underground", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b2730ff44bf2e8ffddb0ed3c6b5a", duration: "3:28", listens: "83,749,625"},
  {title: "Lose Yourself", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b273968da85f248a7e7747767801", duration: "5:26", listens: "2,047,593,816"},
  {title: "Problem", artist: "Ariana Grande", image: "https://i.scdn.co/image/ab67616d0000b273deec12a28d1e336c5052e9aa", duration: "3:13", listens: "847,392,658"},
  {title: "One Mic", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2731799d1e5c10a0cb1866a45a1", duration: "4:38", listens: "194,758,362"},
  {title: "Rock With You", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac", duration: "3:40", listens: "847,392,658"},
  {title: "Hey Jude", artist: "The Beatles", image: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84cfbd1f5ced2fd84b57c157aa", duration: "7:11", listens: "1,274,638,591"},
  {title: "I Walk the Line", artist: "Johnny Cash", image: "https://i.scdn.co/image/ab67616d0000b2732fc24df8bf525d82a5d8cf88", duration: "2:44", listens: "384,759,271"},
  {title: "The Thrill Is Gone", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2731a04649cc2ddb348a9e08f23", duration: "5:26", listens: "247,593,816"},
  {title: "99 Problems", artist: "Jay-Z", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5QQ4O3MrJWGvjy9ZUP9l6Tgne6n26ZITiaA&s", duration: "3:52", listens: "638,274,951"},
  {title: "m.A.A.d city", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b273d58e537cea05c2156792c53d", duration: "5:50", listens: "494,758,162"},
  {title: "Harder Better Faster Stronger", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d0000b273432134900b972043b6faaccd", duration: "3:45", listens: "1,047,593,816"},
  {title: "Call Out My Name", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b2731f6a2a40bb692936879db730", duration: "3:48", listens: "1,638,274,951"},
  {title: "S&M", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b27331548865f7c729290b96c794", duration: "4:03", listens: "847,392,658"},
  {title: "My Funny Valentine", artist: "Miles Davis", image: "https://i.scdn.co/image/ab67616d0000b273a12dbaf6a9ef150a29062472", duration: "5:57", listens: "94,758,162"},
  {title: "Three Little Birds", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b2733dad91f4a796045ac25496f3", duration: "3:00", listens: "638,274,951"},
  {title: "Love Me Tender", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b27361b5cdb256024de5e72080bc", duration: "2:42", listens: "184,759,372"},
  {title: "Jailhouse Rock", artist: "Elvis Presley", image: "https://i.scdn.co/image/ab67616d0000b273de10aca58082517bed287863", duration: "2:27", listens: "347,285,916"},
  {title: "Hard to Explain", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273a4a47040a6d6e340b90845fd", duration: "3:48", listens: "247,593,816"},
  {title: "Iron Maiden", artist: "Iron Maiden", image: "https://i.scdn.co/image/ab67616d0000b273c5be9a6c4dd7040f58521f68", duration: "3:51", listens: "294,758,162"},
  {title: "Time", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b273e739105d5da748b35b35f20d", duration: "6:53", listens: "847,392,658"},
  {title: "22", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b2734c5607f129e9b28fced17fe6", duration: "3:52", listens: "1,394,758,162"},
  {title: "Disturbia", artist: "Rihanna", image: "https://i.scdn.co/image/ab67616d0000b2739414baf36a285e9c268b50ad", duration: "3:59", listens: "638,274,951"},
  {title: "Derezzed", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d0000b27397020c0136e12bb33c7e2cb7", duration: "1:44", listens: "184,759,372"},
  {title: "Hit the Road Jack", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273661bd83a66caed448af485db", duration: "2:01", listens: "347,285,916"},
  {title: "Nice For What", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2739cf12cef382235aed22437f8", duration: "3:30", listens: "1,947,593,816"},
  {title: "Peso", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d0000b27320f0799a7bfd974e465fea7a", duration: "2:13", listens: "294,758,162"},
  {title: "Soy Peor", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b273955c3c2ac8d97e1355b2e3c2", duration: "3:20", listens: "847,392,658"},
  {title: "Girl on Fire", artist: "Alicia Keys", image: "https://i.scdn.co/image/ab67616d0000b273a4fe49eb27e8152710e7a590", duration: "3:04", listens: "638,274,951"},
  {title: "Ederlezi", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b273fb29659220ed95f3b095703f", duration: "4:08", listens: "94,758,162"},
  {title: "Side to Side", artist: "Ariana Grande", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DBIdzFfS70zqAHa9TZt8NYdtLoybVodhfA&s", duration: "3:46", listens: "947,593,816"},
  {title: "Halftime", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2736d971b45082f2fd64b4af39d", duration: "4:04", listens: "184,759,372"},
  {title: "Man in the Mirror", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b273531f7042cfa8b43a09e05edf", duration: "5:19", listens: "847,392,658"},
  {title: "Come Together", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b273699c3d063dad4e127247ed69", duration: "4:20", listens: "1,184,759,372"},
  {title: "Get Up, Stand Up", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d00001e024462f1a2ddb7f08f0c9264b9", duration: "3:17", listens: "394,758,162"},
  {title: "No Vaseline", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b27366884667b3a8901fb702ba92", duration: "5:20", listens: "247,593,816"},
  {title: "Hard Knock Life", artist: "Jay-Z", image: "https://i.scdn.co/image/ab67616d0000b273bb2ae5776f2821b21f3761ff", duration: "3:57", listens: "638,274,951"},
  {title: "Sweet Little Angel", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b273e080a606d640e4379222a592", duration: "6:28", listens: "147,285,936"},
  {title: "Maybelline", artist: "Chuck Berry", image: "https://i.scdn.co/image/ab67616d0000b273196bf0b7be78c73f0bddd728", duration: "2:21", listens: "184,759,372"},
  {title: "Money Trees", artist: "Kendrick Lamar", image: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797", duration: "6:26", listens: "847,392,658"},
  {title: "Whenever, Wherever", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b27370dd68cd18095663f447de14", duration: "3:16", listens: "1,284,759,372"},
  {title: "Bad", artist: "Michael Jackson", image: "https://i.scdn.co/image/ab67616d0000b273eb6fdc5c1ca10534895005aa", duration: "4:07", listens: "638,274,951"},
  {title: "Smooth Criminal", artist: "Michael Jackson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8jq3HzZHjCbSwWu3zrEX9qvt6_5x3pUESg&s", duration: "4:17", listens: "1,047,593,816"},
  {title: "Rock Me Baby", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2730cb9e4d49412fce4ae730004", duration: "3:25", listens: "94,758,162"},
  {title: "You Gonna Miss Me", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2736db321dc703ff22acd14255a", duration: "3:58", listens: "47,285,936"},
  {title: "Why I Sing Blues", artist: "B.B. King", image: "https://i.scdn.co/image/ab67616d0000b2734636d061a68c21cc8691588e", duration: "8:27", listens: "84,759,372"},
  {title: "School Days", artist: "Chuck Berry", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnz62b1wryzqP7Tka-TGQx3WXxdTOE_uvfA&s", duration: "3:27", listens: "147,285,936"},
  {title: "Maybelene", artist: "Chuck Berry", image: "https://i.scdn.co/image/ab67616d00001e02e226488b7af9f296c95be551", duration: "2:21", listens: "94,758,162"},
  {title: "Carol", artist: "Chuck Berry", image: "https://i.scdn.co/image/ab67616d0000b2734d46a5195bc862525bab76c1", duration: "2:47", listens: "147,285,936"},
  {title: "Taxman", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b27328b8b9b46428896e6491e97a", duration: "2:39", listens: "394,758,162"},
  {title: "Yesterday", artist: "The Beatles", image: "https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa", duration: "2:05", listens: "1,584,759,372"},
  {title: "God's Plan", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5", duration: "3:19", listens: "2,847,593,816"},
  {title: "Feel No Ways", artist: "Drake", image: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c", duration: "4:02", listens: "394,758,162"},
  {title: "Tailor Swif", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288", duration: "3:14", listens: "247,593,816"},
  {title: "L$D", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d0000b27380a87640a0f002121e284af1", duration: "3:52", listens: "638,274,951"},
  {title: "JD", artist: "A$AP Rocky", image: "https://i.scdn.co/image/ab67616d0000b273b1c42af52ff03037bbe5956a", duration: "3:25", listens: "184,759,372"},
  {title: "Angie", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b273fa3c4374e2cdd3cc1636c79b", duration: "4:32", listens: "394,758,162"},
  {title: "Gimme Shelter", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b2732af30c881bb23cfb82a8cf99", duration: "4:30", listens: "847,392,658"},
  {title: "She Was Hot", artist: "The Rolling Stones", image: "https://i.scdn.co/image/ab67616d0000b27325942d24cbd89a94410d6087", duration: "4:25", listens: "94,758,162"},
  {title: "What'd I Say", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d00001e021990f67950270de15b709d99", duration: "6:30", listens: "247,593,816"},
  {title: "That's Enough", artist: "Ray Charles", image: "https://i.scdn.co/image/ab67616d0000b273594bda8769fad1fbc92156e2", duration: "2:47", listens: "84,759,372"},
  {title: "BAD BLOOD", artist: "Taylor Swift", image: "https://i.scdn.co/image/ab67616d0000b2737941dc6a3a023016acbe3d06", duration: "3:31", listens: "1,247,583,924"},
  {title: "Wish You Were Here", artist: "Pink Floyd", image: "https://i.scdn.co/image/ab67616d0000b273502bbf975cb8d7537f206780", duration: "5:34", listens: "892,473,651"},
  {title: "I Can", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2730b3331c0bfce749049377d70", duration: "4:12", listens: "156,284,739"},
  {title: "Patience", artist: "Nas", image: "https://i.scdn.co/image/ab67616d0000b2736464d88f4a4cc33bac40030f", duration: "5:14", listens: "198,473,852"},
  {title: "Snooze", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b27370dbc9f47669d120ad874ec1", duration: "3:22", listens: "1,892,647,283"},
  {title: "Broken Clocks", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b273ea477be88fd2fb3166eec4f1", duration: "3:53", listens: "647,293,184"},
  {title: "All The Stars", artist: "SZA", image: "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888", duration: "3:52", listens: "1,584,726,391"},
  {title: "Without Me", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b2735157f8b4710f9cc538213cb6", duration: "4:50", listens: "2,186,473,829"},
  {title: "Mockingbird", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d00001e021303ee5b2e9a7a294efa35da", duration: "4:10", listens: "1,947,382,657"},
  {title: "Godzilla", artist: "Eminem", image: "https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c", duration: "3:31", listens: "1,738,594,726"},
  {title: "Boplicity", artist: "Miles Davis", image: "https://i.scdn.co/image/ab67616d0000b273f44518f7aea6cc64ecca8448", duration: "3:00", listens: "89,473,629"},
  {title: "Autumn Leaves", artist: "Miles Davis", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k_gtUUUGLN6d8R6yncOP6Lc-RMTT0StDkA&s", duration: "12:54", listens: "156,284,937"},
  {title: "The Hills", artist: "The Weeknd", image: "https://i.scdn.co/image/ab67616d0000b27357b02e479a9f7d11ac7e60d6", duration: "4:02", listens: "2,847,593,628"},
  {title: "Empire State Of Mind", artist: "Jay-Z", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G8Spoh_yRoya0SYE1q6jPtFqI3fxxxd2Fg&s", duration: "4:36", listens: "1,594,728,463"},
  {title: "Song Cry", artist: "Jay-Z", image: "https://i.scdn.co/image/ab67616d0000b2731b3f6f34954118500ed3e7a7", duration: "5:20", listens: "284,759,384"},
  {title: "IGOR'S THEME", artist: "Tyler The Creator", image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57", duration: "3:15", listens: "894,573,629"},
  {title: "See You Again", artist: "Tyler The Creator", image: "https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3", duration: "3:03", listens: "1,284,739,582"},
  {title: "A Muslim Tale", artist: "Goran Bregović", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcttnnS4tLn7SNKSWvHRmABti5W5Aq1CgfDg&s", duration: "4:18", listens: "47,382,659"},
  {title: "It Was A Good Day", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b273994c319841a923465d62e271", duration: "4:20", listens: "294,738,472"},
  {title: "You Can Do It", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b27355af7e0cd246a50f8cd15194", duration: "3:54", listens: "186,473,829"},
  {title: "It's My Ego", artist: "Ice Cube", image: "https://i.scdn.co/image/ab67616d0000b27301768d3269f907b7962e57d9", duration: "4:07", listens: "94,728,563"},
  {title: "Fallin'", artist: "Alicia Keys", image: "https://i.scdn.co/image/ab67616d0000b27318b31906d928fe22eec5e673", duration: "3:30", listens: "647,382,951"},
  {title: "UNDERDOG", artist: "Alicia Keys", image: "https://i.scdn.co/image/ab67616d0000b273df9b70f870bb942ad900061d", duration: "3:11", listens: "284,759,384"},
  {title: "Titi Me Pregunto", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72", duration: "4:02", listens: "2,847,392,658"},
  {title: "DAKITI", artist: "Bad Bunny", image: "https://i.scdn.co/image/ab67616d00001e0234c8199b0b3b3fb42b8a98a8", duration: "3:25", listens: "3,194,728,563"},
  {title: "Selfless", artist: "The Strokes", image: "https://i.scdn.co/image/ab67616d0000b273bfa99afb5ef0d26d5064b23b", duration: "3:41", listens: "156,473,829"},
  {title: "WAKA WAKA", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b273752d2becbb91841a31c556b8", duration: "3:22", listens: "1,594,738,472"},
  {title: "HIPS DON'T LIE", artist: "Shakira", image: "https://i.scdn.co/image/ab67616d0000b273318395259d13702aa1b5e6a3", duration: "3:38", listens: "2,284,759,384"},
  {title: "Pay In Blood", artist: "Bob Dylan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfkb-iue0vqScTx2iRIM5lYmwY7iZq68A-w&s", duration: "5:09", listens: "47,392,658"},
  {title: "Most Of The Time", artist: "Bob Dylan", image: "https://i.scdn.co/image/ab67616d0000b2735954a6441cc1d88011841d1c", duration: "5:01", listens: "94,758,162"},
  {title: "THE WAY", artist: "Ariana Grande", image: "https://i.scdn.co/image/ab67616d0000b27363a765b4cb921a65a344f45d", duration: "3:46", listens: "1,284,759,384"},
  {title: "Break Free", artist: "Ariana Grande", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGaICAQqnxBxUEAX5r68S52pBDaCjJYliDg&s", duration: "3:34", listens: "1,847,392,658"},
  {title: "Hey Porter", artist: "Johnny Cash", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeyv1BMRqPa_DDZpc0O5wT23alOxOOFvhaQ&s", duration: "2:14", listens: "84,739,582"},
  {title: "Hurt", artist: "Johnny Cash", image: "https://i.scdn.co/image/ab67616d0000b2736f4f62da3d811b6501a69ffa", duration: "3:38", listens: "394,728,563"},
  {title: "Noid", artist: "Tyler The Creator", image: "https://i.scdn.co/image/ab67616d0000b273dc620428d6bbc305cd43c19b", duration: "4:44", listens: "647,382,951"},
  {title: "ONE LOVE", artist: "Bob Marley", image: "https://i.scdn.co/image/ab67616d0000b273ef4e05f6dff96e307b43ecd8", duration: "2:52", listens: "284,759,384"},
  {title: "Wasted Years", artist: "Iron Maiden", image: "https://i.scdn.co/image/ab67616d0000b2733bba790a6a10949ef45bfe2a", duration: "5:06", listens: "194,728,563"},
  {title: "Bella Ciao", artist: "Goran Bregović", image: "https://i.scdn.co/image/ab67616d0000b273d5855facf0c208c6ab59df73", duration: "3:28", listens: "156,473,829"},
  {title: "Around the World", artist: "Daft Punk", image: "https://i.scdn.co/image/ab67616d00001e0244d9e117d2a21880f06f57b7", duration: "7:09", listens: "847,392,658"}

];


const songsContainer = document.getElementById('songs');

function displaysongs(songsToDisplay = songs) { 
  // Clear the container first
  songsContainer.innerHTML = '';
     
  songsToDisplay.forEach(song => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url('${song.image}')`;
         
    card.innerHTML = `
      <h4>${song.title}</h4>
      <p>${song.artist}</p>
    `;
         
    card.addEventListener('click', function() {
      navigateToSong(song);
    });
         
    card.style.cursor = 'pointer';
    songsContainer.appendChild(card);
  });
}


function navigateToSong(song) {

  const encodedTitle = encodeURIComponent(song.title);
  const encodedArtist = encodeURIComponent(song.artist);

  window.location.href = `song.html?title=${encodedTitle}&artist=${encodedArtist}`;

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
    
    songsContainer.innerHTML = '';
    
    const selectedCard = document.createElement('div');
    selectedCard.className = 'card selected-song-card';
    selectedCard.style.backgroundImage = `url('${selectedSong.image}')`;
    
    selectedCard.innerHTML = `
        <h1 class="selectedsong">${selectedSong.title}</h1>
        <h3 class="selectedartist">Artist - ${selectedSong.artist}</h3>
        <h3 class="listens">Listens - ${selectedSong.listens}</h3>
        <h3 class="duration">${selectedSong.duration}</h3>
        <h3 class="year">Releases - ${selectedSong.releaseYear}</h3>
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
        
        // Fixed: Added parentheses around (song, index) parameters
        similarSongs.forEach((song, index) => {
            const similarCard = document.createElement('div');
            similarCard.className = 'card similar-artist-card';
            similarCard.style.backgroundImage = `url('${song.image}')`;
            
            similarCard.innerHTML = `
                <div class="song-number">${index + 1}</div>
                <h4 class="similar-song-title">${song.title}</h4>
                <p class="similar-song-duration">${song.duration}</p>
                <p class="similar-song-listens">${song.listens}</p>
            `;
            
            similarCard.addEventListener('click', function() {
                navigateToSong(song);
            });
            
            similarCard.style.cursor = 'pointer';
            songsContainer.appendChild(similarCard);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const songTitle = getUrlParameter('title');
    const songArtist = getUrlParameter('artist');
    
    if (songTitle && songArtist) {
        displaySelectedSong();
    } else {
        displaysongs();
    }
});

if (typeof songs === 'undefined') {
    console.error('Songs array is not defined. Make sure to include your songs data.');
}