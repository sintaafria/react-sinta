import React from 'react';
import CalComp from './CalculatorComp/CalComp';


export default function Komponen() {
    return(
        <div>
            <h1>Silahkan masukkan angka dan tekan tombol operasi</h1>
            <CalComp operator="+"/>
            <br />
            <CalComp operator="-"/>
            <br />
            <CalComp operator="x"/>
            <br />
            <CalComp operator="/"/>
        </div>
    )
}