/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  return songs.sort((a,b) => a.runtimeInSeconds - b.runtimeInSeconds) //compares 
  //song => song.runtimeInSeconds < 240) 

}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  return songs.sort((a,b) => {
    let artistA = a.artist.toUpperCase() // both a and b will be evaluated by uppercase values
    let artistB = b.artist.toUpperCase()

    return artistA > artistB ? -1 : artistA < artistB ? 1 : 0
  })
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  return songs.sort((a,b) => {
    let titleA = a.title.toUpperCase() // both a and b will be evaluated by uppercase values
    let titleB = b.title.toUpperCase()

    return titleA > titleB ? 1 : titleA < titleB ? -1 : 0
  })
  } 


module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
