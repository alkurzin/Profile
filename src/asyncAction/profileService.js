import axios from "axios"

export const addProfileFromData = (fullName, shortName, inn, innScan, registrationDate, ogrn, ogrnScan, egripScan, contractRentScan, isNoContract, bankDetails) => {
    var url = "https://localhost:44379/api/Profile";
    console.log(bankDetails);
    const form = new FormData();
    form.append("fullName", fullName);
    form.append("shortName", shortName);
    form.append("inn", inn);
    form.append("innScan", innScan);
    form.append("registrationDate", registrationDate);
    form.append("ogrn", ogrn);
    form.append("isNoContract", isNoContract);

    for (var i = 0; i < bankDetails.length; i++) {
        form.append(`bankDetails[][${i}][id]`, bankDetails[i].id);
        form.append(`bankDetails[][${i}][bik]`, bankDetails[i].bik);
        form.append(`bankDetails[][${i}][bankName]`, bankDetails[i].bankName);
        form.append(`bankDetails[][${i}][paymentAccount]`, bankDetails[i].paymentAccount);
        form.append(`bankDetails[][${i}][correspondentAccount]`, bankDetails[i].correspondentAccount);
    }

    var options = {
        method: 'post',
        url: url,
        data: form,
        headers: {
            'Content-Type': `multipart/form-data;`,
        },
    }

    return async () => {
        await axios(options)
    }
}