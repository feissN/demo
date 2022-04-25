if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.js")
        .then(registration => {
            console.log("SW registered: ", registration);
        })
        .catch(registrationError => {
            console.log("SW registration failed: ", registrationError);
        });
}

document.querySelector("#send-notification").addEventListener("click", () => {
    Notification.requestPermission().then((result) => {
        console.log(result)
        if (result === 'granted') {
            randomNotification();
        }
    });
})
function randomNotification() {
    const notifTitle = "Notification Title";
    const notifBody = "Notification Body";
    const notifImg = "assets/img/notification.png";
    const options = {
        body: notifBody,
        icon: notifImg,
    };
    new Notification(notifTitle, options);
}