async function proudects(){
  let products = await getProducts() // fetch function
  let result ='<div class="row">'
  products.forEach((product,index) => {
    if(index % 3 == 0) {result += '</div><div class="row">'}
      result += `
      <div class="card col-4">
        <img id="proudect_img" src="${product.picture}" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">${product.brand}</h3>
          <h5 class="card-title">${product.color}</h5>
          <h5 class="card-title">${product.price}</h5>
        </div>
      </div>
      `
  });
  return result
}

