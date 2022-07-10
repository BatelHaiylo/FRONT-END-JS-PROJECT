function contact() {
  return ` 

<section class="hero">
<div class="container">
  <ol class="breadcrumb justify-content-center">
    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
    <li class="breadcrumb-item active">Contact Us        </li>
  </ol>
  <div class="hero-content pb-5 text-center">
    <h1 class="hero-heading mb-0">Contact Us</h1>
  </div>
</div>
</section>

    <section class="py-6">
    <div class="container" style="min-height:90vh">
      <div class="row">
        <div class="col-md-7 mb-5 mb-md-0">
          <form class="form" id="contact-form" method="post" action="contact.php">
            <div class="controls">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-4">
                    <label class="form-label" for="name">Your firstname *</label>
                    <input class="form-control" type="text" name="name" id="name" placeholder="Enter your firstname" required="required">
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-4">
                    <label class="form-label" for="surname">Your lastname *</label>
                    <input class="form-control" type="text" name="surname" id="surname" placeholder="Enter your  lastname" required="required">
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label" for="email">Your email *</label>
                <input class="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required">
              </div>
              <div class="mb-4">
                <label class="form-label" for="message">Your message for us *</label>
                <textarea class="form-control" rows="4" name="message" id="message" placeholder="Enter your message" required="required"></textarea>
              </div>
              <button class="btn btn-outline-dark" type="submit">Send message</button>
            </div>
          </form>
        </div>
        <div class="col-md-5">
          <h3 class="text-muted"> Sell a device with Garage Cell </h3>
          <p class="text-muted">On Garage cell, you buy and sell directly with other users. Cutting out the middleman means you join a community market with the best prices and highest value.</p>
          <p ><img src=""></p>
          <div class="social">
            <ul class="list-inline">
              <li class="list-inline-item"><a href="https://twitter.com/samsungmobile" target="_blank"><i class="bi bi-twitter"></i></i></a></li>
              <li class="list-inline-item"><a href="https://www.instagram.com/samsungisrael/" target="_blank"><i class="bi bi-instagram"></i></i></a></li>
              <li class="list-inline-item"><a href="https://www.facebook.com/SamsungIsrael/" target="_blank"><i class="bi bi-meta"></i></i></a></li>
              <li class="list-inline-item"><a href="https://wa.me/?text=urlencodedtext " target="_blank"><i class="bi bi-whatsapp"></i></a></li>
              <li class="list-inline-item"><a href="https://www.tiktok.com/@samsungisrael?lang=he-IL" target="_blank"><i class="bi bi-tiktok"></i></i></i></a></li>
              <li class="list-inline-item">
              <a title="New window opens" data-omni-type="support_content" data-omni="contact us:Email Support" onclick="window.open('https://contactus.samsung.com/customer/contactus/formmail/mail/MailQuestionProduct.jsp?SITE_ID=165', 'open', 'width=725, height=600, scrollbars=yes, resizable=no' );" href="#">
              <i class="bi bi-envelope"></i></i></a></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  </section>

  `;
}
