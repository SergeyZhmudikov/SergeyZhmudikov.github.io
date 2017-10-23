// Values 
var currDay = new Date();
var currYear = currDay.getFullYear();
var currMonth = currDay.getMonth();
var currentDate = currDay.getDate();
var yearView = currYear;
var monthView = currMonth;

// wrapper
var calendar = document.createElement('div');
calendar.setAttribute('class', 'dp_calendar');
document.body.appendChild(calendar);

// Header

var dpHeader = document.createElement('div');
dpHeader.setAttribute('class', 'dp_calendar-header');
// Previous button div
var prevBtn = document.createElement('button');
prevBtn.setAttribute('class', 'dp_calendar-header__btn');
prevBtn.innerHTML = 'Prev';

dpHeader.appendChild(prevBtn);

// Month/Year div
var yearMonth = document.createElement('div');
yearMonth.setAttribute('class', 'dp_calendar-header__MY');
viewYM(monthView, yearView);
dpHeader.appendChild(yearMonth);

// Next button div
var nextBtn = document.createElement('button');
nextBtn.setAttribute('class', 'dp_calendar-header__btn');
nextBtn.innerHTML = 'Next';

dpHeader.appendChild(nextBtn);
calendar.appendChild(dpHeader);

//Weeks

var weekBlock = document.createElement('div');
weekBlock.setAttribute('class', 'dp_calendar__week');

var week = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

for (var i = 0; i < week.length; i++) {
    var dayWeek = document.createElement('div');
    dayWeek.innerHTML = week[i];
    dayWeek.setAttribute('class', 'dp_calendar__dayweek');
    weekBlock.appendChild(dayWeek);
}

calendar.appendChild(weekBlock);

var days = document.createElement('div');
days.setAttribute('class', 'dp_calendar__days alldays');
calendar.appendChild(days);

//Days in Month
viewMonth(monthView, yearView);

function viewYM(monthView, yearView) {
    switch (monthView) {
        case 0:
            yearMonth.innerHTML = 'January ';
            break;
        case 1:
            yearMonth.innerHTML = 'Febrary';
            break;
        case 2:
            yearMonth.innerHTML = 'March';
            break;
        case 3:
            yearMonth.innerHTML = 'April';
            break;
        case 4:
            yearMonth.innerHTML = 'May';
            break;
        case 5:
            yearMonth.innerHTML = 'June';
            break;
        case 6:
            yearMonth.innerHTML = 'July';
            break;
        case 7:
            yearMonth.innerHTML = 'August';
            break;
        case 8:
            yearMonth.innerHTML = 'September';
            break;
        case 9:
            yearMonth.innerHTML = 'Oktober';
            break;
        case 10:
            yearMonth.innerHTML = 'November';
            break;
        case 11:
            yearMonth.innerHTML = 'December';
            break;
    }
    yearMonth.innerHTML = yearMonth.innerHTML + yearView;
}

//Emmty days
function viewMonth(monthView, yearView) {
    var dayOfWeek = new Date(yearView, monthView, 1).getDay();
    for (var indexnullDay = 0; indexnullDay < dayOfWeek; indexnullDay++) {
        var nullDay = document.createElement('div');
        nullDay.setAttribute('class', 'alldays alldays--null');
        days.appendChild(nullDay);
    };


    //Not empty days
    var dayInMonth = new Date(yearView, monthView + 1, 0).getDate();
    for (var indexDay = 1; indexDay <= dayInMonth; indexDay++) {
        var day = document.createElement('div');
        day.setAttribute('class', 'alldays alldays--day');
        day.innerHTML = indexDay;

        if ((monthView === currMonth) && (yearView === currYear) && (indexDay === currentDate)) {
            day.style.backgroundColor = 'red';
        }
        days.appendChild(day);
    }
}


//Entity

prevBtn.onclick = function() {
    if (monthView) {
        monthView = monthView - 1;
    } else {
        monthView = 11;
        yearView = yearView - 1;
    };
    days.innerHTML = '';
    viewYM(monthView, yearView);
    viewMonth(monthView, yearView);
};

nextBtn.onclick = function() {
    if (monthView < 11) {
        monthView = monthView + 1;
    } else {
        monthView = 0;
        yearView = yearView + 1;
    };
    days.innerHTML = '';
    viewYM(monthView, yearView);
    viewMonth(monthView, yearView);
};