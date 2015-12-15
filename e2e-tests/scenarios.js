'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('The Single Page Blogger E2E Test', function() {

  browser.get('index.html'); //go to  http://localhost:8000/app

  it('Should have 4 posts', function() {
    var posts = element.all(by.repeater('post in posts'));
    expect(posts.count()).toBe(4);
  });

  it('Should redirect to #/posts/1/sample-title1', function() {
    element.all(by.css('h3.postTitle > a')).first().click();
    expect(browser.getLocationAbsUrl()).toMatch("/posts/1/simple-title1");
  });

});
