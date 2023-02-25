export const ROCK_ARTIST_LIST = "ARTIST_LIST";
export const POP_ARTIST_LIST = "POP_ARTIST_LIST";
export const HIP_HOP_ARTIST_LIST = "HIP_HOP_ARTIST_LIST";
export const SEARCH_ON = "SEARCH_ON";

// LISTE DELLE FETCH NELLO STATO
// LISTE ROCK
export const ROCK_ARTIST_FETCH1 = "ROCK_ARTIST_FETCH1";
export const ROCK_ARTIST_FETCH2 = "ROCK_ARTIST_FETCH2";
export const ROCK_ARTIST_FETCH3 = "ROCK_ARTIST_FETCH3";
export const ROCK_ARTIST_FETCH4 = "ROCK_ARTIST_FETCH4";

// LISTE POP
export const POP_ARTIST_FETCH1 = "POP_ARTIST_FETCH1";
export const POP_ARTIST_FETCH2 = "POP_ARTIST_FETCH2";
export const POP_ARTIST_FETCH3 = "POP_ARTIST_FETCH3";
export const POP_ARTIST_FETCH4 = "POP_ARTIST_FETCH4";

// LISTE HIP HO
export const HIP_HOP_ARTIST_FETCH1 = "HIP_HOP_ARTIST_FETCH1";
export const HIP_HOP_ARTIST_FETCH2 = "HIP_HOP_ARTIST_FETCH2";
export const HIP_HOP_ARTIST_FETCH3 = "HIP_HOP_ARTIST_FETCH3";
export const HIP_HOP_ARTIST_FETCH4 = "HIP_HOP_ARTIST_FETCH4";

// LISTE ARTISTI
export const artistListAction = (artistList) => {
  return { type: ROCK_ARTIST_LIST, payload: artistList };
};
export const popArtistListAction = (artistList) => {
  return { type: POP_ARTIST_LIST, payload: artistList };
};
export const hipHopArtistListAction = (artistList) => {
  return { type: HIP_HOP_ARTIST_LIST, payload: artistList };
};

// ACTION PER I DISPATCH NELLA FETCH
// ACTIONS ROCK
export const artistRockFetchAction1 = (artistList) => {
  return { type: ROCK_ARTIST_FETCH1, payload: artistList };
};
export const artistRockFetchAction2 = (artistList) => {
  return { type: ROCK_ARTIST_FETCH2, payload: artistList };
};
export const artistRockFetchAction3 = (artistList) => {
  return { type: ROCK_ARTIST_FETCH3, payload: artistList };
};
export const artistRockFetchAction4 = (artistList) => {
  return { type: ROCK_ARTIST_FETCH4, payload: artistList };
};

// ACTIONS POP
export const artistPopFetchAction1 = (artistList) => {
  return { type: POP_ARTIST_FETCH1, payload: artistList };
};
export const artistPopFetchAction2 = (artistList) => {
  return { type: POP_ARTIST_FETCH2, payload: artistList };
};
export const artistPopFetchAction3 = (artistList) => {
  return { type: POP_ARTIST_FETCH3, payload: artistList };
};
export const artistPopFetchAction4 = (artistList) => {
  return { type: POP_ARTIST_FETCH4, payload: artistList };
};

// ACTIONS HIP HOP
export const artisthipHopFetchAction1 = (artistList) => {
  return { type: HIP_HOP_ARTIST_FETCH1, payload: artistList };
};
export const artisthipHopFetchAction2 = (artistList) => {
  return { type: HIP_HOP_ARTIST_FETCH2, payload: artistList };
};
export const artisthipHopFetchAction3 = (artistList) => {
  return { type: HIP_HOP_ARTIST_FETCH3, payload: artistList };
};
export const artisthipHopFetchAction4 = (artistList) => {
  return { type: HIP_HOP_ARTIST_FETCH4, payload: artistList };
};

// FETCH

export const artistFetchFunctionAction = (artist, genreFetch) => {
  return async (dispatch, getState) => {
    // dispatch({
    //   type: "LOADING_ON",
    // });
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
    );
    if (response.ok) {
      let data = await response.json();
      dispatch(genreFetch(data));
    }
    dispatch({
      type: "LOADING_OFF",
    });
  };
};
