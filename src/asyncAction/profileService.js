import request from "../requests/request"

export const addProfile = (fullName, shortName, inn, innScan, registrationDate, ogrn, ogrnScan, egripScan, contractRentScan, isNoContract, bankDetails) => {
    return async () => {
        await request.post('/Profile', {
            fullName: fullName,
            shortName: shortName,
            inn: inn,
            //innScan: innScan,
            registrationDate: registrationDate,
            ogrn: ogrn,
            //ogrnScan: ogrnScan,
           // egripScan: egripScan,
            //contractRentScan: contractRentScan,
            isNoContract: isNoContract,
            bankDetails: bankDetails
        })
    }
}