export function checkStatus(status){
     let colorClass = "";
    let statusText = "";

    if(status == 'cancelled'){
        colorClass = "bg-red"
        statusText = "Cancelled"
    }else if (status == "ready"){
        colorClass = "bg-green"
        statusText = "Ready to serve"
    }else if (status == "waiting"){
        colorClass = "bg-orange"
        statusText = "Waiting"
    }else if (status == "completed"){
        colorClass = "bg-blue"
        statusText = "Completed"
    }else{
        colorClass = ""
        statusText = ""
    }
    return [colorClass,statusText];
}