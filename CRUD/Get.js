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
       </tr>
        `
    })


}
getData();