Your Portfolio Page
===

## Prerequisites

*   Students will require a GitHub account and will need to remember their GitHub username and password.
*   Students will require a Cloud9 account - they will login to Cloud9 using their GitHub credentials.
*   Students should have completed the 'Your First Website' lesson.

## Overview

### Specs

* At the end of the lesson students will have a basic understanding of Cascading Style Sheets (CSS) and added a Portfolio page to their website. 

### Take Away

*   Basics of Cascading Style Sheets (CSS)
*   Basic web page navigation
*   Using git and GitHub

### Work Flow

We're going to continue building out your website by adding a Portfolio page where you can show off your work. We'll also spruce up the site by further developing the design with CSS.

### Type of App

We are building a website, to be viewed live on the web at your GitHub page, and it will be viewed in a web browser, like Chrome.

### Intro to CSS

##### Cascading Style Sheets, or CSS, is what give websites style. Without CSS, the internet would be a very bland place.

Facebook with CSS:

![](https://github.com/OperationSpark/teacher-training-curriculum/raw/master/img/facebook-with-css.png)

Facebook without CSS:

![](https://github.com/OperationSpark/teacher-training-curriculum/raw/master/img/facebook-without-css.png)

Here are just a few things you can do with CSS:

*   Choose colors of everything on the page like the background, font, or main menu.
*   Set the size of any element such as font size, width of the entire site, or an image
*   Create borders or drop shadows around whole sites, images, and menus
*   Change the state of items when hovering over them

To make CSS work you select an HTML element and assign various properties to it.

One of the first things you might want to do on any site, if you're not satisfied with white, is to change the background color.

<div class="highlight highlight-css"><pre><span class="pl-ent">body</span> {
        <span class="pl-mp">background-color</span>: <span class="pl-sc">blue</span>;
}</pre></div>

We're selecting the body element, which encompasses the entire page, and setting the background color to blue. Body is a **selector** and the background-color is a **property**. Look over the formatting in that code.

We have:

*   The selector
*   A curly bracket
*   The property
*   A colon
*   The value of the property
*   A semicolon
*   A curly bracket

The spacing and indenting doesn't matter but it's best to format it like that for readability. Note that als

### Padding

Now we're going to start playing with padding. **Padding** is the amount space around content that is inside of an element. You can set padding on all four sides of an element.

Here's an example of padding around a div:

```CSS
div {
        padding-top: 20px;
        padding-right: 10px;
        padding-bottom: 5px;
        padding-left: 0;
    }
```

Remember that the div is the selector and there are four properties which apply to padding.

### Margins

A **margin** is the amount of space outside of an element. You can set it on all four side like padding.

## Classes and IDs

When you want to get more specific than all of the HTML elements across a site you use classes and IDs to do that. You will often want to apply styling to only certain HTML elements rather than all of them. In the above code examples we're selecting the`<h1>`and`<p>` elements. The CSS styling you applied will change the look of all of the`<h1>`and`<p>` elements across the site.

Classes in CSS are created with a period and the class name:

```CSS
.class-name {
    font-size: 20px;
}
```

## Setup

Open the Cloud 9 workspace where you were working on your website in the 'first website' lesson.

## Lesson Steps

### TODO 1 : Add Portfolio Page

* Right click in the file system and choose 'New File'
* Name that file`portfolio.html`
* Open the`index.html` file. Copy the entire contents of the file and paste it into`portfolio.html`
* Save the`portfolio.html` file

### TODO 2 : Change out CSS

* Remove all of the CSS in between the `<style>` tags and replace it with the below CSS:

```CSS
body {
    background: #7DC6CD;
    color: #454545;
    padding: 10px;
    font-family: arial;
}

p {
    width: 600px;
}

h1 {
    margin-top: 5px;
    margin-bottom: 5px;
}

/* Main container area beneath menu */
.container {
    max-width: 800px;
    margin: 0 auto;
    background: #F5EEDB;
}

/* Content area within conatiner */
.content {
    padding: 15px;
}

/* Main menu */
nav {
    background: #EF5029;
    height: 50px;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 20px;
}

nav ul {
    list-style-image: none;
    float: right;
}

nav ul li {
    display: inline;
    padding-right: 20px;
}

nav a {
    text-decoration: none;
    color: #fff;
}

/* Site Title */
nav h1 {
    float: left;
    margin-top: 13px;
    margin-left: 10px;
    font-size: 21px;
    color: #ffffff;
}

/* Portfolio page */
ul.portfolio {
    list-style-type: none;
    padding-left: 0;
}

ul.portfolio li {
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
}

ul.portfolio li:hover {
    background: #eee;
}

.portfolio a {
    text-decoration: none;
    color: #454545;
}
```


### TODO 3 : Remove and Add HTML

*   Remove the entire 'sidebar' div
*   Remove all of the content that's inside the 'content' div
*   Create a heading with the`<h1>` tag called 'My Work'
*   Create an unordered list with both a class and id of 'portfolio.' The items within this list will be added later.

Your HTML should look like:

```HTML
    <h1>My Work</h1>
    <ul id="portfolio" class="portfolio">

    </ul>  
```

### TODO 4 : Edit the CSS

Make sure you have the live preview window open on the portfolio page so you can see the changes you make in real time.

*   In the portfolio.html file, go to the top and find the CSS.
*   At the tip, under the `body` selector change the background color to `magenta`
*   Change the width of the `.container` element to 500px. Save the file and refresh the preview window if needed.
*   Change it back to 800px.

### Extra Credit

*   Google 'border radius' and add it to the `<nav>` element.
*   Add a border around the image
*   Change the color of the background

### Go Live

With [GitHub Pages](https://pages.github.com/), once you push your changes from your Cloud9 workspace up to your GitHub repository, your page will be live on the Internet.

To do so, you'll need to enter the following git commands into your bash terminal. Select the bash terminal in the Console View - the bottom window pane in Cloud9.

Enter the following commands, pressing ENTER after each one:

`git add .`

`git commit -m 'First commit'`

`git push`

Give it a couple minutes and you should be able to view your website live on the web at [http://username.github.io!](http://username.github.io%21/) (Where 'username' is your own username.)

You are LIVE ON THE INTERNET!