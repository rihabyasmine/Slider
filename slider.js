
var sliderimages= Array.from(document.querySelectorAll('.container img'));
var slidercount=sliderimages.length;
var currentslide=2;
var slidenumberelement=document.getElementById('slider-number');
var nextbutt=document.getElementById('next');
var prevbutt=document.getElementById('prev');
nextbutt.onclick =nextslide;
prevbutt.onclick =prevslide;
var paginationelement =document.createElement('ul');
paginationelement.setAttribute('id','pagination-ul');
for (i=1;i<=slidercount ;i++){
    var paginationitem=document.createElement('li');
    paginationitem.setAttribute('data-index',i);
    paginationitem.appendChild(document.createTextNode(i));
    paginationelement.appendChild( paginationitem);
}

document.getElementById('indicators').appendChild(paginationelement);
var paginationCreatedUl =document.getElementById('pagination-ul');
var paginationBullets=Array.from(document.querySelectorAll('#pagination-ul li'));
for (var i=0;i<paginationBullets ;i++ ){
    paginationBullets[i].onclick = function (){
        currentslide= parseInt(this.getAttribute('data-index'));
        thecheker();
    }
}

thecheker();
function nextslide(){
    if (nextbutt.classList.contains('disabled')){
// do nothing 
    }
    else{
    currentslide++;
    thecheker();
    }
    }
 function prevslide(){
    if (prevbutt.classList.contains('disabled')){
        // do nothing 
            }
            else{
            currentslide--;
            thecheker();
            }
    }
function thecheker(){
    slidenumberelement.textContent = 'slider #' + (currentslide) + 'of' +  (slidercount);
    removeAllActive();
    sliderimages[currentslide-1].classList.add('active');
    paginationCreatedUl.children[currentslide-1].classList.add('active');
    if(currentslide==1){
        prevbutt.classList.add('disabled');

    }
    else {
        prevbutt.classList.remove('disabled');  
    }
    if(currentslide==slidercount){
        nextbutt.classList.add('disabled');

    }
    else {
        nextbutt.classList.remove('disabled');  
    }

}
function removeAllActive (){
    sliderimages.forEach(function (img){
        img.classList.remove('active');
    });
    paginationBullets.forEach(function (bullet){
bullet.classList.remove('active');
    });
}