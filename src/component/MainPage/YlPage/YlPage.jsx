import React from 'react'
import './YlPage.css'
import { Form } from 'react-bootstrap'

const YlPage = () => {
    return (
        <div>
            <div className='yl-title'>Общество с ограниченной ответственностью (ООО)</div>
           
            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>Наименование полное*</div>
                    <input className='input-xl'
                        placeholder='ООО «Московская промышленная компания»' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Наименование сокращенное*</div>
                    <input className='input-lg'
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