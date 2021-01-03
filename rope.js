class Rope{
  constructor(Body1,Body2,offsetX){
    this.offsetX = offsetX
    var option = {
        bodyA:Body1,
        bodyB:Body2,
        pointB:{x:this.offsetX},
        length:200
    }
    this.pointB = pointB
    this.rope = Constraint.create(option)
    World.add(world,this.rope)
  }
  display(){
      var pointA = this.rope.bodyA.position
      var pointB = this.Rope.bodyB.position
      var obj1x = pointA.x
      var obj1y = pointA.y
      
      var obj2x = pointB.x+this.offsetX
      var obj2y = pointB.y
      strokeWeight(3)
      line ( obj1x,obj1y,obj2x,obj2y)
  }
}