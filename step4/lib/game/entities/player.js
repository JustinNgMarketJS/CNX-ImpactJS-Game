ig.module('game.entities.player')
.requires('impact.entity')
.defines(function(){
	EntityPlayer = ig.Entity.extend({
		type:ig.Entity.TYPE.A,
		size:{x:112,y:156},
		zIndex:1,
		onGround:false,	
		maxVel:{x:1000,y:1000},
		currentVelX:0,
		animSheet: new ig.AnimationSheet( 'media/assets/player.png', 112, 156 ),
		init:function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('jump',1,[0]);
			this.addAnim('run',0.1,[2,1]);
		},
		update:function(){
			this.parent();
			
			this.onGroundCheck();
			this.inputCheck();
			this.stateCheck();
		},
		draw:function(){
			this.parent();
		},

		onGroundCheck:function(){
			var groundPosY = ig.system.height-this.size.y-ig.game.tileImage.height;
			if(this.pos.y > groundPosY){
				this.pos.y = groundPosY;
				this.onGround=true;
			}else{
				this.onGround=false;
			}
		},

		setState:function(state){
			switch(state){
				case "jump":
					this.currentAnim=this.anims.jump;
				break;
				case "run":
					this.currentAnim = this.anims.run;
				break;
			}
		},

		inputCheck:function(){
			if(this.onGround && ig.input.pressed('jump')){
				this.vel.y=-750;
			}
		},
		stateCheck:function(){
			if(this.vel.y<0){
				this.setState('jump');
			}else if(this.vel.y>0 && !this.onGround){
				this.setState('jump');
			}else{
				this.setState('run');
			}
		},
		run:function(){
			this.currentVelX=250;
		}
	})
})