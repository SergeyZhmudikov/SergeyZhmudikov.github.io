var renderer = new Renderer();
var dpCalendar = new DatesPicker();
dpCalendar.getMonthAndYear();
dpCalendar.getArrayDate();


// create container
var container = renderer.create(dpCalendar, {
    tag: 'div',
    classes: ['datepicker-container']
});
renderer.render(container);

// Navigation block
var headContainer = renderer.create(dpCalendar, {
    tag: 'div',
    classes: ['datepicker-container__head']
});
renderer.render(headContainer, container);

var backBtnFunction = function() {

    document.getElementsByClassName('datepicker-container')[0].removeChild(document.getElementsByClassName('datepicker-container__weeks')[0]);
    document.getElementsByClassName('datepicker-container__head')[0].removeChild(document.getElementsByClassName('datepicker-container__MY')[0]);
    dpCalendar.getPrevMonth();
    dpCalendar.getMonthAndYear();

    var monthAndYear = renderer.create(dpCalendar, {
        tag: 'div',
        classes: ['datepicker-container__MY'],
        property: 'monthAndYear'
    });
    renderer.render(monthAndYear, headContainer);


    var weeksBlock = renderer.create(dpCalendar, {
        tag: 'div',
        classes: ['datepicker-container__weeks']
    });
    renderer.render(weeksBlock, container);

    var weeksMass = renderer.create(dpCalendar, {
        tag: 'div',
        classes: ['datepicker-container__week-mass'],
        property: 'nameOfDays',
        arrayOfElements: true
    });
    renderer.render(weeksMass, weeksBlock);


    var daysMass = renderer.create(dpCalendar, {
        tag: 'div',
        classes: ['datepicker-container__days-mass', 'datepicker-container__current-day'],
        property: 'arrayOfDate',
        arrayOfElements: true
    });
    renderer.render(daysMass, weeksBlock);
}

var backbtn = renderer.create(dpCalendar, {
    tag: 'button',
    classes: ['datepicker-container__backbtn'],
    content: 'Back',
    event: ['click', backBtnFunction]
});
renderer.render(backbtn, headContainer);

var nextBtnFunction = function() {

    document.getElementsByClassName('datepicker-container')[0].removeChild(document.getElementsByClassName('datepicker-container__weeks')[0]);
    document.getElementsByClassName('datepicker-container__head')[0].removeChild(document.getElementsByClassName('datepicker-container__MY')[0]);
    dpCalendar.getNextMonth();
    dpCalendar.getMonthAndYear();

    var monthAndYear = renderer.create(dpCalendar, {
        tag: 'div',
        classes: ['datepicker-container__MY'],
        property: 'monthAndYear'
    });
    renderer.render(monthAndYear, headContainer);


    var weeksBlock = renderer.create(dpCalendar, {
        tag: 'div',
        classes: ['datepicker-container__weeks']
    });
    renderer.render(weeksBlock, container);

    var weeksMass = renderer.create(dpCalendar, {
        tag: 'div',
        classes: ['datepicker-container__week-mass'],
        property: 'nameOfDays',
        arrayOfElements: true
    });
    renderer.render(weeksMass, weeksBlock);


    var daysMass = renderer.create(dpCalendar, {
        tag: 'div',
        classes: ['datepicker-container__days-mass', 'datepicker-container__current-day'],
        property: 'arrayOfDate',
        arrayOfElements: true
    });
    renderer.render(daysMass, weeksBlock);
}

var nextbtn = renderer.create(dpCalendar, {
    tag: 'button',
    classes: ['datepicker-container__nextbtn'],
    content: 'Next',
    event: ['click', nextBtnFunction]
});
renderer.render(nextbtn, this.headContainer);

var monthAndYear = renderer.create(dpCalendar, {
    tag: 'div',
    classes: ['datepicker-container__MY'],
    property: 'monthAndYear'
});
renderer.render(monthAndYear, headContainer);


//day and week container
var weeksBlock = renderer.create(dpCalendar, {
    tag: 'div',
    classes: ['datepicker-container__weeks']
});
renderer.render(weeksBlock, container);

// Week block
var weeksMass = renderer.create(dpCalendar, {
    tag: 'div',
    classes: ['datepicker-container__week-mass'],
    property: 'nameOfDays',
    arrayOfElements: true
});
renderer.render(weeksMass, weeksBlock);

// Days block
var daysMass = renderer.create(dpCalendar, {
    tag: 'div',
    classes: ['datepicker-container__days-mass', 'datepicker-container__current-day'],
    property: 'arrayOfDate',
    arrayOfElements: true
});
renderer.render(daysMass, weeksBlock);