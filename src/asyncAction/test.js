import axios from "axios";
import { setFullName, setSmallName } from "../redux/ylPage-reducer";

var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
var token = "eed0d49b898c2f92d37de7a21a4678bd3bc3f4fd";

export const getYL = (inn) => {
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
        .then(result => dispatch(setFullName(result.data.suggestions[0].data.name.full_with_opf)))
        .then(result => console.log(result))
        .then(result => dispatch(setSmallName(result.data.suggestions[0].data.name.short_with_opf)))
        .catch(error => console.log("error", error));
    }
}