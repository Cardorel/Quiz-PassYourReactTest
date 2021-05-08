import { FETCHDATA, FETCHCOUNTER , ISTIMEFINISHED , GETSCORE, CURRENTUSERDATA, FETCHDATABYEMAIL, ISLOADING} from "../Types";


export const fetchDataAction = question => dispatch => (
    dispatch({
        type: FETCHDATA,
        payload : question
    })
);

export const IsLoadingAction = question => dispatch => (
    dispatch({
        type: ISLOADING,
        payload : question
    })
)

export const fetchDataByEmailAction = user => dispatch => (
    dispatch({
        type: FETCHDATABYEMAIL,
        payload : user
    })
);

export const TimerAction = time => dispatch => (
    dispatch({
        type: FETCHCOUNTER,
        payload : time
    })
);

export const TimeFinishedAction = isfinished => dispatch =>(
    dispatch({
        type: ISTIMEFINISHED,
        payload : isfinished
    })
)

export const scoreAction = () => dispatch => (
    dispatch({
        type: GETSCORE
    })
);

export let currentUserAction = user => dispatch => (
    dispatch({
        type: CURRENTUSERDATA,
        payload : user
    })
);