describe('Exchange Page', function() {
  var amount = element(by.model('amount'));
  var btn1 = element(by.id('btn1'));
  var btn2 = element(by.id('btn2'));
  var tableRes1 = element(by.binding('transaction.type'));
  var tableRes2 = element(by.binding('transaction.currency'));
  var tableRes3 = element(by.binding('transaction.amount'));
  var tableRes4 = element(by.binding('transaction.price'));
  
  

  beforeEach(function() {
    browser.get('http://localhost/index.html');
  });

  it('check the title', function() {
    expect(browser.getTitle()).toEqual('Currency Exchange and News | By Naveen Singh');
  });

  it('enter the amount and bid', function() {
    amount.sendKeys(100);
 	btn1.click();
 	var curr = element(by.binding('exchange.currency'));
  	var bid_price = element(by.binding('exchange.bid'));
  	
  	

 	expect(tableRes1.getText()).toEqual('Buy');
 	//expect(tableRes2.getText()).toEqual(String(curr));
 	expect(tableRes3.getText()).toEqual('100');
 	//expect(tableRes4.getText()).toEqual(String(bid_price));
  });

  it('enter the amount and sell', function() {
    amount.sendKeys(100);
 	btn2.click();
 	var curr = element(by.binding('exchange.currency'));
 	var sell_price = element(by.binding('exchange.ask'));

 	expect(tableRes1.getText()).toEqual('Sell');
  	//expect(tableRes2.getText()).toEqual(curr);
 	expect(tableRes3.getText()).toEqual('100');
 	//expect(tableRes4.getText()).toEqual(sell_price);
  });


  it('check navigation to news', function() {
  		var nbtn1 = element(by.id('nbtn'));
  		nbtn1.click();
    	expect(browser.getCurrentUrl()).toEqual('http://localhost/index.html#/news');
    });
});
