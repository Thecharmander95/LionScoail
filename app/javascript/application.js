// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import jquery from "jquery"
window.jQuery = jquery
window.$ = jquery
import "@hotwired/turbo-rails"

import foundation from "foundation-sites"

document.addEventListener("turbo:load", () => {
  $(document).foundation();
});
import "./controllers"
