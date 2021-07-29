import consumer from "./consumer"

import audio from "../audio/goes-without-saying-608.ogg";
var sound = new Audio(audio);

consumer.subscriptions.create("RoomChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
    $('#room_messages' + data["room"]).prepend(
      '<div class="callout">' +
      data["username"] +
      " said: " +
      data["message"] +
      '</div>'
    )
    // sound.play();
  }
});
