const UserApi = 'https://my-json-server.typicode.com/Jeck99/fake-server/users'

async function getUsers(usersHtml=''){
  let APIusers = await fetch(`${UserApi}`).then(res => res.json())
  let users = [...APIusers, ...newUsers]
  users.forEach((user,index) => {
    user.picture =`${usersPicturesArr[index] ? usersPicturesArr[index] : usersPicturesArr[0]}`
      usersHtml += addToTable(user,index)
  })
  tableTemplate(usersHtml)
}

  function tableTemplate(usersHtml){
     let container = document.getElementById('main')
     container.innerHTML = `  

     <section class="hero">
     <div class="container">
       <ol class="breadcrumb justify-content-center">
         <li class="breadcrumb-item"><a href="index.html">Home</a></li>
         <li class="breadcrumb-item active">Information</li>
       </ol>
       <div class="hero-content text-center">
         <h1 class="hero-heading mb-0">App User</h1>
       </div>
     </div>
     </section>
     
     <div class="table table-responsive-sm">
     <table class="table align-middle">
       <thead>
       <tr>
         <th>User Name</th><th>Email</th><th>Age</th><th>Phone</th><th>Picture</th>
       </tr>
       </thead>
       <tbody>${usersHtml}</tbody>
     </table>
     </div>
  `}

  function addToTable(user){
    return `
     <tr>
      <td>${user.name.first}${user.name.last}</td>
      <td>${user.email}</td>
      <td>${user.age}</td>
      <td>${user.phone}</td>
      <td><img src="${user.picture}" height="50" width="45" style="border-radius:90%;"></td>
    </tr>
     `
}

async function information(event){
  event.preventDefault()
  try{
    document.getElementById('main').innerHTML = 
    `<div id= "loading_container" style="min-height: 100vh;">
    <img src="/images/loading-bar.gif" class="d-flex justify-content-center align-items-center pt-5";"></div>`
    return await getUsers()
  }catch(error){
    document.getElementById('main').innerHTML +=  
  `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <div class="me-auto">GARAGE<b id="logo_partII">CELL</b></div>
    <small>1 min ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, ther has been an error.
  </div>
</div>`}
  finally{ document.getElementById('loading_container').innerText =" "}
}

const usersPicturesArr= [
  "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
  "https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc",
  "https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80",
  "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
  "https://i.pinimg.com/736x/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg",
  "https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/157765614-profile-picture-of-smiling-indian-female-isolated-on-grey-studio-background-show-optimism-and-positi.jpg?ver=6",
  "https://buffer.com/library/content/images/2022/03/amina.png",
  "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
  "https://i.insider.com/59b6c4bfba785e36f932a317?width=600&format=jpeg&auto=webp",
  "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
  "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=",
  "https://media.istockphoto.com/photos/portrait-of-successful-black-male-modern-day-student-holding-picture-id1311634222?k=20&m=1311634222&s=612x612&w=0&h=1a0XDWnZNPjk_5n7maZdzowaDfBcBohwoiZZF69qS9A=",
  "https://chicagophotovideo.com/wp-content/uploads/2018/01/professional-headshots-for-linkedin-chicago-1024x1024.jpg",
  "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/02/Website-Photo-11-1.jpg",
  "https://i.pinimg.com/736x/42/57/dd/4257dd317ad8c667d62b47acd041788c.jpg"
]
