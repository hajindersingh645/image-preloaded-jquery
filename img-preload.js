
function preload(arrayOfImages) {
    jQuery(arrayOfImages).each(function(){
        jQuery('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

preload([
    'foldername/imagename.jpg',
    'foldername/imagename.png',
    'foldername/imagename.jpeg'
]);
