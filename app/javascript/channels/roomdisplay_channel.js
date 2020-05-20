import consumer from "./consumer"

consumer.subscriptions.create("RoomdisplayChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#rooms').prepend(
      data.message 
    )
  }
});
