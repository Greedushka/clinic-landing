let modal = document.getElementById('myModal');


let btn = document.querySelectorAll('.open');


let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}
btn.forEach(el => {
    el.onclick = () => {
        modal.style.display = 'block'
    }
})

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function sendMailFromModal(){
    let templateparam = {
        desc: document.getElementById('modal-text').value,
        name: document.getElementById('modal-input').value
    }
    emailjs.send('service_4tpmt79', 'template_5cqnflo', templateparam, 'at1jmKqpGwxBvC7GO').then(function (response) {
        console.log(templateparam)
        console.log('SUCCESS: ' + response)
        setTimeout(() => {
            modal.style.display = 'none'
        }, 1500)
    }, function (error) {
        console.log('ERROR: ' + error)
    })
}
let iter = 1
window.onload = function (){
    const menu = document.querySelector('.header--menu')
    const supline = document.querySelector('.supline')
    let isShowMenu = false
    menu.onclick = () => {
        if(!isShowMenu) {
            supline.classList.add('header-active')
            menu.setAttribute('name', 'close-circle-outline')
            isShowMenu = true
            document.querySelector('body').style.overflow = 'hidden'
        }else{
            isShowMenu = false
            supline.classList.remove('header-active')
            menu.setAttribute('name', 'menu-outline')
            document.querySelector('body').style.overflow = 'auto'
        }
    }
    let position = 0;
    const slidesToShow = 1
    const slidesToScroll = 1
    const slider_container = document.querySelector('.slider-container')
    const slider_track = document.querySelector('.slider-track')
    const slider_prev = document.querySelector('.btn-prev')
    const slider_next = document.querySelector('.btn-next')
    const items = document.querySelectorAll('.slider-item')
    const itemsCount = items.length
    const itemWidth = slider_container.clientWidth / slidesToShow
    const movePosition = slidesToScroll * itemWidth
    items.forEach((item) =>{
        item.style.minWidth = `${itemWidth}px`
    })
    slider_prev.addEventListener('click', function (){
        if(iter <= 1){
            iter = 1
        } else {
            iter -= 1
        }
        document.querySelector('.slider-active').textContent = iter
        const itemsLeft = Math.abs(position) / itemWidth
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
        setPosition()
        checkBtns()
    })
    slider_next.addEventListener('click', function (){
        if(iter >= 4){
            iter = 4
        } else {
            iter += 1
        }
        document.querySelector('.slider-active').textContent = iter
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
        setPosition()
        checkBtns()
    })
    const setPosition = () => {
        slider_track.style.transform = `translateX(${position}px)`
    }
    const checkBtns = () => {
        // slider_prev.disabled = position === 0;
        // slider_next.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };
    checkBtns()
}