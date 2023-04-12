import React from 'react'
import './YlPage.css'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setFullName, setInn, setSmallName } from '../../../redux/ylPage-reducer';
import { getYL } from '../../../asyncAction/test';

const YlPage = () => {
    const dispatch = useDispatch();
    const fullName = useSelector(state => state.ylPage.fullName);
    const smalName = useSelector(state => state.ylPage.smalName);
    const inn = useSelector(state => state.ylPage.inn);

    let onFullNameChange= (e) => {
        dispatch(setFullName(e.target.value));
    }

    let onSmalNameChange= (e) => {
        dispatch(setSmallName(e.target.value));
    }

    let onInnChange= (e) => {
        let newInn = e.target.value;
        dispatch(setInn(newInn));
        if(newInn.length === 10){
            dispatch(getYL(newInn));
        }
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
                        placeholder='дд.мм.гггг' />
                </div>
            </div>

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
                    <input className='input-lg'
                        placeholder='Выберите или перетащите файл' />
                </div>

                <div className='input-container'>
                    <div className='input-titel'>ОГРНИП*</div>
                    <input className='input-sm'
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
                            />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YlPage