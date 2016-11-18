/*jshint esversion: 6 */

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


songs.push("I Want You Back - by The Jackson 5 on the album Anthology: Jackson 5");

// console.log("song 5", songs[5]);

songs.unshift("Lebanese Blonde - by Thievery Corporation on the album The Mirror Conspiracy");

// console.log("song to front", songs[0]);

let numSongs = songs.length;
console.log("numSongs", numSongs);

for (let i = 0; i < numSongs; i++) {

	let newSong = songs[i].replace(/>/g, "-").replace(/[&\/\\#,+()$~%.'":*?<>{}@]/g, '');
	songs[i] = newSong;
console.log("new Song", newSong);
}

console.log("songs", songs);