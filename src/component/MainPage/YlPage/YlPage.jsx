import React from 'react'
import './YlPage.css'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setFullName, setISNoContract, setInn, setOgrn, setRegistrationDate, setSmallName } from '../../../redux/ylPage-reducer';
import { getYL } from '../../../asyncAction/test';
import { useNavigate } from 'react-router-dom';

const YlPage = () => {
    const dispatch = useDispatch();
    const fullName = useSelector(state => state.ylPage.fullName);
    const smalName = useSelector(state => state.ylPage.smalName);
    const inn = useSelector(state => state.ylPage.inn);
    const innScan = useSelector(state => state.ylPage.innScan);
    const registrationDate = useSelector(state => state.ylPage.registrationDate);
    const ogrn = useSelector(state => state.ylPage.ogrn);
    const ogrnScan = useSelector(state => state.ylPage.ogrnScan);
    const egripScan = useSelector(state => state.ylPage.egripScan);
    const contractRentScan = useSelector(state => state.ylPage.contractRentScan);
    const isNoContract = useSelector(state => state.ylPage.isNoContract);

    let onFullNameChange = (e) => {
        dispatch(setFullName(e.target.value));
    }

    let onSmalNameChange = (e) => {
        dispatch(setSmallName(e.target.value));
    }

    let onRegistrationDateChange = (e) => {
        dispatch(setRegistrationDate(e.target.value));
    }

    let onOgrnChange = (e) => {
        dispatch(setOgrn(e.target.value));
    }

    let onIsNoContratChange = () => {
        dispatch(setISNoContract(!isNoContract));
    }

    let onInnChange = (e) => {
        let newInn = e.target.value;
        dispatch(setInn(newInn));
        if (newInn.length === 10) {
            dispatch(getYL(newInn));
        }
    }

    const navigate = useNavigate();

    let onNavigate = () => {
        if (isValid() == true) {
            navigate('/bankDetails', {
                state: {
                    id: 7,
                    color: 'green'
                }
            });
        } else {
            alert("Не все поля заполнены");
        }
    }

    let isValid = () => {
        if (inn.length !== 10) {
            return false;
        }

        if (fullName.length === 0
            || smalName.length === 0
            || registrationDate.length === 0
            || ogrn.length === 0) {
            return false;
        }

        return true;
    }

    return (
        <div>
            <div className='yl-title'>Общество с ограниченной ответственностью (ООО)</div>

            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>Наименование полное*</div>
                    <input className='input-xl'
                        value={fullName}
                        onChange={onFullNameChange}
                        placeholder='ООО «Московская промышленная компания»' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Наименование сокращенное*</div>
                    <input className='input-lg'
                        value={smalName}
                        onChange={onSmalNameChange}
                        placeholder='ООО «МПК»' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Дата регистрации*</div>
                    <input className='input-sm'
                        value={registrationDate}
                        onChange={onRegistrationDateChange}
                        placeholder='дд.мм.гггг' />
                </div>
            </div>

            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>ИНН*</div>
                    <input className='input-sm'
                        value={inn}
                        required
                        onChange={onInnChange}
                        placeholder='хххххххххх' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Скан ИНН*</div>
                    <input className='input-lg'
                        value={innScan}
                        placeholder='Выберите или перетащите файл' />
                </div>

                <div className='input-container'>
                    <div className='input-titel'>ОГРН*</div>
                    <input className='input-sm'
                        value={ogrn}
                        onChange={onOgrnChange}
                        placeholder='ххххххххххххххх' />

                </div>
                <div className='input-container'>
                    <div className='input-titel'>Скан ОГРН*</div>
                    <input className='input-lg'
                        value={ogrnScan}
                        placeholder='Выберите или перетащите файл' />
                </div>
            </div>

            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>Скан выписки из ЕГРИП (не старше 3 месяцев)*</div>
                    <input className='input-lg'
                        value={egripScan}
                        placeholder='Выберите или перетащите файл' />
                </div>

                <div className='input-container'>
                    <div className='input-titel'>Скан договора аренды помещения (офиса)</div>
                    <input className='input-lg'
                        value={contractRentScan}
                        placeholder='Выберите или перетащите файл' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'> </div>
                    <div className='input-checkbox'>
                        <Form>
                            <Form.Check
                                className='checkbox'
                                type="checkbox"
                                id={`default-checkbox`}
                                label={`Нет договора`}
                                value={isNoContract}
                                onChange={onIsNoContratChange}
                            />
                        </Form>
                    </div>
                </div>
            </div>
            <div className='nav-btn-wrapper'>
                <Button className='nav-btn' onClick={onNavigate}>
                    Далее
                </Button>
            </div>
        </div>
    )
}

export default YlPage