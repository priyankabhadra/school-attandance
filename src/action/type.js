export const GET_DATA = "GET_DATA";

export const getData = (data) => dispatch => {
    return dispatch (
        {
            type:"GET_DATA",
            payload: data 
        }
    )
}