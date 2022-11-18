// import React from 'react';

let param = "";
let ret_val="";

function ApiService(param='apiPath'){

    switch(param){
        case "baseUrl":
            ret_val = 'http://localhost:3001';
            break;
        case "apiPath":
            ret_val = 'http://localhost:9001';
            break;
        default:
            break;
    }
    
    return ret_val; 

}
    // const apiPath = () => {
    //     return 'http://localhost:9000';  
    // };
export default ApiService;