// setup variables
const walkAcceleration = 2.5; // how much is added to the speed each frame
const gravity = 0.5; // how much is subtracted from speedY each frame
const friction = 1.5; // how much the player is slowed each frame
const maxSpeed = 8; // maximum horizontal speed, not vertical
const playerJumpStrength = 12; // this is subtracted from the speedY each jump
const projectileSpeed = 8; // the speed of projectiles

/////////////////////////////////////////////////
//////////ONLY CHANGE ABOVE THIS POINT///////////
/////////////////////////////////////////////////

// Base game variables
const frameRate = 60;
const playerScale = 0.8; //makes the player just a bit smaller. Doesn't affect the hitbox, just the image

// Player variables
const player = {
  x: 50,
  y: 100,
  speedX: 0,
  speedY: 0,
  width: undefined,
  height: undefined,
  onGround: false,
  facingRight: true,
  deadAndDeathAnimationDone: false,
};

let hitDx;
let hitDy;
let hitBoxWidth = 50 * playerScale;
let hitBoxHeight = 105 * playerScale;
let firstTimeSetup = true;

const keyPress = {
  any: false,
  up: false,
  left: false,
  down: false,
  right: false,
  space: false,
};

// Player animation variables
const animationTypes = {
  duck: "duck",
  flyingJump: "flying-jump",
  frontDeath: "front-death",
  frontIdle: "front-idle",
  jump: "jump",
  lazer: "lazer",
  run: "run",
  stop: "stop",
  walk: "walk",
};
let currentAnimationType = animationTypes.run;
let frameIndex = 0;
let jumpTimer = 0;
let duckTimer = 0;
let DUCK_COUNTER_IDLE_VALUE = 14;
let debugVar = false;

let spriteHeight = 0;
let spriteWidth = 0;
let spriteX = 0;
let spriteY = 0;
let offsetX = 0;
let offsetY = 0;

// Platform, cannon, projectile, and collectable variables
let platforms = [];
let cannons = [];
const cannonWidth = 118;
const cannonHeight = 80;
let projectiles = [];
const defaultProjectileWidth = 24;
const defaultProjectileHeight = defaultProjectileWidth;
const collectableWidth = 40;
const collectableHeight = 40;
let collectables = [];

// canvas and context variables; must be initialized later
let canvas;
let ctx;

// setup function variable
let setup;

let halleImage;
let animationDetails = {};

var collectableList = {
  database: { image: "images/collectables/database.png" },
  diamond: { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhNaCb3KGf8idSRqMYgbH69rsxWaXIfJgXYMaihBGj0dce_0:https://img.freepik.com/premium-psd/green-circuit-board-with-red-circuit-board-it_943194-22700.jpg%3Fsemt%3Dais_hybrid&s" },
  grace: { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLK388HKlkfkCRWeL12pBLq94ZE5EwgFQSq737BBZMc_J9c-E:https://clipart-library.com/2023/320-3206104_speaker-wire-royalty-free-vector-clip-art-illustration.png&s" },
  kennedi: { image: "https://png.pngtree.com/png-clipart/20230319/original/pngtree-yellow-lightning-bolt-transparent-images-clipart-png-image_8995401.png" },
  max: { image: "images/collectables/grace-head.png" },
  steve: { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXcu9Z6XLIN0hVHCK9WjbIjitJUkVu99FSMK_D9K_svGKozaxwcmAIojA&s" },
};
