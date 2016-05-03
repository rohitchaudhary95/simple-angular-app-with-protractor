describe('News Page', function() {
  
  var link = element(by.id('link'));  

  beforeEach(function() {
    browser.get('http://localhost/index.html#/news');
  });

  it('check the title', function() {
    expect(browser.getTitle()).toEqual('Currency Exchange and News | By Naveen Singh');
  });

  it('modal open', function() {
    link.click();
    expect(element(by.className('news')).isDisplayed()).toBe(true);
  });

  it('modal close', function() {
    link.click();
    var btn = element(by.id('closebtn'));
    btn.click();
    expect(element(by.className('all_news')).isDisplayed()).toBe(true);
  });

  it('check navigation to mainpage after click on Currency Exchange', function() {
      var ebtn = element(by.id('ebtn'));
      ebtn.click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost/index.html#/');
    });

  it('check navigation to mainpage after click on Exchange app', function() {
      var hbtn = element(by.id('hbtn'));
      hbtn.click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost/index.html#/');
    });
});
