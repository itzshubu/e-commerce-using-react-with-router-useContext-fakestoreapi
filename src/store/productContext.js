import React,{useContext,createContext} from "react"

export const productContext = createContext([
    {name :"dwinder",
        age : 21
    },
    {name :"kulwinder",
        age : 21
    }
]);

function func(){
    let data3 = useContext(productContext);
    return data3
}
 export default func
