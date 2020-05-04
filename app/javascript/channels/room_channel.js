import consumer from "./consumer"

var audio = new Audio("https://notificationsounds.com/soundfiles/c3992e9a68c5ae12bd18488bc579b30d/file-sounds-1143-clearly.mp3", "https://notificationsounds.com/soundfiles/c3992e9a68c5ae12bd18488bc579b30d/file-sounds-1143-clearly.ogg", "https://notificationsounds.com/soundfiles/c3992e9a68c5ae12bd18488bc579b30d/file-sounds-1143-clearly.wav");

consumer.subscriptions.create("RoomChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
    $('#room_messages' + data.room).prepend(
      '<div class="callout">' +
      data.username +
      " said: " +
      data.message +
      '</div>'
    )
    audio.play();
  }
});
