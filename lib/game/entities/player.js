ig.module('game.entities.player')
.requires('impact.entity')
.defines(function(){
	EntityPlayer = ig.Entity.extend({
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		size:{x:112,y:156},
		zIndex:1,
		onGround:false,	
		maxVel:{x:1000,y:1000},
		currentVelX:0,
		animSheet: new ig.AnimationSheet( 'media/assets/player.png', 112, 156 ),
		init:function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('idle',1,[1]);
			this.addAnim('jump',1,[0]);
			this.addAnim('run',0.1,[2,3]);
			this.currentAnim=this.anims.idle;
		},
		update:function(){
			this.parent();
			if(this.pos.y > ig.system.height-this.size.y-ig.game.tileSize.y){
				this.pos.y = ig.system.height-this.size.y-ig.game.tileSize.y;
				this.onGround=true;

			}else{
				this.onGround=false;
			}
			if(this.onGround && ig.input.pressed('jump')){
				this.vel.y=-750;
			}
			if(this.vel.y<0){
				this.currentAnim=this.anims.jump;
			}else if(this.vel.y>0 && !this.onGround){
				this.currentAnim = this.anims.jump;
			}else if(this.currentVelX != 0){
				this.currentAnim=this.anims.run;
			}else{
				this.currentAnim =this.anims.idle;
			}
		},
		draw:function(){
			this.parent();
		},
		setState:function(state){
			switch(state){
				case "idle":
					this.currentVelX=0;
					this.currentAnim=this.anims.idle.rewind();
				break;
				case "jump":
					this.currentAnim=this.anims.jump.rewind();
				break;
				case "run":
					this.currentVelX=250;
				break;
			}
		}
	})
})