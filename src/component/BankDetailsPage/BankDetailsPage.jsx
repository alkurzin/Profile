import React, { useState } from 'react'
import BankDetails from '../BankDetails/BankDetails'
import { useDispatch, useSelector } from 'react-redux';
import { PlusLg } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { setBankDetails } from '../../redux/bankDetailsPage-reducer';
import { addProfileFromData } from '../../asyncAction/profileService';
import { useLocation } from 'react-router-dom';


const BankDetailsPage = () => {
  let location = useLocation();
  console.log(location.state);
  const dispatch = useDispatch();
  const [id, setId] = useState(1)
  const bankDetails = useSelector(state => state.bankDetailsPage.bankDetails);

  console.log(bankDetails);

  let addBankDetail = () => {
    dispatch(setBankDetails({
      id: id,
      bik: "",
      bankName: "",
      paymentAccount: "",
      correspondentAccount: ""
    }));
    setId(id + 1);
  }

  let sendProfile = () => {
    bankDetails.map(b => b.id = 0);
    dispatch(addProfileFromData(location.state.fullName,
      location.state.shortName,
      location.state.inn,
      location.state.innScan,
      location.state.registrationDate,
      location.state.ogrn,
      location.state.ogrnScan,
      location.state.egripScan,
      location.state.contractRentScan,
      location.state.isNoContract,
      bankDetails));
  }

  return (
    <div>
      <div className='bank-details-title'>Банковские реквизиты</div>

      {bankDetails.map(b => <div key={b.id}>{<BankDetails id={b.id} />}</div>)}
      <div className='bank-details-btn-wrapper'>
        <button variant="outline-primary" className="btn-new-details" onClick={addBankDetail}><PlusLg className='plus' /> <div>Добавить еще один банк</div></button>

        <Button className='bank-details-btn' onClick={sendProfile}>
          Отправить
        </Button>
      </div>
    </div>
  )
}

export default BankDetailsPage