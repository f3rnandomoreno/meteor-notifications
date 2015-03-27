Template.kahon_notifications.created = function(){
    Meteor.subscribe("kahon_notifications")
    Meteor.subscribe("kahon_read")
}

Template.kahon_notifications.helpers({
    notifications: function(){
        return Notifications.find({});
    },
    readString: function(value){
        return value===true? "read":"unread";
    }
});

Template.kahon_notificationsDropDown.helpers({
    num_unread: function(){
        var read = Read.find({}).map(function(r){return r.notification_id})
        return Notifications.find({_id:{$nin: read}}).count();
    },
    showNum: function(){
        var read = Read.find({}).map(function(r){return r.notification_id})
        return Notifications.find({_id:{$nin: read}}).count() > 0;
    }
});

Template.kahon_notifications.events = {
    "click .close": function(e,t){
        Meteor.call("close",e.target.id)
        e.stopPropagation()
    },
    "click .unread":function(e,t){
        console.log(e.currentTarget.id)
        console.log("e.target.id:" +e.target.id)
        Meteor.call("read",e.currentTarget.id)
        e.stopPropagation()
    },
    "click .read":function(e,t){
        e.stopPropagation()
    }
}