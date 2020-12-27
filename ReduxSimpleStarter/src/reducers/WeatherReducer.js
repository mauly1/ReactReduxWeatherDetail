import {FETCH_WEATHER} from "../actions/index";

export default function (state=[],action){
    switch (action.type){
        case FETCH_WEATHER:
            // both blow lines are completely identical
            //return state.concat([action.payload.data]);

            console.log('Weather Reducer action.payload.data:',action);
            return [action.payload.data, ...state] //[city,city,city] it does not make array like [city,[city],[city]]
    }
    return state;
}
