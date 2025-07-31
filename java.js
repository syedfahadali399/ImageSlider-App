let showImage = document.getElementById("showImage")

let imageArray = [
    "pics/image1.jpg",
    "pics/image2.jpg",
    "pics/image3.jpg",
    "pics/image4.jpg",
    "pics/image5.jpg",
    "pics/image6.jpg",
]

let currIndex = 0
let numberOfImageInArray = imageArray.length - 1

function imageSliderIncrease() {
    currIndex++  
    showImage.src = imageArray[currIndex] 
    showImage.classList.add("active")
    if(currIndex > numberOfImageInArray) {
        currIndex = 0
        showImage.src = imageArray[currIndex]
    }
}

function imageSliderDecrease() {
    currIndex--
    showImage.src = imageArray[currIndex] 
    showImage.classList.add("active")
    if(currIndex < 0) {
        currIndex = numberOfImageInArray
        showImage.src = imageArray[currIndex]
    }
}

function firstImage() {
    showImage.src = imageArray[0]
    showImage.classList.add("active")
    setTimeout(() => {
        showImage.classList.remove("active")
    }, 1000)
}

firstImage()

document.getElementById("next").addEventListener("click", function() {
    imageSliderIncrease()
    setTimeout(() => {
        showImage.classList.remove("active")
    }, 1000)
    console.log(currIndex);    
})

document.getElementById("previous").addEventListener("click", function() {
    imageSliderDecrease()   
    setTimeout(() => {
        showImage.classList.remove("active")
    }, 1000) 
    console.log(currIndex);
    
})

document.getElementById("auto").addEventListener("click", function() {
    let change = setInterval(() => {
        imageSliderIncrease()
        setTimeout(() => {
            showImage.classList.remove("active")
        }, 1000) 
    },3000)
    document.getElementById("reset").addEventListener("click", function() {
        clearInterval(change)
        firstImage()
        currIndex = 0
    })
})

document.getElementById("reset").addEventListener("click", function() {
    firstImage()
    currIndex = 0
})