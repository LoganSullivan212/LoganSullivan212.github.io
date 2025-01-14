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
  diamond: { image: "images/collectables/diamond-head.png" },
  grace: { image: "images/collectables/grace-head.png" },
  kennedi: { image: "images/collectables/kennedi-head.png" },
  max: { image: "images/collectables/max-head.png" },
  steve: { image: "image/jpeg;base64,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" },
};
