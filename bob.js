class Bob{
  constructor(x,y,radius){
    this.Body = Bodies.circle(x,y,radius,{isStatic:true})
    this.Bodyradius = radius
    World.add(world,this.Body)
  }
  display(){
     var pos = this.Body.position
     rectMode(RADIUS)
     stroke("blue")
     strokeWeight(2)
     fill("red")
     circle(pos.x,pos.y,this.Bodyradius)
  }
}