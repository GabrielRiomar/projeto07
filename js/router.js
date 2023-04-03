export class Router {
  
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['/']
    
    fetch(route)
    .then(data => data.text())
    .then(html => {document.querySelector('#app').innerHTML = html})
    this.makeLinkActive()
  }

  makeLinkActive() {
    const links = document.querySelectorAll('nav ul li a')
    const { pathname } = location
    const currentLink = document.querySelector(`a[href="${pathname}"]`)
  
    for(let a of links) a.classList.remove('active')
    
    if(currentLink)
      currentLink.classList.add('active')
  }
}
