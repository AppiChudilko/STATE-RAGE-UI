import React from 'react'
import './css/inputnumber.css'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import { useState } from 'react';
import { useEffect } from 'react';


const InputNumber = ({ number, setNumber }) => {
    


    return (
        <div className="calls__inputnumber">
            <input
                type="text"
                className="calls__inputnumber__number"
                placeholder="Введите номер"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <div onClick={() => setNumber(number.slice(0, -1))}>
                <MaterialIcon icon="backspace" size={20} color="rgba(0, 0, 0, 0.38)" />
            </div>
        </div>
    )
}

export default InputNumber