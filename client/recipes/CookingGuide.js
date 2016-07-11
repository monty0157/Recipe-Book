Template.CookingGuide.onCreated(function() {
	this.autorun(() => {
		this.subscribe('recipes');
	});
});

Template.CookingGuide.helpers({
	recipes: ()=> Recipes.find({inGuide: true})		
});
