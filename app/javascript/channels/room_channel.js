import consumer from "./consumer"

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
  }
});
