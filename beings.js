class Being {
    constructor(x, y, name, race, health, stamina, isDead) {
        this.pos = createVector(x, y);
        this.name = name;
        this.race = race;
        this.health = health;
        this.stamina = stamina;
        this.isDead = isDead;
    }

    render() {
        stroke(255);
        strokeWeight(1);
        point(this.x, this.y);
    }

    movement() {
        //add later
    }
    update() {
        
    }
}