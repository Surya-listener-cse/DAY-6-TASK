//Solving problems uing array functions on the rest countries.

// a)Get all countires from asian continent/region using filter function.

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function() {
    let result=JSON.parse(request.response);
    result.filter((countries)=>{
        return countries.region === "Asia";

    })
      console.log(result);
}

// b)Get all the countries with a population of less than 2lakh using filter function.

let request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all");
request1.send();
request1.onload=function() {
    const pop= result1.filter((element)=>{
        return element.population<200000;
    })
       console.log(pop);
}

// c) Print the following details name, capital, flag, using for eachfunction.

let request2=new XMLHttpRequest();
request2.open("GET", "http://restcountries.com/v3.1/all");
request2.send();
request2.onload = function() {
    let result= JSON.parse(request2.response);
    result.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flags);
    });
}

// d)print the total population of countires using reduce function

let request3=new XMLHttpRequest();
request3.open("GET", "http://restcountries.com/v3.1/all");
request3.send();
request3.onload = function() {
    let result= JSON.parse(request3.response);
    let total= result.reduce((acc,curr)=>{
        return acc+curr.population;
    
    }, 0);
        console.log(total);
}

// e) Print the countries which uses US Dollars as currency

let request4=new XMLHttpRequest();
request4.open("GET", "http://restcountries.com/v3.1/all");
request4.send();
request4.onload = function() {
    let result= JSON.parse(request4.response);
    let currency = result.filter((element)=>{
        for(let key in element.currencies){
            if(element.currencies[key].code === "USD"){
                return element;
            }
        }
    })
        console.log(currency);
}




