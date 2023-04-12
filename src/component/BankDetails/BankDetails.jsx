import React from 'react'
import { useLocation } from 'react-router-dom';
import './BankDetails.css'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { InfoCircleFill, PlusLg } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setBankName, setBik, setCorrespondentAccount, setPaymentAccount } from '../../redux/bankDetails-reducer';
import { getBank } from '../../asyncAction/test';

const BankDetails = (props) => {
    let location = useLocation();

    const dispatch = useDispatch();
    const bik = useSelector(state => state.bankDetailsPage.bik);
    const bankName = useSelector(state => state.bankDetailsPage.bankName);
    const paymentAccount = useSelector(state => state.bankDetailsPage.paymentAccount);
    const correspondentAccount = useSelector(state => state.bankDetailsPage.correspondentAccount);


    let onBikChange = (e) => {
        let newBik = e.target.value;
        dispatch(setBik(newBik));
        if (newBik.length === 9) {
            dispatch(getBank(newBik));
        }
    }

    let onBankNameChange = (e) => {
        dispatch(setBankName(e.target.value));
    }

    let onPaymentAccountChange = (e) => {
        dispatch(setPaymentAccount(e.target.value));
    }

    let onCorrespondentAccountChange = (e) => {
        dispatch(setCorrespondentAccount(e.target.value));
    }

    return (
        <div>
            <div className='bank-details-title'>Банковские реквизиты</div>

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

            <div className='bank-details-btn-wrapper'>
                <button variant="outline-primary" className="btn-new-details"><PlusLg className='plus' /> <div>Добавить еще один банк</div></button>

                <Button className='bank-details-btn'>
                    Отправить
                </Button>
            </div>
        </div>
    )
}

export default BankDetails