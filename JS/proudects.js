class Device {
  constructor(url) {
      this.url = url
  }

  async getAll(){
      try{
        document.getElementById('main').innerHTML = 
        `<div id= "loading_containrt" style="min-height: 100vh;"><img src="/images/loading-bar.gif" class="d-flex justify-content-center  align-items-center pt-5";"></div>`
          return await fetch(`${this.url}`)
          .then(data => data.json())
      } catch(error){this.error(error)}
      finally{ document.getElementById('loading_containrt').innerHTML =" "}
  }

  async addToPage(elementId = 'main',result='<div class="row container-fluid">') {
      let products = await this.getAll() 
      products.forEach((product,index) => {
        if(index % 3 == 0) {result += '</div><div class="row container-fluid">'}
        product.picture =`${devicePicturesArr[index] ? devicePicturesArr[index] : devicePicturesArr[0]}`
          result += this.template(product,index)
      });
    document.getElementById(elementId).innerHTML = result
  }

  error(err) {
      console.log(err)
  }

  template(product) {
      let {brand,color,createdAt,id,isAvailable,picture,price,ram} = product
      return `
          <div class="card col-4 g-4" id="${id}">
            <img id="proudect_img" src="${picture}" class="card-img-top h-50">
            <div class="card-body">
              <h3 class="card-title">${brand}   ${color}</h3>
              <h5 class="card-title">${ram}</h5>
              <h5 class="card-title">${price}$ </h5>
              <span class="card-title">${isAvailable}  ${createdAt}</span><br><br>
              <button onclick="deleteDevice('${id}')" class="btn btn-dark">delete</button>
            </div>
          </div>
      `
  }
  static print(url,elementId='main') {
      let devices = new Device(url)
      devices.addToPage(elementId)
  }
}

const devicesApi = 'https://my-json-server.typicode.com/Jeck99/fake-server/devices'
function products(event) {
  event.preventDefault()
  Device.print(devicesApi,'main')
}

async function deleteDevice(id){
  try{
    let response = await fetch(`${devicesApi}/${id}`,{
      method: 'DELETE',
      headers: {'Content-type': 'application/json;'}
    })

    if(response.status <= 299) 
      document.getElementById(id).remove()
    else document.getElementById('errors').innerHTML = 'Something wrong on deleting'
} catch(error){this.error(error)
}finally{
}
}

const devicePicturesArr= [
  "https://www.ivory.co.il/files/catalog/org/1651386188v88Nz.jpg",
  "https://www.ivory.co.il/files/catalog/org/1653826455B55SN.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651055342s42SM.jpg",
  "https://www.ivory.co.il/files/catalog/org/1643202590s90Sl.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651493098v98El.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651487698a98ZM.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651066967z67GO.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651054990d90Ge.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651385066a66Km.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651050585g85Ff.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651050254w54Rf.jpg",
  "https://www.ivory.co.il/files/catalog/org/1651136919o19Xx.jpg",
  "https://www.ivory.co.il/files/catalog/org/1655724281u81HF.jpg",
  "https://www.ivory.co.il/files/catalog/org/1657019404c04Wk.jpg",
  "https://www.ivory.co.il/files/catalog/org/1656255810b10MO.jpg"
]
