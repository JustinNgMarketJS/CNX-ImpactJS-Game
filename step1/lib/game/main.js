ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.entities.background',
	'impact.font'
)
.defines(function(){

MyGame = ig.Game.extend({
	bg:null,
	tileImage:new ig.Image("media/assets/tile.png"),
	init: function() {
		
		this.bg = ig.game.spawnEntity(EntityBackground,0,0);

		ig.game.sortEntitiesDeferred();
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		if(this.bg){
			this.bg.setSpeed(200);
		}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
	}
});

ig.main( '#canvas', MyGame, 60, 640, 480, 1);

});
