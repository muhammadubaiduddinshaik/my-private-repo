// arry check opertor cities name  


function checker(){
    let cities = ["karachi" , "lahore" , "islamabad" , "queeta"];
    let ques = prompt("write a city name");
    found = false;
    for (let i = 0; i < cities.length ; i++) {
        if(ques.toLowerCase() === cities[i].toLowerCase()){document.write("found"  
 + " " +  ques)
                                                      found = true;
    break;
}
    }
    if(!found){
     document.write("not found " + ques);
    }
}

    //  E .....N ......... D