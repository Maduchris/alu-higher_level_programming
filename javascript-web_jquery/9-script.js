#!/usr/bin/node
$(document).ready(() => {
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', (data) => {
    $('DIV#hello').text(data.heloo);
  });
});
