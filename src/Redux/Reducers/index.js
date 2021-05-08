import {
  FETCHDATA,
  FETCHCOUNTER,
  ISTIMEFINISHED,
  GETSCORE,
  CURRENTUSERDATA,
  FETCHDATABYEMAIL,
  ISLOADING,
} from "../Types";

export const fetchDataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHDATA:
      return action.payload;
    default:
      return state;
  }
};


export const fetchDataByEmailReducer = (state = {} , action) => {
  switch (action.type) {
    case FETCHDATABYEMAIL:
      return action.payload;
    default:
      return state;
  }
};

export const TimerReducer = (state = "20 : 00", action) => {
  switch (action.type) {
    case FETCHCOUNTER:
      return action.payload;
    default:
      return state;
  }
};

export const TimeFinishedReducer = (state = false, action) => {
  switch (action.type) {
    case ISTIMEFINISHED:
      return action.payload;
    default:
      return state;
  }
};

export const IsLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case ISLOADING:
      return action.payload;
    default:
      return state;
  }
};

export const ScoreReducer = (state = 0, action) => {
  switch (action.type) {
    case GETSCORE:
      return state + 1;
    default:
      return state;
  }
};


export const currentUserReducer = (state = null , action) => {
    switch (action.type) {
        case CURRENTUSERDATA:
          return action.payload;
        default:
          return state;
      }
}

