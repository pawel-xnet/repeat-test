describe('TESTING PAGE', function() {
    //it('should have a title', testTitle);
    
    //it('should add 1+2 and check if its 3', testAdd);
    
    //it('should have show console log', testConsole);
    
    //it('should generate 10  tiles', testGenerate);
    
    it('should test repeat', testRepeater);
    
});

function testAdd(){
    browser.get('http://localhost:3000/#/test2');
    
    element(by.model('vm.model1')).sendKeys(1);
    element(by.model('vm.model2')).sendKeys(2);
    element(by.id('go-calc')).click();

    expect(element(by.binding('vm.result')).getText()).
        toEqual('3'); // This is wrong!
};

function testTitle(){
    browser.get('http://localhost:3000/#/test2');
        expect(browser.getTitle()).toEqual('My HTML File');
};

function testConsole(){
    browser.get('http://localhost:3000/#/test3');
    
//    element(by.css('h3')).getText().then(function(text) {
//        console.log(text);
//    });
    
//    element(by.css('h3')).getText().then(console.log);
    
    element.all( (by.repeater('item in vm.array1')).column('item.name') ).getText().then(function(text) {
        console.log(text);
    });
      
};

function testGenerate(){
    browser.get('http://localhost:3000/#/test1');
    var testNumber = 10;
    
    element(by.model('divsNumber')).clear().sendKeys(testNumber);
    element(by.css('button')).click();

//    var myDivs = element.all( by.css('.test2') ).count();
//    myDivs.then(function(data){
//        console.log(data);
//    });  
//    expect( myDivs ).toEqual(testNumber);
    
    //testing for visibility in DOM
//    element( by.css('h3') ).getText().then(function(data){
//        console.log('===>  '+data);
//    });
    
//    expect( element(by.css('.test2') ).isDisplayed()).toBe(true);
    
//    element(by.css('.test23')).isDisplayed().then(function (isVisible) {
//        console.log(isVisible);
//    });
    
};

function testRepeater(){
    browser.get('http://localhost:3000/#/test1');
    var testNumber = 10;
    
    element(by.model('divsNumber')).clear().sendKeys(testNumber);
    element(by.css('button')).click();

    var myDivs = element.all( by.repeater('(key, value) in arr1') );
    expect( myDivs.count() ).toEqual( testNumber );
    
};









