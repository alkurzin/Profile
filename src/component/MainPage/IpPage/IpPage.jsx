import React, { useRef, useState } from 'react'
import './IpPage.css'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setISNoContract, setInn, setInnScan, setOgrn, setRegistrationDate } from '../../../redux/ipPage-reducer';
import { Upload } from 'react-bootstrap-icons';

const IpPage = () => {
    const dispatch = useDispatch();
    const inn = useSelector(state => state.ipPage.inn);
    const innScan = useSelector(state => state.ipPage.innScan);
    const registrationDate = useSelector(state => state.ipPage.registrationDate);
    const ogrn = useSelector(state => state.ipPage.ogrn);
    const ogrnScan = useSelector(state => state.ipPage.ogrnScan);
    const egripScan = useSelector(state => state.ipPage.egripScan);
    const contractRentScan = useSelector(state => state.ipPage.contractRentScan);
    const isNoContract = useSelector(state => state.ipPage.isNoContract);

    const [innScanPlaceholder, setInnScanPlaceholder ] = useState("Выберите или перетащите файл");

    const filePickerInnScan = useRef(null);
    let onInnScanChange = (e) => {
        setInnScanPlaceholder(e.target.files[0].name)
        dispatch(setInnScan(e.target.files[0]));
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
        dispatch(setInn(e.target.value));
    }

    const navigate = useNavigate();

    let onNavigate = () => {
        navigate('/bankDetails', {
            state: {
                fullName: "",
                shortName: "",
                inn: inn,
                innScan: innScan,
                registrationDate: registrationDate,
                ogrn: ogrn,
                ogrnScan: ogrnScan,
                egripScan: egripScan,
                contractRentScan: contractRentScan,
                isNoContract: isNoContract,
            }
        });
    }

    let onClikInnScan = () => {
        filePickerInnScan.current.click();
    }

    return (
        <div>
            <div className='ip-title'>Индивидуальный предприниматель (ИП)</div>

            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>ИНН*</div>
                    <input className='input-sm'
                        value={inn}
                        onChange={onInnChange}
                        placeholder='хххххххххх' />
                </div>

                <div className='input-container'>
                    <div className='input-titel'>Скан ИНН*</div>
                    <div onClick={onClikInnScan} className='input-lg input-uplpd'>
                        <div className='input-uplpd-placeholder'>{innScanPlaceholder}</div>
                        <div className='input-uplpd-icon'><Upload/></div>
                    </div>
                    <input className='hidden'
                        type="file"
                        ref={filePickerInnScan}
                        //value={innScan}
                        onChange={onInnScanChange}
                        accept='.png, .jpg, .jpeg, .pdf'/>
                </div>

                <div className='input-container'>
                    <div className='input-titel'>ОГРНИП*</div>
                    <input className='input-sm'
                        value={ogrn}
                        onChange={onOgrnChange}
                        placeholder='ххххххххххххххх' />

                </div>
                <div className='input-container'>
                    <div className='input-titel'>Скан ОГРНИП*</div>
                    <input className='input-lg'
                        placeholder='Выберите или перетащите файл' />
                </div>
            </div>
            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>Дата регистрации*</div>
                    <input className='input-sm'
                        value={registrationDate}
                        onChange={onRegistrationDateChange}
                        placeholder='дд.мм.гггг' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Скан выписки из ЕГРИП (не старше 3 месяцев)*</div>
                    <input className='input-lg'
                        placeholder='Выберите или перетащите файл' />
                </div>

                <div className='input-container'>
                    <div className='input-titel'>Скан договора аренды помещения (офиса)</div>
                    <input className='input-lg'
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

export default IpPage