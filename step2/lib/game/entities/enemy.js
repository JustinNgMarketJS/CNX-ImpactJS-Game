ig.module('game.entities.enemy')
.requires('impact.entity')
.defines(function(){
	EntityEnemy = ig.Entity.extend({
		init:function(x,y,settings){
			this.parent(x,y,settings);
		},
		update:function(){
			this.parent();
		},
		draw:function(){
			this.parent();
		}
	})
})