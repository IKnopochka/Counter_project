import React from 'react';
import '../App.css'

type ButtonPropsType = {
    name: string
    action: () => void
    counter: number
    disableNumber: 0 | 5
}

export const Button = (props: ButtonPropsType) => {
    return <button className={'button'} onClick={props.action} disabled={props.disableNumber === props.counter}>{props.name}</button>
}