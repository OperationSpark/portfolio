Your Portfolio Page
===

## Prerequisites

*   Students will require a GitHub account and will need to remember their GitHub username and password.
*   Students will require a Cloud9 account - they will login to Cloud9 using their GitHub credentials.
*   Students should have completed the <a href="https://github.com/OperationSpark/first-website/blob/master/README.md" target="_blank">'Your First Website' lesson.</a>

## Overview

### Specs

* At the end of the lesson, students will have a basic understanding of Cascading Style Sheets (CSS) and added a portfolio page to their website.  The portfolio page will list all of the projects we'll complete in our studies, and help begin a decent resume of your coding skills! 

### Take Away

*   Basics of Cascading Style Sheets (CSS)
*   Basic web page navigation
*   Using git and GitHub

### Work Flow

We're going to continue building out your website by adding a portfolio page where you can show off your work. We'll also spruce up the site by further developing the design with CSS.

To complete the assignment, below you'll find numbered **TODO** lesson steps. While reading this lesson, whenever you come across a TODO step, you are expected to implement this step, which may require you to create a file, or insert some HTML, CSS or JavaScript in the appropriate place. Please follow the instructions closely. Sometimes, however, we may be showing you code examples to make a point, so you only need to add code if we're explicitly telling you to do a lesson step, so please be aware of the actual lesson steps.

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

**Padding** is the amount space around content that is inside of an element. You can set padding on all four sides of an element.

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

By more concretely describing HTML elements by assigning an id or class, we can select those elements uniquely by their id or grouped by their class. You will often want to apply styling to only certain HTML elements rather than all of them. In the above code examples we're selecting the`<h1>`and`<p>` elements. The CSS styling you applied will change the look of all of the`<h1>`and`<p>` elements across the site.

Classes in CSS are created with a period and the class name:

```CSS
.class-name {
    font-size: 20px;
}
```

## Setup

Open the Cloud9 workspace where you were working on your website from the 'first website' lesson. The workspace should be named something like `myusername_github_io`

## Lesson Steps

### TODO 1 : Add Portfolio Page

* From the file system pane in Cloud9, within the root directory of your website, right click and choose `New File`
* Name that file `portfolio.html` and double-click on it to open it in the Cloud9 text editor.
* Finally, let's create the scaffolding HTML tags we need for any web page by adding the following HTML tags:

````HTML
<!DOCTYPE HTML>
<html>
    <head>
    </head>

    <body>
    </body>
</html>
````

Great, save the `portfolio.html` file.

### TODO 2 : Add a Title

Add a title tag within the `<head>` tag of the portfolio.html page.  Use the same title you used on your `index.html` page:

````HTML
    <head>
        <title>Sheba's Amazing Website</title>
    </head>
````

### TODO 3 : Add CSS

Let's add some style!  Under the `<title>` tag you just created in the last step, copy and paste in the following CSS, include the `<style></style>` tags:

```CSS
        <style type="text/css">
            body {
                background: rgb(125, 198, 205);
                color: rgb(45, 45, 45);
                padding: 10px;
                font-family: arial;
            }
            header {
                font-size: 1.5em;
                font-weight: bold;
            }
            h1 {
                margin: 10px;
            }
            #all-contents {
                max-width: 800px;
                margin: auto;
            }
    
            /* navigation menu */
            nav {
                background: rgb(239, 80, 41);
                margin: 0 auto;
                display: flex;
                padding: 10px;
            }
            nav header {
                display: flex;
                align-items: center;
                color: rgb(255, 255, 255);
                flex: 1;
            }
            nav ul {
                list-style-image: none;
            }
            nav li {
                display: inline-block;
                padding: 0 10px;
            }
            nav a {
                text-decoration: none;
                color: #fff;
            }
    
            /* main container area beneath menu */
            main {
                background: rgb(245, 238, 219);
                display: flex;
            }
            .content {
                flex: 1;
                padding: 15px;
            }
            
            /* portfolio styles */
            #portfolio {
                list-style-type: none;
                padding-left: 0;
            }
            
            #portfolio li {
                background: #fff;
                padding: 10px;
                border-radius: 10px;
                margin-bottom: 10px;
            }
            
            #portfolio li:hover {
                background: #eee;
            } 
            
            #portfolio a {
                text-decoration: none;
                color: #454545;
            }
        </style>
```

### TODO 4 : Add Navigation

Within the `<body>` tag, insert the following structure to create our navigation:

````HTML
        <nav>
            <header>Sheba's Glorious Website</header>
            <ul>
                <li><a href="index.html">Home</a>
                </li>
                <li><a href="portfolio.html">Portfolio</a>
                </li>
            </ul>
        </nav>
````

Here, we've added the same navigation on our home page, `index.html`.  It's common to have the same navigation options across an entire website, so the user can get to wherever from wherever!  Inside our `<nav>`, we have an unordered list, (`<ul>`), with 2 list items (`<li>`).  This list items contain anchor tags (`<a>`).  Anchor tags are the original hypertext - they allow us to link one web page to another web page.

The first part of the `<a>` tag requires the `href` attribute.  `href` stands for hypertext reference, and this value is the URL or file path to the page or file we want the browser to load when a user _clicks_ on our link.  The file paths `index.html` and `portfolio.html` are _relative_ paths, that is, they are relative in location to the file in which they occurr, in this case, the `portfolio.html` file.  Paths that include the full hard-drive location or an Internet domain are considered _absolute_ paths, as in, the full 

One way to think of relative vs absolute path is to describe where the person sitting next to you is located.

* Relative: "She's right next to me"
* Absolute: "She's in the Universe, in the Milky Way galaxy, on planet Earth, in the north west hemisphere, in North America, in the United States, in Louisana, in New Orleans, in the CBD, in some office building, on the 17th floor, in room 1701, sitting at the desk number 1".

Because we are able to relatively describe the location of the files to which we're linking in our website, we don't have to spell out their absolute path, and this is better for portability.  If we were to use absolute paths, but then move our website to another location, the absolute paths would change, and our links would break.

In example of describing where the person sitting next to you is located, if you both move to another room, the relative description stays the same, but the absolute description does not!

Ok, back to our nav links, the text between the start and tag `<a>HERE</a>` represents what the user will see on the web page as _clickable_.  In our nav, our anchor links use the text `Home` and `Portfolio`, but links can wrap images or divs or other HTML elements, making them _clickable_.

### TODO 5 : Create the Main Content

````HTML
        <main>
            <div class="content">
                <h1>Portfolio</h1>
                <ul id="portfolio" class="portfolio">
                </ul>
            </div>
        </main>
````

Above, we created an unordered list with both a class and id of 'portfolio.' The items within this list will be added later.



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
