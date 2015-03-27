Notifications = new Mongo.Collection("kahon_notifications");
Read = new Mongo.Collection("kahon_read");

/*
 * I wanted to use a field in Notifications object collection called: detiny
 * but the only mongo function allowed to do a good publishing is $eq. This
 * function is for mongodb 3.0 higher version and it is not good for me.
*/
Destinify = new Mongo.Collection("kahon_destinify");

Read.allow({
  insert: function (userId, read) {
    return userId === Meteor.userId();
  }
});
Destinify.allow({
  update: function(userId,dest){
    return userId === Meteor.userId();
  }  
});