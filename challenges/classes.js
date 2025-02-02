
class CuboidMaker{
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker{
    constructor(cubeAttributes){
        super(cubeAttributes);
    }
    volume(){
        return this.length * this.width * this.height;
    }
    thisSurfaceArea(){
       return 6 * this.length ^2 ; 
    }
}


let cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});
let cube = new CubeMaker({
    length:4,
    width: 5,
    height: 4
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
///

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log(cube.thisSurfaceArea());
console.log(cube.volume());



