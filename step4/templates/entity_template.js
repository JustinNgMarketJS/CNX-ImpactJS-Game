ig.module('game.entities.test')
.requires('impact.entity')
.defines(function(){
	EntityTest = ig.Entity.extend({
		
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