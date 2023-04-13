import React, { useRef, useState } from 'react'
import './YlPage.css'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setContractRentScan, setEgripScan, setFullName, setISNoContract, setInn, setInnScan, setOgrn, setOgrnScan, setRegistrationDate, setShortName } from '../../../redux/ylPage-reducer';
import { useNavigate } from 'react-router-dom';
import { getYL } from '../../../asyncAction/dadataService';
import { Upload } from 'react-bootstrap-icons';

const YlPage = () => {
    const dispatch = useDispatch();
    const fullName = useSelector(state => state.ylPage.fullName);
    const shortName = useSelector(state => state.ylPage.shortName);
    const inn = useSelector(state => state.ylPage.inn);
    const innScan = useSelector(state => state.ylPage.innScan);
    const registrationDate = useSelector(state => state.ylPage.registrationDate);
    const ogrn = useSelector(state => state.ylPage.ogrn);
    const ogrnScan = useSelector(state => state.ylPage.ogrnScan);
    const egripScan = useSelector(state => state.ylPage.egripScan);
    const contractRentScan = useSelector(state => state.ylPage.contractRentScan);
    const isNoContract = useSelector(state => state.ylPage.isNoContract);

    const [innScanPlaceholder, setInnScanPlaceholder ] = useState("Выберите или перетащите файл");
    const [ogrnScanPlaceholder, setOgrnScanPlaceholder ] = useState("Выберите или перетащите файл");
    const [egripScanPlaceholder, setEgripScanPlaceholder ] = useState("Выберите или перетащите файл");
    const [contractRentScanPlaceholder, setContractRentScanPlaceholder ] = useState("Выберите или перетащите файл");

    const filePickerInnScan = useRef(null);
    const filePickerOgrnScan = useRef(null);
    const filePickerEgripScan = useRef(null);
    const filePickerContractRentScan = useRef(null);

    let onClikInnScan = () => {
        filePickerInnScan.current.click();
    }

    let onClikOgrnScan = () => {
        filePickerOgrnScan.current.click();
    }

    let onClikEgripScan = () => {
        filePickerEgripScan.current.click();
    }

    let onClikContractRentScan = () => {
        filePickerContractRentScan.current.click();
    }

    let onInnScanChange = (e) => {
        setInnScanPlaceholder(e.target.files[0].name)
        dispatch(setInnScan(e.target.files[0]));
    }

    let onOgrnScanChange = (e) => {
        setOgrnScanPlaceholder(e.target.files[0].name)
        dispatch(setOgrnScan(e.target.files[0]));
    }

    let onEgripScanChange = (e) => {
        setEgripScanPlaceholder(e.target.files[0].name)
        dispatch(setEgripScan(e.target.files[0]));
    }

    let onContractRentScanChange = (e) => {
        setContractRentScanPlaceholder(e.target.files[0].name)
        dispatch(setContractRentScan(e.target.files[0]));
    }

    let onFullNameChange = (e) => {
        dispatch(setFullName(e.target.value));
    }

    let onShortNameChange = (e) => {
        dispatch(setShortName(e.target.value));
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
        if (isValid() === true) {
            navigate('/bankDetails', {
                state: {
                    fullName: fullName,
                    shortName: shortName,
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
        } else {
            alert("Не все поля заполнены");
        }
    }

    let isValid = () => {
        if (inn.length !== 10) {
            return false;
        }

        if (fullName.length === 0
            || shortName.length === 0
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
                        value={shortName}
                        onChange={onShortNameChange}
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
                    <div onClick={onClikInnScan} className='input-lg input-uplpd'>
                        <div className='input-uplpd-placeholder'>{innScanPlaceholder}</div>
                        <div className='input-uplpd-icon'><Upload/></div>
                    </div>
                    <input className='hidden'
                        type="file"
                        ref={filePickerInnScan}
                        onChange={onInnScanChange}
                        accept='.png, .jpg, .jpeg, .pdf'/>
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
                    <div onClick={onClikOgrnScan} className='input-lg input-uplpd'>
                        <div className='input-uplpd-placeholder'>{ogrnScanPlaceholder}</div>
                        <div className='input-uplpd-icon'><Upload/></div>
                    </div>
                    <input className='hidden'
                        type="file"
                        ref={filePickerOgrnScan}
                        onChange={onOgrnScanChange}
                        accept='.png, .jpg, .jpeg, .pdf'/>
                </div>
            </div>

            <div className='input-row'>
            <div className='input-container'>
                    <div className='input-titel'>Скан выписки из ЕГРИП (не старше 3 месяцев)*</div>
                    <div onClick={onClikEgripScan} className='input-lg input-uplpd'>
                        <div className='input-uplpd-placeholder'>{egripScanPlaceholder}</div>
                        <div className='input-uplpd-icon'><Upload/></div>
                    </div>
                    <input className='hidden'
                        type="file"
                        ref={filePickerEgripScan}
                        onChange={onEgripScanChange}
                        accept='.png, .jpg, .jpeg, .pdf'/>
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Скан договора аренды помещения (офиса)</div>
                    <div onClick={onClikContractRentScan} className='input-lg input-uplpd'>
                        <div className='input-uplpd-placeholder'>{contractRentScanPlaceholder}</div>
                        <div className='input-uplpd-icon'><Upload/></div>
                    </div>
                    <input className='hidden'
                        type="file"
                        ref={filePickerContractRentScan}
                        onChange={onContractRentScanChange}
                        accept='.png, .jpg, .jpeg, .pdf'/>
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