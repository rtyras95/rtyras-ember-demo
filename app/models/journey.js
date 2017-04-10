import DS from 'ember-data';

export default DS.Model.extend({
	country: DS.attr(),
	city: DS.attr(),
	date: DS.attr(),
	travellers: DS.attr(),
	description: DS.attr(),
	coordinates: DS.attr(),
	img: DS.attr()
});
