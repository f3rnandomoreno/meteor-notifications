Template.kahon_notifications.created = function(){
    Meteor.subscribe("kahon_notifications")
    Meteor.subscribe("kahon_read")
}

Template.kahon_notifications.helpers({
    notifications: function(){
        return Notifications.find({});
    },
    isRead: function(notification_id){
        return Read.find({notification_id: notification_id}).count()>0 ? "read":"unread";
    }
});

Template.kahon_notificationsDropDown.helpers({
    num_unread: function(){
        var read = Read.find({}).map(function(r){return r.notification_id})
        return Notifications.find({_id:{$nin: read}}).count();
    }    
});

Template.kahon_notifications.events = {
    "click .close": function(e,t){
        console.log(e)
        console.log(t)
        console.log(e.target.id)
        Meteor.call("hide",e.target.id)
    }
}