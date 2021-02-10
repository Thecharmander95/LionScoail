import consumer from "./consumer"

var audio = new Audio("https://proxy.notificationsounds.com/notification-sounds/goes-without-saying-608/download/file-sounds-1149-goes-without-saying.ogg");

consumer.subscriptions.create("MessageChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
    $('#messages' + data["conversation"]).prepend(
      '<div class="callout">' +
      data["username"] +
      " said: " +
      data["message"] +
      '</div>'
    )
    audio.play();
  }
});
