function form() {
  return `
<section class="hero">
<div class="container">
  <ol class="breadcrumb justify-content-center">
    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
    <li class="breadcrumb-item active">Form</li>
  </ol>
  <div class="hero-content text-center">
    <h1 class="hero-heading mb-0">Add A Device</h1>
  </div>
</div>
</section>
 
  <form>
  <div>
    <label for="exampleFormControlInput1" class="form-label">Device Brand</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter device brand" required="required">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Device price</label>
    <div class="d-flex">
    <span class="input-group-text">$</span>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="enter your asked price" required="required">
    </div>
  </div>
    <div class="mb-3">
    <label for="formFile" class="form-label">Device Picture</label>
    <input class="form-control" type="file" id="formFile" required="required">
  </div>
  <label for="exampleColorInput" class="form-label">Device Color</label>
  <select class="form-select" aria-label="Default select example">Device Color
    <option selected>select the device color</option>
    <option value="1">white</option>
    <option value="2">black</option>
    <option value="3">gold</option>
    <option value="4">silver</option>
    <option value="5">rose gold</option>
    <option value="6">matte</option>
  </select><br>
  <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
      <label for="floatingTextarea2">additional notes</label>
  </div><br>
  <button type="submit" class="btn btn-outline-dark mb-3">UPLOAD</button>
  </form>
  `;
}