var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
var token = "eed0d49b898c2f92d37de7a21a4678bd3bc3f4fd";

export const getYL = (inn) => {
    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({ query: inn })
    }

    fetch(url, options)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
}
