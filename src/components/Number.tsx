import React from 'react';

type NumberPropsType = {
    number: number
}

export const Number = (props: NumberPropsType) => {
    return <div>
        {props.number}
    </div>
}