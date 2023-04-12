import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import './MainPage.css'
import IpPage from './IpPage/IpPage';
import YlPage from './YlPage/YlPage';

const MainPage = () => {
    const [type, setType] = useState(1);
    
    let onPriorityChange = (e) => {
        let newType = e.target.value;
        setType(newType);
    }

    return (
        <div>
            <div className='title'>Форма собственности</div>
            <div className='type-activity'>Вид деятельности*</div>

            <Form.Select aria-label="Приоритет" className='select__type-activity' onChange={onPriorityChange}>
                <option value="1">Индивидуальный предприниматель (ИП)</option>
                <option value="2">Общество с ограниченной ответственностью (ООО)</option>
            </Form.Select>

            <div className='arrow' />

            {type === '1' ?
                <IpPage />
                :
                <YlPage />
            }
        </div>
    )
}

export default MainPage