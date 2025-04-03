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
       <td>title:${event.title}</td>
       <td>storage:${event.storage}</td>
       <td>price:${event.price}</td>
       <td>off:${event.off}</td>
       <td>stock:${event.stock}</td>
       </tr>
        `
    })


}
getData();