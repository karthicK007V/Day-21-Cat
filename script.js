





async function wea(){
try{
    let res=await fetch("https://api.thecatapi.com/v1/images/search?limit=100");
    let result=await res.json();
    console.log(arr(result))

}
catch(err){
    console.log(error)
}

function arr(array){

    for(var i=0;i<=array.length;i++){
    console.log(array[i])
    console.log(array[i].id)
    console.log(array[i].url)
    

   

    var div=document.createElement("div");

    div.innerHTML=`

    
    <div class="card " >
        <div class="header"><b></b></div>
        <img class="cards-img" src="${array[i].url}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">CAT</h5>
            <h5 class="card-text-la">ID:${array[i].id}</h5>
            <a href=${array[i].url} class="btn btn-primary">Go Link</a>
           
         </div>
    
      </div>`
    

  
    document.body.append(div);
    }
}
arr()



}

wea()