const SET_BANK_DETAILS = "SET_BANK_DETAILS";
const SET_BIK = "SET_BIK";
const SET_BANK_NAME = "SET_BANK_NAME";
const SET_PAYMENT_ACCOUNT = "SET_PAYMENT_ACCOUNT";
const SET_CORRESPONDENT_ACCOUNT = "SET_CORRESPONDENT_ACCOUNT";

let initialState = {
    bankDetails: [{
        id: 0,
        bik: "",
        bankName: "",
        paymentAccount: "",
        correspondentAccount: ""
    }]
}

const bankDetailsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BANK_DETAILS:
            return {
                ...state,
                bankDetails: [...state.bankDetails, action.bankDetails]
            }
        case SET_BIK:
            return {
                ...state,
                bankDetails: state.bankDetails.map(
                    (bankDetail, i) => i === action.id ? { ...bankDetail, bik: action.bik }
                        : bankDetail
                )
            }
        case SET_BANK_NAME:
            return {
                ...state,
                bankDetails: state.bankDetails.map(
                    (bankDetail, i) => i === action.id ? { ...bankDetail, bankName: action.bankName }
                        : bankDetail
                )
            }
        case SET_PAYMENT_ACCOUNT:
            return {
                ...state,
                bankDetails: state.bankDetails.map(
                    (bankDetail, i) => i === action.id ? { ...bankDetail, paymentAccount: action.paymentAccount }
                        : bankDetail
                )
            }
        case SET_CORRESPONDENT_ACCOUNT:
            return {
                ...state,
                bankDetails: state.bankDetails.map(
                    (bankDetail, i) => i === action.id ? { ...bankDetail, correspondentAccount: action.correspondentAccount }
                        : bankDetail
                )
            }
        default:
            return state;
    }
}

export const setBankDetails = (bankDetails) => {
    return {
        type: SET_BANK_DETAILS,
        bankDetails: bankDetails
    };
}

export const setBik = (id, bik) => {
    return {
        type: SET_BIK,
        id: id,
        bik: bik
    };
}

export const setBankName = (id, bankName) => {
    return {
        type: SET_BANK_NAME,
        id: id,
        bankName: bankName
    };
}

export const setPaymentAccount = (id, paymentAccount) => {
    return {
        type: SET_PAYMENT_ACCOUNT,
        id: id,
        paymentAccount: paymentAccount
    };
}

export const setCorrespondentAccount = (id, correspondentAccount) => {
    return {
        type: SET_CORRESPONDENT_ACCOUNT,
        id: id,
        correspondentAccount: correspondentAccount
    };
}

export default bankDetailsPageReducer;
