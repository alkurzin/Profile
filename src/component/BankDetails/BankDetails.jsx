import React from 'react'
import { useLocation } from 'react-router-dom';
import './BankDetails.css'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { InfoCircleFill, PlusLg } from 'react-bootstrap-icons';

const BankDetails = (props) => {
    console.log(props);
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <div className='bank-details-title'>Банковские реквизиты</div>

            <div className='input-row'>
                <div className='input-container'>
                    <div className='input-titel'>БИК*</div>
                    <input className='input-sm'
                        placeholder='хххххххххх' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Наименование полное*</div>
                    <input className='input-xl'
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
                        placeholder='хххххххххххххххххххх' />
                </div>
                <div className='input-container'>
                    <div className='input-titel'>Корреспондентский счет*</div>
                    <input className='input-lg'
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
                                    Автоматическое заполнение названия филиала банка по БИК
                                </Popover>
                            }
                        >
                            <InfoCircleFill className='info' />
                        </OverlayTrigger>
                    </div>
                </div>
            </div>

            <button variant="outline-primary" className="btn-new-details"><PlusLg className='plus'/> <div>Добавить еще один банк</div></button>
        </div>
    )
}

export default BankDetails