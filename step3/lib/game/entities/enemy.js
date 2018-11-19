ig.module('game.entities.enemy')
.requires('impact.entity')
.defines(function(){
	EntityEnemy = ig.Entity.extend({
		type:ig.Entity.TYPE.B,
		checkAgainst:ig.Entity.TYPE.A,
		maxVel:{x:1000,y:1000},
		size:{x:92,y:105},
		zIndex:1,
		gravityFactor:0,
		animSheet:new ig.AnimationSheet('media/assets/enemy.png',92,105),
		init:function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('idle',0.1,[0,1]);
			this.currentAnim=this.anims.idle;
		},
		update:function(){
			this.parent();

			this.vel.x=-250;
			
			if(this.pos.x+this.size.x<0){
				this.kill();
			}
		},
		draw:function(){
			this.parent();
		},
		check:function(other,axis){
			other.kill();
			ig.game.end=true;
		}
	})
})