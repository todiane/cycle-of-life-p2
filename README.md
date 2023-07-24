# The Cycle Of Life Game

The Cycle Of Life Game is a game created in the style of rock, paper, scissors, lizard, spock. There are five options for the player to select - Human, Plant, Soil, Animal and Weather. The aim of the game is to select as many correct options as possible to beat the computer. A total of seven attempts are allowed before the game ends and decides the winner. The rules of the game are included on the index page and as well as winning or losing a player can also tie with the computer.

![Image of complete page](assets/images/cyclelife-rm-header.webp/)

The deployed site can be found [here](https://todiane.github.io/cycle-of-life-p2/) - press Ctrl (or Cmd) + mouse click to open in a new window

# Table Of Contents

- [Purpose](#purpose)

- [Project Goals](#project-goals)

- [Features](#features)

  - [Header](#header)
  - [Game Area](#game-area)
  - [Instructions](#instructions)
  - [Footer Area](#footer-area)

- [Website Pages](#website-pages)

- [Testing](#testing)

- [Validator Testing](#validator-testing)

- [Technologies Used](#technologies-used)

- [Unfixed Bugs](#unfixed-bugs)

- [Additional Features](#additional-features)

- [Deployment ](#deployment)

- [Credits](#credits)

- [Acknowledgements](#acknowledgements)

## Purpose

The purpose of The Cycle of Life game is to provide fun and entertainment to the user as they try to beat the computer. **This game suits a target audience of anyone aged 10 and up** who enjoys playing online games.
As a first time user the goal is to provide an opportunity for the player to actively engage with the site's data by initiating and controlling actions which displays feedback.

## Project Goals

- To build an interactive front-end website, using html5, CSS and JavaScript, that responds to a users’ actions.

- To create a game in line with user experience (UX and UI) teachings and ensure the game provided is easy to navigate.

- Provide clear instructions on how to play, start playing and exit the game.

- Provide ongoing and clear feedback on who is winning and why either the computer or player won.

- Provide up to seven chances for a player to win against the computer.

- Provide options and clear instructions on how to continue playing (or not) once the game is over.

- Have a seamless route from the game to the win, lose and thank you page and back again.

- Issue a 404 error warning if a player selects a page outside of the game.

## Features

### **Header**

![Image of game header](assets/images/cyclelife-header.png)

The header shows the name of the game and provides information on how to win the game.

### **Game Area**

![Image of game area](assets/images/cyclelife-gamearea.png)

The game area shows the score of the player and the computer and underneath that area is the game selection area where a player can select either Human, Plant, Soil, Animal or Weather. Instructions are provided on how to start the game so the player understands that the game only starts once they have made their first selection. This provides the user with clear instructions on how to begin.

Once a selection has been made the player is informed of the result (win or lose) and the selection the computer made, ensuring the user is aware of what is happening at all times.

![Image of results](assets/images/cyclelife-rm-result.png)

### **Instructions**

![Image of instructions area](assets/images/cyclelife-rm-rules.png)

Under the game area are instructions/rules on which element wins or loses against the other. This ensures the user will be clear about how to play.

There are also instructions on how to restart the game before a winner is selected using the refresh button.

### **Footer Area**

![Image of footer area](assets/images/cyclelife-footer.webp)

Under the game instructions area and outside of the main game area is the footer which includes links to social media networks.

## **Website Pages**

As well as the main game area, the following webpages are also deployed at the end of the game:

**_Win Page_**

This page displays if the player wins the game and provides an oportunity for them to play again or exit the game. The social media buttons are also present. The user is informed that they have won and that there is an opportunity to play again or exit the game.

![Image of winner page](assets/images/cyclelife-winner.png)

**_Lose Page_**

This page displays if the player loses the game and provides an oportunity for them to play again or exit the game. The social media buttons are also present. The user is informed that they have lost and that there is an opportunity to play again or exit the game.

![Image of you lose page](assets/images/cyclelife-lose.webp)

**_Thank You Page_**

This page displays if the player selects the NO button on either the winner or lose pages. It also provides a final opportunity to play the game again. The social media buttons are also present. This page makes it clear that the user is no longer playing the game. It also offers the opportunity for them to change their mind and play again.

![Image of thanks page](assets/images/cyclelife-thanks.webp)

**_Error Page_**

This 404 error page has been created to display if the player selects an invalid page. The social media buttons are also present. The user is presented with a button that will return them to the main game area.

![Image of 404 Error page](assets/images/error-rm-image.png)

**Favicon**

A favicon appears in the users tabbed browser. This lets any user with multiple tabs open easily identify where the game is so they can return to it.

![Image of favicon](assets/images/cyclelife-rm-favicon.png)

## **Testing**

- The website has been tested to work in different browers including Chrome, Firefox and Edge.

- The @media code has been added and tested to ensure the game keeps its structure at the lowest screen size.

- The link from the game to the winner and loser pages has been tested along with the buttons on each page to ensure they go to the correct place.

- The link to the thank you page from the win and lose pages has been tested along with the button to return to the game that is available on the thank you page.

- All links to external pages in the social media footer have been checked and open in a new window.

- I tested that all parts of the game work including the score area and game selection area plus the additonal webpages and their buttons.

- I tested that the instructions were easy to understand for a 10 year old, by asking my grand daughter.

## **Validator Testing**

**_Javascript_**

The Javascript was run through JS Hint Javascript Validator - https://jshint.com/
Two unused variables were detected and removed.

**_HTML_**
The HTML code was run through W3C Validator and found duplicate IDs for game images, id="imgChoice" on line 34 of index page. This was updated to include imgChoice1 and imgChoice2 plus the CSS file was updated to include the same image size instructions. There were also a couple of stray end divs to remove.

Once completed no other errors were found when the code was entered into the validator
![W3C Validator](assets/images/cyclelife-htmlvalidate.webp)

**_CSS_**
No errors were found when the code was entered into the official CSS Jigsaw validator

![Image of CSS Jigsaw validator](assets/images/cyclelife-cssvalidate.webp/)

**_Accessibility_**

The site was run through the DevTools Lighthouse section and given a 98% score for accessibility.

![Image of Lighthouse score](assets/images/cyclelife-lighthouse.webp/)

## **Technologies Used**

The technologies and programs used to create this game include:

- CSS3
- HTML5
- JavaScript

- Canva to create images
- Codeanywhere
- Font Awesome
- GitHub
- Google Fonts

## **Unfixed Bugs**

No unfixed bugs to report.

## **Additional Features**

There is an opportunity to have the winner and loser results appear on the index page, rather than on two separate pages.

The JavaScript code can be re-written so the computer can be beaten within five attempts and this challenge can be offered as a “beat the computer” advanced challenge.

## **Deployment**

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the repositories on the right and click on the relevant one to open up the project.
- Go to Settings tab and then down to the tab called Pages.
- From the source section drop-down menu, select "Deploy from a branch".
- Directly under is Branch. Select "main" and "root" then click on save.
- A few minutes later GitHub will provide a link to the live site which indicates successful deployment.

The live link for this game can be found here - <https://todiane.github.io/cycle-of-life-p2/>

## **Credits**

The Cycle of Life footer structure has been created using html and css code elements from the Code Institute Love Running website. The Love Running three page website has been recreated for this project. <https://code-institute-org.github.io/love-running-2.0/index.html>

Photos used in the game and on all website pages were created by me using Canva.

Emojis found at https://unicode.org/emoji/charts/full-emoji-list.html and https://emojipedia.org/seedling/

Sticky Footer html/css from - <https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/>

Free Code Camp - used code to allow for capitalization of word in game area - https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript

## **Acknowledgements**

My mentor Andre Aquilina for his support with javascript throughout my project. This game was originally in the style of rock, paper and scissors but my mentor encouraged me to add two additional items and work out how to include them using less code. I originally had a full if/else statement for my game options but knew it was too long and with his support (by asking me what alternatives I thought could be used) I thought about an array but settled on a conditional statement.

Members of Code Institute Slack group for their help and advice.
