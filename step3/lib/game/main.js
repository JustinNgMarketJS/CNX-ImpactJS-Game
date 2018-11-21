ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.entities.background',
	'game.entities.player',
	'game.entities.enemy',
	'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({
	bg:null,
	gravity:800,
	player:null,
	start:false,
	enemyTimer:null,
	tileImage:new ig.Image("media/assets/tile.png"),
	
	end:false,
	init: function(){
		this.enemyTimer=new ig.Timer();
		this.bg = ig.game.spawnEntity(EntityBackground,0,0);
		ig.input.bind(ig.KEY.UP_ARROW,'jump');
		ig.input.bind(ig.KEY.W,'jump');
		this.player = ig.game.spawnEntity(EntityPlayer,0,0);
		ig.game.sortEntitiesDeferred();
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		if(ig.input.pressed('jump')){
			console.log('jump')
		}
		if(this.bg){
			this.bg.setSpeed(200);
			if(this.enemyTimer && this.enemyTimer.delta()>5){
				var enemySizeY=105;
				ig.game.spawnEntity(EntityEnemy,640,480-enemySizeY-this.tileImage.height);
				ig.game.sortEntitiesDeferred();
				this.enemyTimer.reset();
			}
			

			if(!this.start && this.player.onGround){
				this.player.run();
				this.bg.setSpeed(this.player.currentVelX);
				this.start=true;
			}
		}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
	}
});

ig.main( '#canvas', MyGame, 60, 640, 480, 1);

});
