
import {combineReducers} from 'redux';
const songsReducer = () => {
  return [
    { title: "Baby", duration: "4:30" },
    { title: "Sorry", duration: "3:45" },
    { title: "Girlfriend", duration: "4:15" },
    { title: "Lean on", duration: "5:35" },
    { title: "Swalla", duration: "4:20" },
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};


export default combineReducers({
    songs: songsReducer,
    selectedSong:SelectedSongReducer

});