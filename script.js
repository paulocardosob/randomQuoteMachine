var colors = ['#16a085',
'#27ae60', '#2c3e50', '#f39c12',
'#e74c3c', '#9b59b6', '#FB6964',
'#342224', "#472E32", "#BDBB99",
"#77B1A9", "#73A857"];

var quote;

$(document).ready(function(){
  getQuote();
});

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(r) {
      $("#quote").html(r.quote);
      quote = r;

      $('#twitterIconAnchor').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote.quote));

      var color = Math.floor(Math.random() * colors.length);

      $("html body").animate({backgroundColor : colors[color], color : colors[color]}, 500);
      $("button").animate({backgroundColor : colors[color]}, 500);
    }
  });
}
