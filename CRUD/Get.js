let getData = async () => {//async for make function async function

    const url = "http://localhost:3000/product";
    let get = await fetch(url,
        { method: "GET" }
    );
    // fetch return promise

    //await: wating for data
    let data = await get.json(); //.json for convert data into json formate

    console.log(data);

    let showData = document.querySelector("#table-data");

    data.map((event) => {
        showData.innerHTML += `
       <tr>
       <td>${event.title}</td>
       <td>${event.storage}</td>
       <td>${event.price}</td>
       <td>${event.off}</td>
       <td>${event.stock}</td>
       <td onclick=Del("${event.id}")>delete</td>
       </tr>
        `
    })


}

const  Del=(id)=>{
    console.log(`Click: ${id}`);
    
 fetch(`http://localhost:3000/product/${id}`,
    {method:"DELETE"}
 )

// location.href="./post.html"

}


getData();


const Sub = ()=>{
  let title = document.querySelector("#title").value;
  let storage = document.querySelector("#storage").value;
  let price = document.querySelector("#price").value;
  let off = document.querySelector("#off").value;
  let stock = document.querySelector("#stock").value;

  fetch("http://localhost:3000/product",{
    method:"POST",
    headers:{
        "Content-Type":"applicatio/json"
    },
    body:JSON.stringify({
        "title":title,
        "storage":storage,
        "price":price,
        "off":off,
        "stock":stock

    })
  })

  location.href = "/create.html";
}