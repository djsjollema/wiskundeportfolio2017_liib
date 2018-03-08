class Vector2{

  constructor(dx,dy,label) {
    this._dx = dx;
    this._dy = dy;
    this._angle = Math.atan2(this._dy,this._dx);
    this._r = Math.sqrt(this._dx*this._dx+this._dy*this._dy);
    this.label = label || "";
  }

  get dx(){
    return this._dx;
  }

  get dy(){
    return this._dy;
  }

  get angle(){
    return this._angle;
  }

  get r(){
    return this._r;
  }

  set dx(dx){
    this._dx = dx;
    this._angle = Math.atan2(this._dy,this._dx);
    this._r = Math.sqrt(this._dx*this._dx+this._dy*this._dy);
  }

  set dy(dy){
    this._dy = dy;
    this._angle = Math.atan2(this._dy,this._dx);
    this._r = Math.sqrt(this._dx*this._dx+this._dy*this._dy);
  }
  set angle(angle){
    this._angle = angle;
    this._dx = this.r * Math.cos(this._angle);
    this._dy = this.r * Math.sin(this._angle);
  }
  set r(r){
    if (r<0){
      this._angle += Math.PI;
    }
    this._r = Math.abs(r);
    this._dx = this.r * Math.cos(this._angle);
    this._dy = this.r * Math.sin(this._angle);
  }

  defineVectorWithTwoPoints(A,B){
    this.dx = B.x - A.x;
    this.dy = B.y - A.y;
  }

  norm(){
    this._dx /= this._r;
    this._dy /= this._r;
    this._r = 1;
  }

  dot(v){
    return this.dx *v.dx + this.dy * v.dy
  }

  draw(context,x,y,scale,color){
    var height = 3;
    var arrowHeight = 7;
    var arrowWidth = 15;
    context.save();

    context.translate(x,y);
    context.rotate(this._angle);
    context.font = "20px Georgia";
    context.fillText(this.label,(scale*this.r)/2,-3*height);
    context.beginPath();
    context.fillStyle = color || "white";
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.moveTo(0 , 0);
    context.lineTo(0 , height);
    context.lineTo((this._r * scale) - arrowWidth , height);
    context.lineTo((this._r*scale) - arrowWidth , arrowHeight);
    context.lineTo((this._r * scale) , 0);
    context.lineTo((this._r * scale) - arrowWidth , -arrowHeight);
    context.lineTo((this._r * scale) - arrowWidth , -height);
    context.lineTo(0 , -height);
    context.lineTo(0 , 0);
    context.stroke();
    context.fill();
    context.closePath();
    context.restore();
  }
  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }

  substract(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }

  mulScalar(scal){
    this.dx *= scal;
    this.dy *= scal;
  }

  dot(vector){
    return this.dx * vector.dx + this.dy * vector.dy;
  }
}

class VectorOperations{
  _constructor(){
    //
  }

  addVectors(v,w){
    return new Vector2(v.dx + w.dx, v.dy+w.dy);
  }

  substractVectors(v,w){
    return new Vector2(v.dx - w.dx, v.dy-w.dy);
  }

}
