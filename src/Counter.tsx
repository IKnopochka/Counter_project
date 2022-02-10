import React, {useState} from 'react';
import {Button} from './components/Button';
import {Number} from "./components/Number";
import './App.css'

export function Counter() {

    const [counter, setCounter] = useState(0)

    const Increase = () => {
        let count = counter + 1;
        if (count < 6) {
            setCounter(count)
        }
    }

    const Reset = () => {
        setCounter(0)
    }

    const Style = {
        fontSize: counter === 5 ? "1.4em" : "",
        color: counter === 5 ? "red" : ""
    }

    return (
        <div className={"counterTable"}>
            <div className={'counter'} style={Style}>
                <Number number={counter}/>
            </div>
            <div className={'buttons'}>
                <Button name={"inc"} action={Increase} counter={counter} disableNumber={5}/>
                <Button name={"reset"} action={Reset} counter={counter} disableNumber={0}/>
            </div>
        </div>
    );
}

