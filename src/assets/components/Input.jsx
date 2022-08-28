import React, { useState } from "react";
import '../style-sheets/Input.css'
import Btn from './Btn'


const Input = (props) => {

return (
    <input
    onChange={(e) => props.setPassword(e.target.value)}
    type='password'
    placeholder='...'
    name='password'
    className= 'w-64 appearance-none rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
    />
    )
}

export default Input;