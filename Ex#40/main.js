"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// define the make album function:
function make_album(artist_name, albumtittle, tracks) {
    let album = {
        artist: artist_name,
        tittle: albumtittle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating 3 variables with different values;
let album1 = make_album("tahira", "Album tittle 1");
let album2 = make_album("rabia", "album tittle 2");
// calling a make_album function with 3rd parameter;
let album3 = make_album("Dua", "album tittle 3", 10);
// print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
