import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
    $('#messages' + data.conversation).prepend(
      '<div class="callout">' +
      data.username +
      " said: " +
      data.message +
      '</div>'
    )
  }
});
