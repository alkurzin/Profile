import React from 'react'
import './IpPage.css'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const IpPage = () => {
    const navigate = useNavigate();

    let onNavigate = () => {
        navigate('/bankDetails', { 
            state: {
                id: 7,
                color: 'green' 
            }
        });
    }
    
    return (
        <div>
            <div className='ip-title'>Индивидуальный предприниматель (ИП)</div>

            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>ИНН*</div>
                    <input className='input-sm'
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
                    <div className='input-titel'>Дата регистрации*</div>
                    <input className='input-sm'
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