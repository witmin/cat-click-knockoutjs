var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://flikr.com/photos/big..');

    this.nicknames = ko.observable(['Tabtab', 'T-B','Tobe']);

    this.level = ko.computed(function () {
        var level;
        var clicks = this.clickCount();

        if (clicks < 10){
            level = 'Newborn';
        } else if (clicks < 15) {
            level = 'Infant';
        } else if (clicks < 20) {
            level = 'Child'
        }
        return level;
    }, this);

};

var ViewModal = function () {
    var self = this;
    self.currentCat = ko.observable(new Cat());
    self.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }
};

ko.applyBindings(new ViewModal(

));