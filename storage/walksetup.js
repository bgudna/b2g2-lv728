class Walker {
    constructor(x,y,color,weight) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.weight = weight;
      }
    
      render() {
        stroke(this.color);
        strokeWeight(this.weight);
        point(this.x, this.y);
      }
    
      step() {
        let choice = floor(random(4));
        if (choice === 0) {
          this.x++ *4;
        } else if (choice == 1) {
          this.x-- *4;
        } else if (choice == 2) {
          this.y++ *4;
        } else {
          this.y-- *4;
        }
        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
      }
}
