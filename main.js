var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image(){
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_object=Img;
        block_object.scaleToWidth(700);
        block_object.scaleToHeight(510);
        block_object.set({
            top:100,
            left:190,
            right:190,
            bottom:100
        });
        canvas.add(block_object);        
    });
}

function play(){
    x.play();
	
}
