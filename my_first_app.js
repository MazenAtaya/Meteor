Tags = new Mongo.Collection("tags");

if (Meteor.isClient) {

  Template.body.helpers({
    tags: function () {
      return Tags.find({});
    }
  });

  Template.body.events({
    "submit .new-tag": function (event) {
      // This function is called when the new tag form is submitted

      var name = event.target.name.value;

      Tags.insert({
        name: name,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.name.value = "";

      // Prevent default form submit
      return false;
    }
  });

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
