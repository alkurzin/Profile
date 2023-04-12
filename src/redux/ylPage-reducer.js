const SET_FULL_NAME = "SET_FULL_NAME";
const SET_SMAL_NAME = "SET_SMAL_NAME";
const SET_INN = "SET_INN";

let initialState = {
    fullName: "",
    smalName: "",
    inn: ""
}

const ylPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FULL_NAME:
            return {
                ...state,
                fullName: action.fullName
            }
        case SET_SMAL_NAME:
            return {
                ...state,
                smalName: action.smalName
            }
        case SET_INN:
            return {
                ...state,
                inn: action.inn
            }
        default:
            return state;
    }
}

export const setFullName = (fullName) => {
    return {
        type: SET_FULL_NAME,
        fullName: fullName
    };
}

export const setSmallName = (smalName) => {
    return {
        type: SET_SMAL_NAME,
        smalName: smalName
    };
}

export const setInn= (inn) => {
    return {
        type: SET_INN,
        inn: inn
    };
}

export default ylPageReducer;
