import {Sparklines, SparklinesLine,SparklinesReferenceLine} from "react-sparklines";
import React from "react";
import _ from 'lodash';

function average(data){
return _.round(_.sum(data)/data.length)
}


export default (props) => {
    let randomColor = require('randomcolor'); // import the script
    let color = randomColor();
    return (
        <div>
            <Sparklines height={props.height} width={props.width} data={props.data} >
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{props.units==='C'?(`Average: ${average(props.data)- 273.15} ${props.units}`):(`Average: ${average(props.data)} ${props.units}`)}</div>
        </div>

    );
}
