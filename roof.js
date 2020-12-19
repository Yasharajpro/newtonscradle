class Roof
{
    constructor(x,y,width,height){

        this.x=x;
        this.y=y;                      
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(this.x,this.y,this.width,this.height);
        

    }

}