import {GET_DATA} from '../action/type';

const initialState = {
    value: {
        name: "",
        fname: "",
        mname: "",
        mobno: {},
        attandance: "no"
    },
}

export default function(state= initialState, action) {
    switch(action.type) {
        case GET_DATA : {
            return {
                ...state,
                value : action.payload
            }
        }

        default : {
            return {
                ...state
            }
        } 
    }
}