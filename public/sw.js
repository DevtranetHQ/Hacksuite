/// <reference lib="webworker" />

/**
 * @param {ServiceWorkerGlobalScope} self
 */
function serviceWorker(self) {
  self.addEventListener("install", function (event) {
    console.log("[ServiceWorker] Installed");
  });

  self.addEventListener("push", function (event) {
    if (event.data) {
      console.log("Push event!! ", event.data.text());
      showLocalNotification(event.data.text(), self.registration);
      refreshUnreadCount();
    } else {
      console.log("Push event but no data");
    }
  });

  self.addEventListener("notificationclick", function (event) {
    const clickedNotification = event.notification;
    clickedNotification.close();
    console.log(`notification clicked`, event);

    if (self.clients.openWindow) {
      const url = clickedNotification.data.link || `/app/notifications`;
      return self.clients.openWindow(url);
    }
  });

  /**
   * @param {string} body JSON stringified object
   * @param {ServiceWorkerRegistration} swRegistration
   * @returns {Promise<void>}
   */
  const showLocalNotification = (body, swRegistration) => {
    const notification = JSON.parse(body);
    return swRegistration.showNotification(notification.title, {
      body: notification.message,
      data: notification
    });
  };

  const refreshUnreadCount = () => {
    self.clients.matchAll({ type: `window` }).then(clientList => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === `/` && `postMessage` in client) {
          client.postMessage(`refreshUnreadCount`);
        }
      }
    });
  };
}

serviceWorker(self);
