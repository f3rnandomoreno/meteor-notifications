
Meteor.publish("kahon_notifications",function(){
    var notifications = Destinify.find({user_id:this.userId,hide:false}).map(function(d){d.notification_id})
    return Notifications.find({$or:[{all:true},{_id:{$in:notifications}}]})
});

Meteor.publish("kahon_read",function(){
    return Read.find({user_id:this.userId})
})