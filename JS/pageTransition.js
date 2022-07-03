var mainContent = document.getElementById('main')
function changeMainContent(event){
    mainContent.innerHTML=''
    switch(event[href]){
        case '/HTML/information.html':
            return mainContent.setAttribute(href, event[href])
        case 'boostrap.html':
            return mainContent.setAttribute(href, event[href])
        case '/HTML/proudects.html':
            return mainContent.setAttribute(href, event[href])
        case '/HTML/form.html':
            return mainContent.setAttribute(href, event[href])
        case '/HTML/contact us.html':
            return mainContent.setAttribute(href, event[href])
    }
}
    