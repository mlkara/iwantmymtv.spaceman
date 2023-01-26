Before You Begin
Complete the following steps prior to getting started:

1. Star this repo in order to save it to your bookmarks.
2. Visit the README gold standards:
P1 Simon
P2 Review My Project
P3 GA HW Tracker
P4 Meet Your Classmates
3. Complete the following Introduction to Markdown tutorial (10 mins):
Markdown Tutorial
4. Read (skim) through the official GitHub Flavored Markdown documentation:
GitHub Flavored Markdown Spec
Header
Requirements:

A banner representing your app
Description	Screenshot
Example Header

Copy and paste the following:
<div id="header" align="center">

  <img src="https://i.imgur.com/y2SPx4E.jpg" width="800" height="400">

</div>
Tips - Header
Royalty-free stock photos can be found on Pexels, Pixabay, or Unsplash.
Use a free photo editing tool like Photopea to streamline the editing process by importing images from URLs and exporting your finished banner directly into imgur.
Description
Requirements:

App name
What problem the app solves and how
How to win (if app is a game)
Description	Screenshot
Example Description

Copy and paste the following:
  <div id="description" align="center">

  # Meet Your Classmates

  ### [CLICK TO DEMO](https://meetyourclassmates.herokuapp.com/)

  ##### Amar Pan

  [![LinkedIn Badge](https://img.shields.io/badge/-@profpan396-blue?style=flat&logo=Linkedin&logoColor=black)](https://www.linkedin.com/in/profpan396/)

  ## :pencil: Description

  Meet Your Classmates is a hub where students can get to know and relate to their peers via completion of short 3-question
  mini-surveys. By learning about others' backgrounds, previous experiences, and
  interests, an atmosphere of community is created that is conducive to higher
  levels of learning and success.

  </div>
Tips - Description
Add your deployed link directly to the top - most users won't scroll all the way down to find it.

Use emojis by typing in :emojiname:

a. Visit the following resource for a full list of available GitHub emojis:

GitHub Emojis Cheat Sheet.
In version 1.0 of this tutorial, I suggested to add emojis around your h1 tag. However, this is bad practice for Search Engine Optimization (SEO).

Note:
Install the following extension to see GitHub emojis in VS Code:

Markdown Emoji
Screenshots
Requirements:

Screenshots of your app's home page and any other pages of interest
Description	Screenshot
Example Screenshots

Copy and paste the following:
  ## :camera_flash: Screenshots 

  |   Description | Screenshot | 
  |:-------------:| -----------|
  | <h3>Feed Page</h3> | <img
    src="https://github.com/profpan396/meet-your-classmates/blob/main/public/Screenshots/FeedPage.png?raw=true"
    width="700"
  /> |
  | <h3 align="center">Profile Page</h3> | <img
  src="https://github.com/profpan396/meet-your-classmates/raw/main/public/Screenshots/ProfilePage.png"
  width="700"
  /> |
Tips - Screenshots
Whatever is placed in between <details></details> will be hidden beneath a closed drop-down menu until its arrow is clicked on. The caption for this should be placed in between <summary></summary>.
To have a drop-down menu display as open by default, (without the user having to click it) add the word 'open' to the details tag.
Technologies Used
Requirements:

List of the technologies used
Description	Screenshot
Example Technologies Used

Copy and paste the following:
  ## :computer: Technologies Used
  A screenshot of your app's landing page and any other screenshots of interest.

  ![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb)
  ![Express](https://img.shields.io/badge/-Express-05122A?style=flat&logo=express)
  ![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)
  ![Node](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js)
  ![Semantic UI React](https://img.shields.io/badge/-Semantic%20UI%20React-05122A?style=flat&logo=semanticuireact)
  ![AWS S3](https://img.shields.io/badge/-AWS_S3-05122A?style=flat&logo=amazons3)
  ![JWT](https://img.shields.io/badge/-JSON_Web_Tokens-05122A?style=flat&logo=jsonwebtokens)
  ![Mongoose ODM](https://img.shields.io/badge/-Mongoose_ODM-05122A?style=flat&logo=mongodb)
  ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
  ![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
  ![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3)
  ![Trello](https://img.shields.io/badge/-Trello-05122A?style=flat&logo=trello)
  ![Heroku](https://img.shields.io/badge/-Heroku-05122A?style=flat&logo=heroku)
  ![Canva](https://img.shields.io/badge/-Canva-05122A?style=flat&logo=canva)
  ![Markdown](https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown)
  ![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
  ![Github](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
  ![VSCode](https://img.shields.io/badge/-VS_Code-05122A?style=flat&logo=visualstudio)
  ![Vim](https://img.shields.io/badge/-Vim-05122A?style=flat&logo=vim)
  ![Python](https://img.shields.io/badge/-Python-05122A?style=flat&logo=python)
  ![Django](https://img.shields.io/badge/-Django-05122A?style=flat&logo=django)
  ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=postgresql)
  ![Materialize CSS](https://img.shields.io/badge/-Materialize_CSS-05122A?style=flat&logo=materialdesign)
Tips - Technologies Used
Additional badges of this style can be found at the following resource:
Shields.io Website
Alternative badges of a more colorful style can be found at the following resource:
Badges 4 README
Getting Started
Requirements:

A link to the deployed app
A link to the Trello board used for the project's planning that includes:
a. user stories
b. wireframes
c. entity relationship diagram (ERD)
Description	Screenshot
Example Getting Started

Copy and paste the following:
## :fire: Getting Started

<details open>
  <summary> How to Create a Post </summary>
    1. Type in your answers to each of the 3 randomly-generated mini-survey questions.
    2. Click on "Add Survey" to post your responses so others may see them.
    3. Click on the "X" in the bottom-right corner to delete a post.
</details>

<details>
  <summary> How to Interact With Others' Posts </summary>
    1. Posts may be "liked" or "disliked" by clicking on the thumbs up or down button on their card.
    2. To reveal the author of a post, hover over the `Who could it possibly be?` button.
    3. To see more posts by the same user, click on the revealed username and profile picture.
</details>

<details open>
  <summary> Trello Board </summary>
  <a href="https://trello.com/b/x4ViComX/meet-your-classmates-project-4"
    > https://trello.com/b/x4ViComX/meet-your-classmates-project-4 </a
  >
</details>

<details open>
  <summary> Deployed Link (Heroku) </summary>
  <a href="https://meetyourclassmates.herokuapp.com/"
    > https://meetyourclassmates.herokuapp.com/ </a
  >
</details>
Tips - Getting Started
Use numbered lists as opposed to lengthy paragraphs to make sure this section is easily readable.
Put your links in more drop-down menus using <details open> and <summary>.
Try to choose something simple yet memorable when choosing your URL / link name.
Upcoming Features
Requirements:

Planned future enhancements (icebox items)
Description	Screenshot
Example Upcoming Features

Copy and paste the following:
## :satellite: Upcoming Features

- [:star:] Animations on sliding buttons

- [:x:] Comment functionality on posts to encourage discussion

- [:x:] ~~Tinder API Integration~~
Tips - Upcoming Features
Avoid using the word icebox, as most non-technical users probably won't know what this means.
Use bullet points rather than paragraphs to make it immediately clear what each new feature would be.
Just for fun, add an easter egg joke using double tildes (~~) for a crossout
The Final Product
Description	Screenshot
Example Final Product

