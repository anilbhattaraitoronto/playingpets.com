import { renderCopyRightYear } from '/modules/methods/renderCopyRightYear.js'
import { displayInitial, navigateSections } from '/modules/methods/displayInitial.js'
mainApp()

function mainApp() {
    //dynamically render copy right year at the footer
    renderCopyRightYear('copy-right-year')
    //initial sections
    displayInitial('.main-page', '.top-link', 'active', 0)
    //tabbed navigations through main sections
    navigateSections('.main-page', '.top-link', 'top-nav', 'active')

    //start button action

    let startButton = document.getElementById('start-lesson-button')
    startButton.addEventListener('click', () => {
        displayInitial('.main-page', '.top-link', 'active', 1)
    })
}