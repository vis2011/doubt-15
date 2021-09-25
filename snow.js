class snow{
constructor(x,y,width,height){
    var options={
        restitution: 1,
        friction: 0,
        isStatic:false
    }
   
     this.body=Bodies.rectangle(x,y,height,width,options);
     this.image=loadImage("snow4.webp");
     World.add(world,this.body);
     this.x=x
     this.y=y
     this.width=height
     this.height=width
     console.log(this.body);
}
display(){
    var pos=this.body.position;

    translate(pos.x,pos.y)
    image(this.image,this.x,this.y,this.width,this.height)
}

}