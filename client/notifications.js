Template.kahon_notifications.created = function(){
    Meteor.subscribe("kahon_notifications")
    Meteor.subscribe("kahon_read")
}

Template.kahon_notifications.helpers({
    notifications: function(){
        return Notifications.find({},{sort:{createdAt:-1},limit:4});
    },
    readString: function(value){
        return value===true? "read":"unread";
    }
});

Template.kahon_notificationsDropDown.helpers({
    num_unread: function(){
        return Notifications.find({}).count();
    },
    showNum: function(){
        return Notifications.find({}).count() > 0;
    }
});

Template.kahon_notifications.events = {
    "click .close": function(e,t){
        Meteor.call("close",e.target.id)
        e.stopPropagation()
    },
    "click .unread":function(e,t){
        e.stopPropagation()
        console.log(e.currentTarget.id)
        console.log("e.target.id:" +e.target.id)
        Meteor.call("close",e.target.id)
    },
    "click .read":function(e,t){
        e.stopPropagation()
    }
}