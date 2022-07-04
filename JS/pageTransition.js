var mainContent = document.getElementById('main')
function changeMainContent(event){
    event.preventDefault()
    
    let href = event.target.getAttribute('href')

    let links = {
        '/HTML/information.html':information,
        '/HTML/proudects.html':proudects,
        '/HTML/form.html':form,
        '/HTML/contactus.html':contact,
    }
    console.log(links[href]())
    document.getElementById('main').innerHTML = links[href]()
}
    