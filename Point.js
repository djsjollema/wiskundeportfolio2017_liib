class Point {
  constructor(x, y, r, color,label) {
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color || "red";
    this.label = label || "" ;
  };

  draw(canvas) {
    context.beginPath();
    context.fillStyle = this.color;
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    context.stroke();
    if(this.color != "trans"){
      context.fill();
    }
    context.closePath();
    if(this.label != ""){
      context.fillStyle = "black";
      context.font = "20px Georgia";
      context.fillText(this.label,this.x-3,this.y - this.r-5)
    }
  }

  distance(P){
    let dx = P.x - this.x;
    let dy = P.y - this.y;
    return Math.sqrt(dx*dx+dy*dy);
  };

  drag() {
    let dragStatus = false;
    let rect = canvas.getBoundingClientRect();
    let mousePosition = {};

    addEventListener("mousedown", (evt) => {
      mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };

      if (this.distance(mousePosition) < this.r) {
        dragStatus = true;
      } else {
        dragStatus = false;
      }
    });

    addEventListener('mousemove',(evt)=>{
      mousePosition = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      }

      if(this.distance(mousePosition)<this.r){
        canvas.style.cursor = 'pointer';
        evt.stopImmediatePropagation();
      } else {
        canvas.style.cursor = "default";
      }

      if(dragStatus){
        this.x = mousePosition.x;
        this.y = mousePosition.y;
      };
    });

    addEventListener("touchstart", (evt) => {
      evt.preventDefault();
      mousePosition = {
        x: evt.touches[0].clientX - rect.left,
        y: evt.touches[0].clientY - rect.top
      }

      if (this.distance(mousePosition) < this.r+50) {
        dragStatus = true;
      } else {
        dragStatus = false;
      }
    });

    addEventListener('touchmove',(evt)=>{
      evt.preventDefault();
      mousePosition = {
        x: evt.touches[0].clientX - rect.left,
        y: evt.touches[0].clientY - rect.top
      }

      if(dragStatus){
        this.x = mousePosition.x;
        this.y = mousePosition.y;
      }
    });

    addEventListener('mouseup',()=>{
      dragStatus = false;
    })

    addEventListener('touchend',(evt)=>{
      dragStatus = false;
    })
  }
}
