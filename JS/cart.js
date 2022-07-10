function viewCart() {
  return `
<section class="hero">
      <div class="container">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Shopping cart        </li>
        </ol>
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="hero-heading">Shopping cart</h1>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">You have 3 items in your shopping cart</p></div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-fluid">
        <div class="row mb-5"> 
          <div class="col-lg-8">
            <div class="cart">
              <div class="cart-wrapper">
                <div class="cart-header text-center">
                  <div class="row">
                    <div class="col-5">Item</div>
                    <div class="col-2">Price</div>
                    <div class="col-2">Quantity</div>
                    <div class="col-2">Total</div>
                    <div class="col-1"></div>
                  </div>
                </div>
                <div class="cart-body">

                  <!-- Product-->
                  <div class="cart-item">
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-5">
                        <div class="d-flex align-items-center"><a href="detail.html"><img class="cart-item-img" src="https://www.ivory.co.il/splendid_images/cache/files/catalog/reg/1651139949A49IC___D!260X!.jpg"></a>
                          <div class="cart-title text-start"><a class="text-uppercase text-dark" href="detail.html"><strong>Xiaomi 11T 5G 256GB 8GB RAM</strong></a><br><span class="text-muted text-sm">Size: Large</span><br><span class="text-muted text-sm">Color: Meteorite Gray</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">$45.00</div>
                      <div class="col-2">
                        <div class="d-flex align-items-center">
                          <div class="btn btn-items btn-items-decrease">-</div>
                          <input class="form-control text-center input-items" type="text" value="1">
                          <div class="btn btn-items btn-items-increase">+</div>
                        </div>
                      </div>
                      <div class="col-2 text-center">$45.00</div>
                      <div class="col-1 text-center"><a class="cart-remove" href="#"> <i class="fa fa-times"></i></a></div>
                    </div>
                  </div>

                  <!-- Product-->
                  <div class="cart-item">
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-5">
                        <div class="d-flex align-items-center"><a href="detail.html"><img class="cart-item-img" src="https://www.ivory.co.il/splendid_images/cache/files/catalog/reg/1654172756w56FP___D!260X!.jpg"></a>
                          <div class="cart-title text-start"><a class="text-uppercase text-dark" href="detail.html"><strong>Samsung Galaxy S22 5G SM-S901E/DS 128GB</strong></a><br><span class="text-muted text-sm">Color: Black</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">$95.00</div>
                      <div class="col-2">
                        <div class="d-flex align-items-center">
                          <div class="btn btn-items btn-items-decrease">-</div>
                          <input class="form-control text-center input-items" type="text" value="1">
                          <div class="btn btn-items btn-items-increase">+</div>
                        </div>
                      </div>
                      <div class="col-2 text-center">$95.00</div>
                      <div class="col-1 text-center"><a class="cart-remove" href="#"> <i class="fa fa-times"></i></a></div>
                    </div>
                  </div>

                  <!-- Product-->
                  <div class="cart-item">
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-5">
                        <div class="d-flex align-items-center"><a href="detail.html"><img class="cart-item-img" src="https://www.ivory.co.il/splendid_images/cache/files/catalog/reg/1629108661t61KF___D!260X!.jpg"></a>
                          <div class="cart-title text-start"><a class="text-uppercase text-dark" href="detail.html"><strong>Samsung Galaxy A12 SM-A127F/DS 64GB 4GB RAM</strong></a><br><span class="text-muted text-sm">Color: white</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">$75.00</div>
                      <div class="col-2">
                        <div class="d-flex align-items-center">
                          <div class="btn btn-items btn-items-decrease">-</div>
                          <input class="form-control text-center input-items" type="text" value="1">
                          <div class="btn btn-items btn-items-increase">+</div>
                        </div>
                      </div>
                      <div class="col-2 text-center">$75.00</div>
                      <div class="col-1 text-center"><a class="cart-remove" href="#"> <i class="fa fa-times"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-5 d-flex justify-content-between flex-column flex-lg-row">
            <a class="btn btn-outline-dark" href="/index.html"><i class="bi bi-chevron-left"></i> Continue Shopping</a>
            <a class="btn btn-outline-dark" href="checkout1.html">Proceed to checkout <i class="bi bi-chevron-right"></i></i>                                                     </a></div>
          </div>
          <div class="col-lg-4">
            <div class="block mb-5">
              <div class="block-header">
                <h6 class="text-uppercase mb-0">Order Summary</h6>
              </div>
              <div class="block-body bg-light pt-1">
                <p class="text-sm">Shipping and additional costs are calculated based on values you have entered.</p>
                <ul class="order-summary mb-0 list-unstyled">
                  <li class="order-summary-item"><span>Order Subtotal </span><span>$215.00</span></li>
                  <li class="order-summary-item"><span>Shipping and handling</span><span>$10.00</span></li>
                  <li class="order-summary-item"><span>Tax</span><span>$0.00</span></li>
                  <li class="order-summary-item border-0"><span>Total</span><strong class="order-summary-total">$225.00</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
}
