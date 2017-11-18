var initialCats = [
    {
        clickCount: ko.observable(0),
        name: ko.observable('Tabby'),
        imgSrc: ko.observable('img/434164568_fea0ad4013_z.jpg'),
        imgAttribution: ko.observable('https://flikr.com/photos/big,.'),
        nicknames: ko.observable(['Tabtab', 'T-B', 'Tobe'])
    },
    {
        clickCount: ko.observable(0),
        name: ko.observable('Cat 2'),
        imgSrc: ko.observable('img/22252709_010df3379e_z.jpg'),
        imgAttribution: ko.observable('https://flikr.com/photos/big,.'),
        nicknames: ko.observable(['Peggy', 'T-B', 'Tobe'])
    },
    {
        clickCount: ko.observable(0),
        name: ko.observable('Birdy'),
        imgSrc: ko.observable('img/1413379559_412a540d29_z.jpg'),
        imgAttribution: ko.observable('https://flikr.com/photos/big,.'),
        nicknames: ko.observable(['zzz'])
    }
];

var Cat = function (data) {
    this.clickCount = data.clickCount;
    this.name = data.name;
    this.imgSrc = data.imgSrc;
    this.imgAttribution = data.imgAttribution;
    this.nicknames = data.nicknames;

    this.level = ko.computed(function () {
        var level;
        var clicks = this.clickCount();

        if (clicks < 10) {
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

    this.catList = ko.observableArray([]);

    initialCats.forEach(function (catItem) {
        self.catList.push( new Cat (catItem))
    });

    self.currentCat = ko.observable( this.catList()[0]);
    ;
    self.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }
};

ko.applyBindings(new ViewModal(

));