 function Sprite(filename, left, top, right) {
     this._node = document.createElement("img");
     this._node.src = filename;
     this._node.style.position = "absolute";
     document.body.appendChild(this._node);

     Object.defineProperty(this, "left", {
         get: function () {
             return this._left;
         },
         set: function (value) {
             this._left = value;
             this._node.style.left = value + "px";
         }
     });

     Object.defineProperty(this, "top", {
         get: function () {
             return this._top;
         },
         set: function (value) {
             this._top = value;
             this._node.style.top = value + "px";
         }
     });
     Object.defineProperty(this, "display", {
         get: function () {
             return this._node.style.display;
         },
         set: function (value) {

             this._node.style.display = value;
         }
     });
     this.left = left;
     this.top = top;
 }
 Sprite.prototype.startAnimation = function (fct, interval) {
     if (this.clock) window.clearInterval(this._clock);
     var _this = this;
     this._clock = window.setInterval(function () {
         fct(_this);
     }, interval);
 };
 Sprite.prototype.stopAnimation = function () {
     window.clearInterval(this._clock);
 };
 /*
 Sprite.prototype.checkCollision = function (other) {
     return !((this.top + this._node.height < other.top) ||
         this.top > (other.top + other._node.height) ||
         (this.left + this._node.width < other.left) ||
         this.left > (other.left + other._node.width)
     );
 }*/

 var vaisseau1 = new Sprite("vaisseau_1.png", 700, 700);
 var alien1 = new Sprite("alien.png", 700, 600);
 var alien2 = new Sprite("alien1.png", 750, 600);
 var vaisseau3 = new Sprite("alien2.png", 800, 600);
 var vaisseau4 = new Sprite("alien3.png", 850, 600);
 var missile = new Sprite("missile.png", 500, 500);
 var ball = new Sprite("missile.bmp", 0, 0);

 missile.display = "none";
 window.addEventListener("keydown", deplacement);

 function deplacement(key) {
     if (key.keyCode == "37") {
         vaisseau1.left -= 10;

         if (vaisseau1.left < 0) {
             vaisseau1.left = 0;
         }

         //   vaisseau1.top -=10;
     } else if (key.keyCode == "38") {
         vaisseau1.top -= 10;
         if (vaisseau1.top < 0) {
             vaisseau1.top = 0;
         }


     } else if (key.keyCode == "39") {
         vaisseau1.left += 10;

         if (vaisseau1.left < 10) {
             vaisseau1.left = 0;
         }
     } else if (key.keyCode == "40") {
         vaisseau1.top += 10;

     } else {

     }
     if (key.keyCode == "32") {
         //if (missile.display == "none") {

         ball.display = "block";
         ball.left = vaisseau1.left + (vaisseau1._node.width - vaisseau1._node.width) / 2;
         ball.top = vaisseau1.top;


         var player = document.querySelector('#audioPlayer');
         player.play();


         //  missile.startAnimation(moveMissile, 20);
         ball.startAnimation(moveMissile, 10);

         // }
     }
     if (key.keyCode == "87") {
         missile.display = "block";
         missile.left = vaisseau1.left + (vaisseau1._node.width - missile._node.width) / 2;
         missile.top = vaisseau1.top;
         var i = 5;
         for (i; i > 0; i--) {

             missile.startAnimation(moveMissile, 100);
             if (i == 0) {
                 break;

             }

         }
     }


     function moveMissile(missile) {
         missile.top -= 10;
         if (missile.top < -40) {
             missile.stopAnimation();
             missile.display = "none";
         }
     }

     function moveAlienright(alien) {
         alien.left += 10;


     }



 }