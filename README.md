# gif-page

I used the GIPHY API to make a dynamic web page that populates with gifs. I called the GIPHY API and used JavaScript and jQuery to change the HTML in my site.

I picked a topic: sports. I then created an array of strings, each one related to sports. I save it to a variable called "topics." My app takes the topics in this array and creates buttons in the HTML using a loop that appends a button for each string in the array.

When the user clicks on a button, the page grabs 10 static, non-animated gif images from the GIPHY API and places them on the page. When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it stops playing.

Under every gif, its rating is displayed (PG, G, so on), which is data provided by the GIPHY API.

Finally, a form was added to the page which takes the value from a user input box and adds it into the "topics" array. Then a function call takes each topic in the array and remakes the buttons on the page in order to show the new ones that get added.
