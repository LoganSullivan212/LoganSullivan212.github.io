$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);}
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */
    // drawGrid();
    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(0,700,200,50);
createPlatform(200,697,100,50);
createPlatform(300,694,100,1000);
createPlatform(200,500,0.1,100);
createPlatform(600,600,100,500);
createPlatform(500,697,100,50);
createPlatform(500,500,100,10);
createPlatform(700,500,100,300);
createPlatform(100,0,0.1,600);
createPlatform(100,150,50,0.1);
createPlatform(150,200,50,0.1);
createPlatform(200,250,50,0.1);
createPlatform(250,300,50,0.1);
createPlatform(300,350,50,0.1);
createPlatform(350,400,50,0.1);
createPlatform(400,450,50,0.1);
createPlatform(450,500,50,0.1);

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable("diamond",900,400,1,1);
createCollectable("kennedi",530,400,0.1,0.9);
createCollectable("grace",100,600,1,1);
createCollectable("database",110,90,0,0);
createCollectable("steve",1310,700,0,0);
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon("right", 750,7000,30,30);
createCannon("right", 500,3000,30,30);
createCannon("bottom", 500,5000,30,30)
 
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }
  registerSetup(setup);
});