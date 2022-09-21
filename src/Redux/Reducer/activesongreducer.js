export const activeSongReducer = (state = "null" , action)=>{
    switch (action.type) {
        case "SET_ACTIVE_SONG":
            return action.payload;   
        default:
            return state;
    }
}

export const activeSongStatusReducer = (state = true , action)=>{
    switch (action.type) {
        case "SET_ACTIVE_SONG_STATUS":
            return action.payload;   
        default:
            return state;
    }
}