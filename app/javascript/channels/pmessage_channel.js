import consumer from "./consumer"

var audio = new Audio("https://notificationsounds.com/soundfiles/6364d3f0f495b6ab9dcf8d3b5c6e0b01/file-sounds-862-glitchy-language.wav");

consumer.subscriptions.create("PmessageChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
    $('#pmessages' + data.pconversation).prepend(
      '<div class="callout">' +
      data.username +
      " said: " +
      data.pmessage +
      '</div>'
    )
    audio.play();
  }
});
