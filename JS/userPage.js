const newUsers = []

function userlogin() {
return  `
    <section class="hero">
      <div class="container">
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Customer zone        </li>
        </ol>

        <div class="hero-content pb-5 text-center">
          <h1 class="hero-heading mb-0">Customer zone</h1>
        </div>
      </div>
    </section>

<section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="block">
              <div class="block-header">
                <h5 class="text-uppercase mb-0">Login</h5>
              </div>
              <div class="block-body">
                <p class="lead">Already our customer?</p>
                <p class="text-muted">Welcome back .</p>
                <hr>
                <form action="customer-orders.html" method="get"  onsubmit="return createNewUser()">
                  <div class="mb-4">
                    <label class="form-label" for="email1">Email</label>
                    <input class="form-control" id="email1" type="text" required="required">
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="password1">Password</label>
                    <input class="form-control" id="password1" type="password" required="required">
                  </div>
                  <div class="mb-4 text-center">
                    <button class="btn btn-outline-dark" type="submit"><i class="fa fa-sign-in-alt me-2"></i> Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="block">
              <div class="block-header">
                <h5 class="text-uppercase mb-0">New account</h5>
              </div>
              <div class="block-body"> 
                <p class="lead">Not our registered customer yet?</p>
                <p class="text-muted">With registration with us new great world, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                <p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                <hr>
                <form action="customer-orders.html" method="get">
                  <div class="mb-4">
                    <label class="form-label" for="name">FIRST Name</label>
                    <input class="form-control" id="f_name" type="text" required="required"><br>
                    <label class="form-label" for="name">LAST Name</label>
                    <input class="form-control" id="l_name" type="text" required="required">
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" required="required">
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="age">AGE</label>
                    <input class="form-control" id="age" type="number" min="10">
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="phone">PHONE</label>
                    <input class="form-control" id="phone" type="tell"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="required">
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="picture">PICTURE</label>
                    <input class="form-control" id="picture" type="text">
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" required="required">
                  </div>
                </form>
                <div class="mb-4 text-center">
                <button class="btn btn-outline-dark" type="submit" onclick="createNewUser()"><i class="far fa-user me-2"></i>Register                                </button>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
}

function createNewUser() {
  newUsers.push({
    age: document.getElementById("age").value,
    name: {
      last: document.getElementById("l_name").value,
      first: document.getElementById("f_name").value,
    },
    email: document.getElementById("email").value,
    phone: "+1" + document.getElementById("phone").value,
    picture: document.getElementById("picture").value,
    password: document.getElementById("password").value,
  });
}
async function addUserToTable(nUser) {
  try {
    return await fetch(`${UserApi}`, {
      method: "POST",
      body: JSON.stringify(nUser),
      headers: { "Content-type": "application/json;" },
    });
  } catch (error) {
    alert(error);
  } finally {}
}

function addNewUserToTable(user){
    return `
     <tr>
      <td>${user.name.first}${user.name.last}</td>
      <td>${user.email}</td>
      <td>${user.age}</td>
      <td>${user.phone}</td>
      <td><img src="${user.picture}" height="50" style="border-radius:90%;"></td>
    </tr>
     `
}
