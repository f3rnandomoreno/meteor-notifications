kahonNotification = {}

/*Auxiliar functions*/
upsertNotification = function(notification,user_id){
    notification.user_id = user_id
    Notifications.insert(notification)
}

/**
* Create a Notification.
* @param {array} users_id - List of users that will be notified. [] value for all users.
* @param {string} title - The title of notification.
* @param {string} message - The information of notification
* @param {string} url - Url to redirect when client click on it
* @param {object} other - Any information addictional that developer want to use
*/
kahonNotification.create = function(users_id,title,message,url,other){

    this.unblock;
    
    
    // object to insert to database
    var notification = {}
    
    notification.title = title
    notification.message = message
    notification.url = url
    notification.other = other
    notification.read = false
    notification.closed = false
    notification.createdAt = new Date()
    
    // if destionation is [], it is for all users
    // TODO: mirar si el insert puede insertar arrays de objetos para hacer solo
    // un acceso a base de datos
    if (users_id.length===0) {
        Meteor.users.find({}).forEach(function(u){
            notification.user_id = u._id
            Notifications.insert(notification)
        })
    }else{
        for(var i=0;i<users_id.length;i++){
            notification.user_id = users_id[i]
            Notifications.insert(notification)
        }
    }
    
}

kahonNotification.close = function(query){
    
    this.unblock;
    
    Notifications.update(query,{$set:{closed:true}},{ multi: true },function(error,nums){
        debug("error:" + error)
        debug("nums:" + nums)
    })
}

Meteor.methods({
    close: function(notification_id){
        Notifications.update({_id:notification_id},{$set:{closed:true}})
    },
    read: function(notification_id){
        console.log("read:::::notification_id:" +notification_id )
        Notifications.update({_id:notification_id},{$set:{read:true}})    
    }
});