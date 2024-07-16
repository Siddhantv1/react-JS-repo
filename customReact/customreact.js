function customRender(reactElement, MainContainer) {

    const domelement = document.createElement(reactElement.type);
    
    domelement.innerHTML = reactElement.children
    domelement.setAttribute('href', reactElement.props.href)
    domelement.setAttribute('target', reactElement.props.target)
    
    
    MainContainer.appendChild(domelement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to google'
}


const MainContainer = document.querySelector('#root')
customRender(reactElement, MainContainer)