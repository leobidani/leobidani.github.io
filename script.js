let body = document.body
let enableCall = true;

document.addEventListener('mousemove', function (e) {
    if (!enableCall) return;
    enableCall = false;
    let circle = document.createElement('span');
    let x = Math.round((e.clientX)/10)*10;
    let y = Math.round((e.clientY)/10)*10;
    //  let x = e.pageX; // for absolute position
    //  let y = e.pageY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.innerHTML = "•";
    body.appendChild(circle);
    setTimeout(function () {
        circle.remove();
    }, 5000);
    setTimeout(() => enableCall = true, 1);
});

const images = document.querySelectorAll('.image, .image1');

let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
       
        currentIndex = (currentIndex + 1) % images.length;
        
        images[currentIndex].classList.add('active');
    });
});


images[currentIndex].classList.add('active');












