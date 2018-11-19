ig.module('game.entities.background')
.requires('impact.entity')
.defines(function(){
	EntityBackground = ig.Entity.extend({
		size:{x:640,y:480},
		image:new ig.Image("media/assets/bg.png"),
		zIndex:0,
		speed:0,
		bgPosX:0,
		init:function(x,y,settings){
			this.parent(x,y,settings);
		},
		update:function(){
			this.bgPosX -= Math.floor(ig.system.tick * this.speed);
		},
		draw:function(){
			this.parent();
			var currX = this.bgPosX + this.pos.x;
			if(currX < -640){
				this.bgPosX = 0;
			}
			this.image.draw(currX, this.pos.y);
			this.image.draw(currX+this.size.x,this.pos.y);

			for(var i=0;i<20;i++){
				ig.game.tileImage.draw(currX + (i*ig.game.tileImage.height),this.pos.y+this.size.y-ig.game.tileImage.height);
			}
		},
		setSpeed:function(speed){
			this.speed=speed;
		}
	})
})