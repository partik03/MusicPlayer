export const setAllSongs=(songs)=>{
  return{
    type:"SET_SONGS",payload:songs
  }
  }
export const setActiveSong=(song)=>{
  return{
    type:"SET_ACTIVE_SONG",payload:song
  }
  }

  export const setActiveSongStatus=(status)=>{
    return{
      type:"SET_ACTIVE_SONG_STATUS",payload:status
    }
  }