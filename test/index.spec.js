'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Browser = require('zombie');
const browser = new Browser();
const app = express();
const PORT = 7777;
const server = `http://localhost:${PORT}/portfolio.html`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../../')));
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

describe('Portfolio', function(){
  beforeEach(function(done) {
    browser.visit(server, done);
  });

  it('should have basic layout', function(done){
    browser.assert.elements('head', 1);
    browser.assert.elements('head > title', 1);
    browser.assert.elements('body', 1);
    browser.assert.elements('nav', 1);
    browser.assert.elements('main', 1);
    done();
  });

  it('should have basic layout for nav tag', function(done){
    browser.assert.elements('nav > header', 1);
    browser.assert.elements('nav > ul', 1);
    browser.assert.elements('nav > ul > li', 2);
    browser.assert.elements('nav > ul > li > a', 2);
    done();
  });

  it('should have basic layout for main tag', function(done){
    browser.assert.elements('main > div.content', 1);
    browser.assert.elements('main > div.content > h1', 1);
    browser.assert.elements('main > div.content > ul#portfolio', 1);
    done();
  });
});
