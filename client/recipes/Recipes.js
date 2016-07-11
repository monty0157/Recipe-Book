Template.R.onCreated(function() {
	this.editMode = new ReactiveVar(false);
});

Template.Recipes.onCreated(function() {
	this.autorun(() => {
		this.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes: ()=> Recipes.find({})		
});


Template.R.events({
'click .toggle-menu'() {
	Meteor.call('toggleMenuItem', this._id, this.inMenu)
	},
	'click .fa-trash'() {
		Meteor.call('deleteRecipe', this._id)
	},
	'click .fa-pencil'(event, template) {
		template.editMode.set(!template.editMode.get());
	},
	'click .toggle-guide'() {
		Meteor.call('toggleGuideItem', this._id, this.inGuide)
	}
});

Template.R.helpers({
	updateRecipeId() {
	return this._id;		
	},
	editMode() {
		return Template.instance().editMode.get();
	}
});