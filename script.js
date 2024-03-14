let slides = document.querySelectorAll(".slide")
let count = 0;
slides.forEach (
    (slide , index) => {
        slide.style.left = `${index * 100}%`
    }
)

const Prev = () => {
    count--;
    if(count < 0) {
        count = slides.length - 1;
    }
    slideImage();
}

const Next = () => {
    count++;
    if(count >= slides.length) {
        count = 0;
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}
































// slides.forEach(
//     (slide , index)=> {
//         slide.style.left = `${index * 100}%`
//     }
// )

// const Prev = () => {
//     count--;
//     if(count < 0) {
//         count = slides.length - 1;
//     }
//     slideImage()
// }

// const Next = () => { 
//     count++;
//     if(count >= slides.length) {
//         count = 0;
//     }
//     slideImage()
// }

// const slideImage = ()=> {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = `translateX(-${count * 100}%)`
//         }
//     )
// }