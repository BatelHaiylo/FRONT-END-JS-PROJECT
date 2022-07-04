const cellApi ='https://my-json-server.typicode.com/Jeck99/fake-server/devices/'
async function getCellObj(){
    try{
        return await fetch(`${cellApi}`)
        .then(data => data.json())
    }
    catch(error){catchEror()}
    finally{}
}

function catchEror(){
    alert (`ther has been an error: ${error}`);
}

async function getProducts(){
    getCellObj()
    .then(res => res.data)
}