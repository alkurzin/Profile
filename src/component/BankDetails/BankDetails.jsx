import React from 'react'
import './BankDetails.css'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { InfoCircleFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getBank } from '../../asyncAction/dadataService';
import { setBankName, setBik, setCorrespondentAccount, setPaymentAccount } from '../../redux/bankDetailsPage-reducer';

const BankDetails = (props) => {
    const dispatch = useDispatch();
    const bankDetails = useSelector(state => state.bankDetailsPage.bankDetails[props.id]);

    const bik = bankDetails.bik;
    const bankName = bankDetails.bankName;
    const paymentAccount = bankDetails.paymentAccount;
    const correspondentAccount = bankDetails.correspondentAccount;


    let onBikChange = (e) => {
        let newBik = e.target.value;
        dispatch(setBik(props.id, newBik));
        if (newBik.length === 9) {
            dispatch(getBank(props.id, newBik));
        }
    }

    let onBankNameChange = (e) => {
        dispatch(setBankName(props.id, e.target.value));
    }

    let onPaymentAccountChange = (e) => {
        dispatch(setPaymentAccount(props.id, e.target.value));
    }

    let onCorrespondentAccountChange = (e) => {
        dispatch(setCorrespondentAccount(props.id, e.target.value));
    }

    return (
        <div>
            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>БИК*</div>
                    <input className='input-sm'
                        value={bik}
                        onChange={onBikChange}
                        placeholder='хххххххххх' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Наименование полное*</div>
                    <input className='input-xl'
                        value={bankName}
                        onChange={onBankNameChange}
                        placeholder='ООО «Московская промышленная компания»' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'> </div>
                    <div className='info-wrapper'>
                        <OverlayTrigger
                            key="top"
                            placement="top"
                            overlay={
                                <Popover className='tooltip'>
                                    Автоматическое заполнение названия филиала банка по БИК
                                </Popover>
                            }
                        >
                            <InfoCircleFill className='info' />
                        </OverlayTrigger>
                    </div>
                </div>
            </div>

            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>Рассчетный счет*</div>
                    <input className='input-m'
                        value={paymentAccount}
                        onChange={onPaymentAccountChange}
                        placeholder='хххххххххххххххххххх' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Корреспондентский счет*</div>
                    <input className='input-lg'
                        value={correspondentAccount}
                        onChange={onCorrespondentAccountChange}
                        placeholder='хххххххххххххххххххх' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'> </div>
                    <div className='info-wrapper'>
                        <OverlayTrigger
                            key="top"
                            placement="top"
                            overlay={
                                <Popover className='tooltip'>
                                    Автоматическое заполнение корреспондентского счета по БИК
                                </Popover>
                            }
                        >
                            <InfoCircleFill className='info' />
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankDetails