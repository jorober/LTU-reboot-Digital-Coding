
const listItems = document.querySelectorAll('button.selection');

const allImages = document.querySelectorAll('.main .image-selections .images');

function toggleActiveClass(active){

listItems.forEach(function( item ){
    item.classList.remove('active');
    })

active.classList.add('active')

}

function toggleimages( dataClass) {

    if(dataClass === 'all'){

        allImages.forEach(function (image){

            image.style.display = 'block';

        })

    } else {

        allImages.forEach( image => { 
            image.dataset.class === dataClass ? image.style.display = 'block' : 
        image.style.display = 'none'
    })




    }


} //END OF TOGGLE IMAGES FUNCTION






listItems.forEach(function (item){

    item.addEventListener('click', function(){
        toggleActiveClass(item);
        toggleimages(item.dataset.class);
        console.log('you clicked me');
    })

})