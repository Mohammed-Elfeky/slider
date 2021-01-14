var thePopUp=document.querySelector('.pop-up')
var theCloseButton=document.getElementById('close')
var theImages =Array.from(document.querySelectorAll('.img-fluid'))
var thePopUpInner=document.querySelector('.inner')
var nextButton=document.getElementById('next')
var prevButton=document.getElementById('prev')
var currentIndex;

nextButton.addEventListener('click', next)
prevButton.addEventListener('click', prev)

//listener for images clicks
for(i=0;i<theImages.length;i++){

    theImages[i].addEventListener('click',function(e){
        currentIndex=theImages.indexOf(e.target)
        openPopUp()
        showTheClickedImg(currentIndex)
    })

}

theCloseButton.addEventListener('click',function(){
    thePopUp.style.display='none'
})

function openPopUp(){
    thePopUp.style.display='flex'
}

function showTheClickedImg(index){
    thePopUpInner.style.backgroundImage=`url(${theImages[index].src})`
}

function next(){
    currentIndex++
    if(currentIndex == theImages.length){
        currentIndex=0
    }
    showTheClickedImg(currentIndex)
}
function prev(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex=0
    }
    showTheClickedImg(currentIndex)
}
