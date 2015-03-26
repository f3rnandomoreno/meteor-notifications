kahonNotification = {}
/**
* Create a Notification.
* @param {array} users_id - List of users that will be notified. [] value for all users.
* @param {string} title - The title of notification.
* @param {string} message - The information of notification
* @param {string} url - Url to redirect when client click on it
* @param {object} other - Any information addictional that developer want to use
*/
kahonNotification.create = function(users_id,title,message,url,other){

    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    // object to insert to database
    var notification = {}
    
    // if destionation is [], it is for all users
    if (users_id.length===0) {
        notification.all = true
    }else{
        notification.all = false
    }
    
    notification.title = title
    notification.message = message
    notification.url = url
    notification.other = other
    notification.createdAt = new Date()
    Notifications.insert(notification,function(error,_id){
        if (!error) {
            for(var i=0;i<users_id.length;i++){
                Destinify.insert({notification_id:_id,user_id:users_id[i]})    
            }
        }
        
    });
}
/**
 * Create a Notification.
 * @param {array} users_id - List of users that will be notified. [] value for all users.
 * @param {string} title - The title of notification.
 * @param {string} message - The information of notification
 * @param {string} url - Url to redirect when client click on it
 * @param {object} other - Any information addictional that developer want to use
 */

//Notification.create = function(users_id,title,message,url,other){
//    
//    // object to insert to database
//    var notification = {}
//    
//    // if destionation is [], it is for all users
//    if (users_id.length===0) {
//        notification.all = true
//    }else{
//        notification.all = false
//    }
//    
//    notification.title = title
//    notification.message = message
//    notification.url = url
//    notification.other = other
//    notification.createdAt = new Date()
//    Notification.insert(notification,function(error,_id){
//        if (!error) {
//            for(var i=0;i<users_id.length;i++){
//                Destinify.insert({notification_id:_id,user_id:users_id[i]})    
//            }
//        }
//        
//    });
//}