function DatesPicker() {
    this.dateNow = new Date();
    this.yearNow = this.dateNow.getFullYear();
    this.monthNow = this.dateNow.getMonth();
    this.nameOfDays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.arrayOfDate = [];
    this.monthAndYear = '';
}

DatesPicker.prototype.getArrayDate = function() {

    var daysInMonth = 32 - new Date(this.yearNow, this.monthNow, 32).getDate();
    for (var i = 1; i <= daysInMonth; i++) {
        this.arrayOfDate.push(i);
    }

    // Empty days
    var firstDay = new Date(this.yearNow, this.monthNow, 1).getDay();
    firstDay = (firstDay === 0) ? 7 : firstDay;

    for (var i = 1; i < firstDay; i++) {
        this.arrayOfDate.unshift('-');
    }

    var emptyDays = 7 - this.arrayOfDate.length % 7;
    if (emptyDays !== 7) {
        for (var i = 1; i <= emptyDays; i++) {
            this.arrayOfDate.push('-');
        }
    }

    // Current day
    var currentDay = (this.yearNow === new Date().getFullYear() && this.monthNow === new Date().getMonth()) ? new Date().getDate() : null;
    var currentDayIndex = this.arrayOfDate.indexOf(currentDay);
    if (currentDayIndex !== -1) {
        this.arrayOfDate[currentDayIndex] = [currentDay];
    };
    return this.arrayOfDate;

}

DatesPicker.prototype.getMonthAndYear = function() {
    this.monthAndYear = new Date(this.yearNow, this.monthNow).toLocaleString("en-US", { year: 'numeric', month: 'long' });
}

DatesPicker.prototype.getPrevMonth = function() {
    this.monthNow--;
    if (this.monthNow === -1) {
        this.monthNow = 11;
        this.yearNow--;
    };
    this.arrayOfDate = [];
    this.getArrayDate();
}

DatesPicker.prototype.getNextMonth = function() {
    this.monthNow++;
    if (this.monthNow === 12) {
        this.monthNow = 0;
        this.yearNow++;
    };
    this.arrayOfDate = [];
    this.getArrayDate();
}