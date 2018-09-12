import * as firebase from 'firebase';
import { Permissions, Notifications } from 'expo';

export const registerForPushNotificationsAsync= async() => {
    settings = {}
    try{
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        // only ask if permissions have not already been determined, because iOS won't necessarily prompt the user a second time.
        if (existingStatus !== 'granted') {
            // Android remote notification permissions are granted during the app install, so this will only ask on iOS
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted')
            settings['token'] = ''
        else{
            // Get the token that uniquely identifies this device
            let token = await Notifications.getExpoPushTokenAsync();
            settings['token'] = token
        }
        settings['status'] = finalStatus
    }
    catch(e){
        settings['token'] = '' 
        settings['status'] = ''
        console.log('error notification ',e)
    }
    return settings;
}

export const updateNotificationSettingUser = (settings,appId) => {
    firebase.database().ref('users/'+appId).update({settings})
    .then(() => {})
    .catch(error => {console.log('Data could not be saved.' + error)});
}

export const sendPushNotification = (token, title, body) => {
    return fetch('https://exp.host/--/api/v2/push/send', {
      body: JSON.stringify({
        to: token,
        title: title,
        body: body,
        data: { message: `${title} - ${body}` },
        sound: "default",
        icon: "/assets/images/lionIcon180-180.png",
        android:{
            icon: "/assets/images/lionIcon180-180.png",
            sound:"default"
        }
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
}

export const getUserTokenNotification = async(appId) =>{
  let ref = firebase.database().ref('users/'+appId+'/settings')
  let userToken = false
  await ref.once('value', 
    snapshot => {
      let settingsRes = snapshot.val()
      if (settingsRes && settingsRes.token !=='')
        userToken = settingsRes.token
    })
    .catch(error => {console.log('Error ' + error);})
  return userToken
}