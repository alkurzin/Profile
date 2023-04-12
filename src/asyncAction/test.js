import axios from "axios";
import { setFullName, setOgrn, setRegistrationDate, setSmallName } from "../redux/ylPage-reducer";
import { setBankName, setCorrespondentAccount } from "../redux/bankDetails-reducer";

var token = "eed0d49b898c2f92d37de7a21a4678bd3bc3f4fd";

export const getYL = (inn) => {
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";

    var options = {
        method: "POST",
        url: url,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        data: {
            query: inn
        }
    }

    return async dispatch => {
        await axios(options)
        .then(result => {
            dispatch(setFullName(result.data.suggestions[0].data.name.full_with_opf));
            dispatch(setSmallName(result.data.suggestions[0].data.name.short_with_opf));
            let registrationDate = new Date(result.data.suggestions[0].data.state.registration_date);
            dispatch(setRegistrationDate(registrationDate.toLocaleDateString()));
            dispatch(setOgrn(result.data.suggestions[0].data.ogrn));
        });
    }
}

export const getBank = (bik) => {
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/bank";
    
    var options = {
        method: "POST",
        url: url,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        data: {
            query: bik
        }
    }

    return async dispatch => {
        await axios(options)
        .then(result => {
            dispatch(setBankName(result.data.suggestions[0].data.name.payment));
            dispatch(setCorrespondentAccount(result.data.suggestions[0].data.correspondent_account))
        });
    }
}