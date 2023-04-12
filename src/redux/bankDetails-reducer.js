const SET_BIK = "SET_BIK";
const SET_BANK_NAME = "SET_BANK_NAME";
const SET_PAYMENT_ACCOUNT = "SET_PAYMENT_ACCOUNT";
const SET_CORRESPONDENT_ACCOUNT = "SET_CORRESPONDENT_ACCOUNT";


let initialState = {
    bik: "",
    bankName: "",
    paymentAccount: "",
    correspondentAccount: ""
}

const bankDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BIK:
            return {
                ...state,
                bik: action.bik
            }
        case SET_BANK_NAME:
            return {
                ...state,
                bankName: action.bankName
            }
        case SET_PAYMENT_ACCOUNT:
            return {
                ...state,
                paymentAccount: action.paymentAccount
            }
        case SET_CORRESPONDENT_ACCOUNT:
            return {
                ...state,
                correspondentAccount: action.correspondentAccount
            }
        default:
            return state;
    }
}

export const setBik = (bik) => {
    return {
        type: SET_BIK,
        bik: bik
    };
}

export const setBankName = (bankName) => {
    return {
        type: SET_BANK_NAME,
        bankName: bankName
    };
}

export const setPaymentAccount = (paymentAccount) => {
    return {
        type: SET_PAYMENT_ACCOUNT,
        paymentAccount: paymentAccount
    };
}

export const setCorrespondentAccount = (correspondentAccount) => {
    return {
        type: SET_CORRESPONDENT_ACCOUNT,
        correspondentAccount: correspondentAccount
    };
}

export default bankDetailsReducer;
