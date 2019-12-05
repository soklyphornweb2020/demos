$(document).ready(() =>{
    requestAPI();
});

//reques api

var requestAPI=()=>{
    $.ajax({
        dataType:'json',
        url: getUrl(),
        success: (data)=> getRecipes(data),
        error:()=> getError(),
    });
};

//get url api

var getUrl=()=>{
    var url="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

//get data

var getRecipes=(myData)=>{
    myData.recipes.forEach(element => {

        //recipe: item.name

        //get ingredients

        getIngredients(element.ingredients);
    });
}
//get error

var getError=()=>{}

//get ingredients

var getIngredients=(ing)=>{
    ing.forEach(element=>{
        console.log(element);
    });
}
//compute html

var computeHTML=()=>{
    var result="";
    result +=`
        <tr>
        <td> <img src="${element.iconUrl}" width="100"></td>
            <td>${element.name}</td>
            <td>${element.quantity}</td>
            <td>${element.unit}</td>
        </tr>
    `;
    printOut(result);
}
//print out to html

var printOut=(out)=>{
    $('#ingrediant').append(out);
}