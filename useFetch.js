import { useEffect, useRef, useState } from "react"



export const useFetch = (url) => {

    /* En pocas palabras, el useRef te permite mantener un valor y
    // cambiarlo sin que dispare una nueva renderización cuando lo cambias...

 */

const isMounted = useRef(true); //ayudara en caso se desmonte el hook por parte del cliente 
                                //sin terminar de renderizar
    
const [state, setstate] = useState({data: null, loading:true, error:null});

useEffect(() => {
    return()=>{
        isMounted.current=false;  
    }
}, [])

useEffect(() => {
    
    setstate({data: null, loading:true, error:null});

    fetch(url)
        .then( resp=>resp.json())
        .then(data=>{

            setTimeout(() => {
                
                if (isMounted.current){
                    
                setstate({
                    loading:false,
                    error:null,
                    data
                });
                }else{
                    console.log('setState no se llamo');
                }


            }, 2000);

         
        });

}, [url])

return state;
}
