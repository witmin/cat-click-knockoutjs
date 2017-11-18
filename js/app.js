var ViewModal = function () {
    this.cats = ko.observableArray([
        {
            name: "cat1"
        },
        {
            name: "Tabby"
        },
        {
            name: "cat3"
        }
        ]);

    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://flikr.com/photos/big..');

    this.level = ko.observable('Newborn');

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
        if (this.clickCount() === 10) {
            this.level('Infant');
        }
    }
};

ko.applyBindings(new ViewModal());