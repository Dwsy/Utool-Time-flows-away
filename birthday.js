function birthday() {
    //日期贡献算法
    let dayMonth = [[0, 0], [31, 31], [28, 29], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31]];
    let LeapYear = new Function('year', 'if(((year%4)==0)&&((year%100)!=0)||((year%400)==0)){return true}return false');
    let leap_year = 366;//闰年
    let common_year = 365;//平年
    // let properties = window.readconfig
    let properties = {
        'birthday_string': {
            value: "2021.12.11"
        }
    }
    const now = new Date();
    let startDate = properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/');
    let newStartDate = new Date(startDate)
    let dif = now - newStartDate
    let difday = Math.floor(dif / 86400000)
    let year = now.getFullYear() - newStartDate.getFullYear() - 1
    let yearContributionDay = 0
    let monthContributionDay = 0
    let dayContributionDay = 0
    let nm = now.getMonth()
    let om = newStartDate.getMonth()
    if (nm >= om) {
        let month = nm - om
        for (var i = 0; i <= year; i++) {
            LeapYear(i) ? yearContributionDay += leap_year : yearContributionDay += common_year;
        }
        let isLeapYear = 0
        LeapYear(now.getFullYear()) ? isLeapYear = 1 : isLeapYear = 0;//选择二月
        for (let i = nm; i > om; i--) {
            monthContributionDay += (dayMonth[i][isLeapYear])
        }
        dayContributionDay = difday - yearContributionDay - monthContributionDay
        return `${year + 1}年${month}月${dayContributionDay}`
    } else {
        for (var i = 0; i < year; i++) {
            LeapYear(i) ? yearContributionDay += leap_year : yearContributionDay += common_year;
        }
        let isLeapYear = 0
        LeapYear(now.getFullYear()) ? isLeapYear = 1 : isLeapYear = 0;//选择二月
        let newMonth = 0
        for (var i = om + 2; i <= 12; i++) {
            newMonth++
            monthContributionDay += dayMonth[i][isLeapYear]
        }
        for (let i = nm; i > 0; i--) {
            newMonth++
            monthContributionDay += (dayMonth[i][isLeapYear])
        }
        let newDay = 0
        if (now.getDate() > newStartDate.getDate()) {
            newDay = now.getDate() - newStartDate.getDate()
            newMonth += 1
        } else {
            newDay = dayMonth[om + 1][isLeapYear] - newStartDate.getDate() + now.getDate()
        }
        dayContributionDay = difday - yearContributionDay - monthContributionDay
        return `${year}年${newMonth}月${newDay}`
    }
}
console.log("相差" + birthday() + "天");
let key = 0
let d = null
let cache = null
function getCache() {
    if (key == 0) {
        d = new Date()
        cache = birthday()
        key = 1
        return cache
    } else {
        if (d.getDate() != new Date().getDate()) {
            cache = birthday()
            key = 0
        }
        return cache
    }

}