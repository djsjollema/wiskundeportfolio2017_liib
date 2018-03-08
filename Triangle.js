class Triangle {
  constructor(A,B,C) {
    this.A = A;
    this.B = B;
    this.C = C;
  }
  update(A,B,C){
    this.A = A;
    this.B = B;
    this.C = C;
  }
  draw(){
    context.beginPath();
    context.fillStyle = "aliceblue";
    context.moveTo(A.x,A.y);
    context.lineTo(B.x,B.y);
    context.lineTo(C.x,C.y);
    context.lineTo(A.x,A.y);
    context.stroke();
    context.fill();
    context.closePath();
    this.A.draw();
    this.B.draw();
    this.C.draw();
  }

  pointToBarycentricCoorinates(P){
    var ans = {};
    let v0 = new Vector2(this.B.x-this.A.x,this.B.y-this.A.y);
    let v1 = new Vector2(this.C.x-this.A.x,this.C.y-this.A.y);
    let v2 = new Vector2(P.x-this.A.x,P.y-this.A.y);

    let d00 = v0.dot(v0);
    let d01 = v0.dot(v1);
    let d11 = v1.dot(v1);
    let d20 = v2.dot(v0);
    let d21 = v2.dot(v1);

    let denom = d00*d11 - d01*d01;
    ans.v = (d11*d20 - d01*d21)/denom;
    ans.w = (d00*d21 - d01*d20)/denom;
    ans.u = 1 - ans.v - ans.w;
    return ans;
  }
}
