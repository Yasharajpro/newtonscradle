class bob
{
    constructor(x,y){
        var options={
            isStatic:false,
             density:0.25,
            friction:1,
            restitution:1
        }
        this.x=x;
        this.y=y
        this.body=Bodies.circle(x,y,25,options);
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
      
        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,25,25);
        
        

    }
   
}