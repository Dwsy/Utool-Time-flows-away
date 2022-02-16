function birthday() {
    //日期贡献算法
    let otherVariable = {}
    let dayMonth = [[0, 0], [31, 31], [28, 29], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31]];
    let LeapYear = new Function('year', 'if(((year%4)==0)&&((year%100)!=0)||((year%400)==0)){return true}return false');
    let leap_year = 366;//闰年
    let common_year = 365;//平年

    // console.log("startDate"+startDate);
    // console.log("newStartDate"+newStartDate);
    // let properties = window.readconfig
    let properties = {
        'birthday_string': {
            value: "2021.12.11"
        }
    }
    const now = new Date();
    let startDate = properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/');
    // let dif = DateDiff(startDate)
    let newStartDate = new Date(startDate)
    let dif = now - newStartDate
    console.log(Math.floor(dif / 86400000));
    let difday = Math.floor(dif / 86400000)
    let year = now.getFullYear() - newStartDate.getFullYear()-1
    console.log(now.getFullYear(), newStartDate.getFullYear());
    console.log("year" + year)
    let month = 0
    let sum_day = 0;
    let yearContributionDay = 0
    let monthContributionDay = 0
    let dayContributionDay = 0
    let nm = now.getMonth()
    let om = newStartDate.getMonth()
    console.log("now" + nm, "oldm" + om);
    if (nm >= om) {
        let month = nm - om
        for (var i = 0; i <= year; i++) {
            console.log("LeapYear(i) ?" + i, year);
            LeapYear(i) ? yearContributionDay += leap_year : yearContributionDay += common_year;
        }
        console.log("yearContributionDay" + yearContributionDay);
        let isLeapYear = 0
        LeapYear(now.getFullYear()) ? isLeapYear = 1 : isLeapYear = 0;//选择二月
        for (let i = nm; i > om; i--) {
            console.log('m：：：' + (i) + 'd' + dayMonth[i][isLeapYear]);
            monthContributionDay += (dayMonth[i][isLeapYear])
            console.log("monthContributionDay" + monthContributionDay);
        }
        dayContributionDay = difday - yearContributionDay - monthContributionDay
        console.log("day:" + dayContributionDay);
        console.log(`相差${year + 1}年${month}月${dayContributionDay}天`);
        return `${year + 1}年${month}月${dayContributionDay}`
    } else {
        for (var i = 0; i < year; i++) {
            console.log("LeapYear(i) ?" + i, year);
            LeapYear(i) ? yearContributionDay += leap_year : yearContributionDay += common_year;
        }
        let t1 = 12 - newStartDate.getMonth() + now.getMonth()
        console.log(t1);
        console.log("yearContributionDay" + yearContributionDay);
        let isLeapYear = 0
        LeapYear(now.getFullYear()) ? isLeapYear = 1 : isLeapYear = 0;//选择二月
        console.log("om" + om);
        let newMonth = 0
        for (var i = om + 2; i <= 12; i++) {
            newMonth++
            console.log('m：11：：' + (i) + 'd' + dayMonth[i][isLeapYear]);
            monthContributionDay += dayMonth[i][isLeapYear]
            console.log("monthContributionDay" + monthContributionDay);
        }
        console.log(newStartDate.getDate());
        // monthContributionDay-=newStartDate.getDate()
        // monthContributionDay+=now.getDate()
        console.log("-----------------" + nm);

        for (let i = nm; i > 0; i--) {
            newMonth++
            console.log('m：：：' + (i) + 'd' + dayMonth[i][isLeapYear]);
            monthContributionDay += (dayMonth[i][isLeapYear])
            console.log("monthContributionDay" + monthContributionDay);
        }
        let newDay = 0
        if (now.getDate() > newStartDate.getDate()) {
            console.log("> 过了 个月", newMonth + 1);
            newDay = now.getDate() - newStartDate.getDate()
            newMonth+=1
        } else {
            console.log("< 过了 个月", newMonth);
            newDay = dayMonth[om + 1][isLeapYear] - newStartDate.getDate() + now.getDate()
        }
        dayContributionDay = difday - yearContributionDay - monthContributionDay
        console.log("day:" + dayContributionDay);
        return `${year}年${newMonth}月${newDay}`
    }



}
console.log(birthday());
let key = 0
let d = null
let cache = null
function getCache() {
    if (key == 0) {
        d=new Date()
        cache = birthday()
        key = 1
        return cache
    }else{
        if (d.getDate()!=new Date().getDate()) {
            cache = birthday()
            key =0
        }
        return cache
    }
    
}