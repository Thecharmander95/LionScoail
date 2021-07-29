import consumer from "./consumer"

import audio from "../audio/goes-without-saying-608.ogg";
var sound = new Audio(audio);

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
    // sound.play();
  }
});
