// async function del(url){
//     try{
//         return await fetch(url,{method:'DELETE'})
//         .then(res => res.json())
//     }
//     catch(error){}
// }

// async function err(error){
//     alert(error.message)
// }

async function getImage(){
    try{
        return await fetch('https://my-json-server.typicode.com/Jeck99/fake-server/devices')
        .then(res => res.json())
    }
    finally{}
}

// function printImage(){
//     getImage()
//     .then(res.data(res => document.body.innerHTML += `<img src="${item.picture}">`))
// }
// printImage()

// document.body.innerHTML += `<img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder-1.webp"