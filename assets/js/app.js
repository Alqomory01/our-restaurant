
const getElement = (selector)=>{
    const element =document.querySelector(selector);
    if(element) return element
    throw Error(
        `Please double check your class name, there is no ${selector} class`
    )
}
const links = getElement('.navlinks')
const navBtnDom = getElement('.nav-button')


navBtnDom.addEventListener('click', ()=>{
    links.classList.toggle('showlinks')
})
const date = getElement('.date')
const currentYear = new Date().getFullYear()

date.textContent = currentYear