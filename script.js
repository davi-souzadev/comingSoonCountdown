const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const countdownContainer = document.querySelector('#countdown')
const loadingSpinner = document.querySelector('#loading')

const signupButton = document.querySelector('#anchor-signup')
const popupInvisible = document.querySelector('.popup-invisible')
const popupWrapper = document.querySelector('.popup-wrapper')
const formSubmit = document.querySelector('#formSubmit')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

// Contagem regressiva
const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({days, hours, minutes, seconds}) => {
    daysContainer.textContent = getTimeUnit(days)
    hoursContainer.textContent = getTimeUnit(hours)
    minutesContainer.textContent = getTimeUnit(minutes)
    secondsContainer.textContent = getTimeUnit(seconds)
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    const days = Math.floor(difference / 1000 / 60 / 60/ 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountdownValues({days, hours, minutes, seconds})
}

const handleCountDownDisplay = () => {
    countdownContainer.style.display = "flex"
    loadingSpinner.remove()
}

setTimeout(handleCountDownDisplay, 1000)
setInterval(updateCountdown, 1000)

// Abrir e fechar modal
signupButton.addEventListener('click', () => {
    popupInvisible.style.display = "flex"
})

popupWrapper.addEventListener('click', event => {
    const getClickedClassName = event.target.classList[0]
    const classNames = ['popup-wrapper', 'button-submit']
    const closePopup = classNames.some(className => className === getClickedClassName)

    if(closePopup) {
        popupInvisible.style.display = "none"
    }
})