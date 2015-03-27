
Meteor.publish("kahon_notifications",function(){
    return Notifications.find({user_id:this.userId,closed:false})                              
});
