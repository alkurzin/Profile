const SET_FULL_NAME = "SET_FULL_NAME";
const SET_SHORT_NAME = "SET_SHORT_NAME";
const SET_INN = "SET_INN";
const SET_INN_SCAN = "SET_INN_SCAN";
const SET_REGISTRATION_DATE = "SET_REGISTRATION_DATE";
const SET_OGRN = "SET_OGRN";
const SET_OGRN_SCAN = "SET_OGRN_SCAN";
const SET_EGRIP_SCAN = "SET_EGRIP_SCAN";
const SET_CONTRACT_RENT_SCAN = "SET_CONTRACT_RENT_SCAN";
const SET_IS_NO_CONTRACT = "SET_IS_NO_CONTRACT";


let initialState = {
    fullName: "",
    shortName: "",
    inn: "",
    innScan: "",
    registrationDate: "",
    ogrn: "",
    ogrnScan: "",
    egripScan: "",
    contractRentScan: "",
    isNoContract: false
}

const ylPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FULL_NAME:
            return {
                ...state,
                fullName: action.fullName
            }
        case SET_SHORT_NAME:
            return {
                ...state,
                shortName: action.shortName
            }
        case SET_INN:
            return {
                ...state,
                inn: action.inn
            }
        case SET_INN_SCAN:
            return {
                ...state,
                innScan: action.innScan
            }
        case SET_REGISTRATION_DATE:
            return {
                ...state,
                registrationDate: action.registrationDate
            }
        case SET_OGRN:
            return {
                ...state,
                ogrn: action.ogrn
            }
        case SET_OGRN_SCAN:
            return {
                ...state,
                ogrnScan: action.ogrnScan
            }
        case SET_EGRIP_SCAN:
            return {
                ...state,
                egripScan: action.egripScan
            }
        case SET_CONTRACT_RENT_SCAN:
            return {
                ...state,
                contractRentScan: action.contractRentScan
            }
        case SET_IS_NO_CONTRACT:
            return {
                ...state,
                isNoContract: action.isNoContract
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

export const setShortName = (shortName) => {
    return {
        type: SET_SHORT_NAME,
        shortName: shortName
    };
}

export const setInn = (inn) => {
    return {
        type: SET_INN,
        inn: inn
    };
}

export const setInnScan = (innScan) => {
    return {
        type: SET_INN_SCAN,
        innScan: innScan
    };
}

export const setRegistrationDate = (registrationDate) => {
    return {
        type: SET_REGISTRATION_DATE,
        registrationDate: registrationDate
    };
}

export const setOgrn = (ogrn) => {
    return {
        type: SET_OGRN,
        ogrn: ogrn
    };
}

export const setOgrnScan = (ogrnScan) => {
    return {
        type: SET_OGRN_SCAN,
        ogrnScan: ogrnScan
    };
}

export const setEgripScan = (egripScan) => {
    return {
        type: SET_EGRIP_SCAN,
        egripScan: egripScan
    };
}

export const setContractRentScan = (contractRentScan) => {
    return {
        type: SET_CONTRACT_RENT_SCAN,
        contractRentScan: contractRentScan
    };
}

export const setISNoContract = (isNoContract) => {
    return {
        type: SET_IS_NO_CONTRACT,
        isNoContract: isNoContract
    };
}

export default ylPageReducer;
