
//typy akcji

const INC='counter/INC'
const DEC='counter/DEC'

/////////////////////////////


//funkcja pomocnicza ktora zwraca akcje,nawiasy klamrowe bo zwracamy obiekt,akcje

const inc=()=>({type:INC})
const dec=()=>({type:DEC})

///////////////////////////////////////////////////


//stan poczatkowy
const initialState=0;

////////////////////////////





export default (state=initialState,action)=>{

//sprawdzamy co zrobic dla danego typu akcji, jesli akcja jest tego typu to zmieniam stan w ten sposob, jesli inego typu to w inny
//REDUCER

switch(action.type){

    case INC:
        return state +1
    case DEC:
        return state -1
    default:
        return state


}

}


