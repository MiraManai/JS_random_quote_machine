/* version 1

$(document).ready(function(){
var myQuotes =['A discovery is said to be an accident meeting a prepared mind :)',
'To follow, without halt, one aim: Theres the secret of success :)',
'It is possible to fail in many ways...while to succeed is possible only in one way :)',
'Find somebody to be successful for. Raise their hopes. Think of their needs :)'];

$("#click_quote").click(function(){
var rand = myQuotes[Math.floor(Math.random() * myQuotes.length)];

        $(".quote-text span").html(rand);

    });
});
*/
/* version 2 */

const $ = window.$
$(document).ready(function () {
  var myQuotes = [
    {
      text: 'Aucun de nous, en agissant seul, ne peut atteindre le succès :)',
      author: 'Nelson Mandela'
    },
    {
      text: 'Le succès ne s"imite pas, il se crée :)',
      author: 'Luis Fernandez'
    },
    {
      text: 'Le succès est un mauvais professeur. Il pousse les gens intelligents à croire qu"ils sont infaillibles :)',
      author: 'Bill Gates'
    },
    {text: 'Une des clés du succès est la confiance en soi. Une des clés de la confiance en soi est la préparation :)',
      author: 'Arthur Ashe'
    }
  ]

  $('#click_quote').click(function () {
    var randomIndex = Math.floor(Math.random() * myQuotes.length)
    var text = myQuotes[randomIndex].text
    var author = myQuotes[randomIndex].author
    console.log(text, author)

    $('.quote-text span').html(text)
    $('.quote-author span').html(author)
  })

  $('.twitter-button').click(function () {
    var text = document.querySelector('.quote-text span').innerText
    var author = document.querySelector('.quote-author span').innerText

    window.open('https://twitter.com/intent/tweet?text=' + encodeURI(text + ' - ' + author))
  })
})
