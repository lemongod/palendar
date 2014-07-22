CalEvents = new Meteor.Collection("calevents");
Session.setDefault("editing_calevent", true);
Session.setDefault("showEditEvent", false)
Meteor.Router.add({
  '/':'homepage',
  '/calendar':'calendar'
})