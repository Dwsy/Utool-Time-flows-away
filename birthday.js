function birthday() {

    let otherVariable = {}
    let dayMonth = [[0, 0], [31, 31], [28, 29], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31]];
    let LeapYear = new Function('year', 'if(((year%4)==0)&&((year%100)!=0)||((year%400)==0)){return true}return false');
    let leap_year = 366;//闰年
    let common_year = 365;//平年
    const now = new Date();
    // console.log("startDate"+startDate);
    // console.log("newStartDate"+newStartDate);
    let properties=window.readconfig
    // let properties = {
    //     'birthday_string': {
    //         value: '2018.8.10'
    //     }
    // }
    let startDate = properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/');
    // let dif = DateDiff(startDate)
    let newStartDate = new Date(startDate)
    let year = now.getFullYear() - newStartDate.getFullYear()
    let month = 0
    let day = now.getDate() - newStartDate.getDate()
    let sum_day = 0;
    for (let i = now.getFullYear() - 1; i >= newStartDate.getFullYear(); i--) {
        let sum;
        LeapYear(i) ? sum = leap_year : sum = common_year;
        console.log(LeapYear(i));
        sum_day += sum;
    }
    let k;
    let a = now.getMonth()
    let b = newStartDate.getMonth()
    if (a > b) {
        month = now.getMonth() - newStartDate.getMonth()
        let isLeapYear;
        let daysum = 0;
        LeapYear(now.getFullYear()) ? isLeapYear = 1 : isLeapYear = 0;
        console.log("isLeapYear" + isLeapYear);
        for (let i = a; i > b; i--) {
            console.log('m' + i + 'd' + dayMonth[i][isLeapYear]);
            daysum += (dayMonth[i][isLeapYear] + 0)
            console.log(daysum);
        }
        sum_day += daysum;
    } else {
        year -= 1;
        let t1 = 12 - newStartDate.getMonth() + now.getMonth()
        month = t1
        console.log("E");
    }
    let c = now.getDate();
    let d = newStartDate.getDate();
    let day_dif = 0
    if (c >= d) {

        day_dif = now.getDate() - newStartDate.getDate()

    } else {
        console.log("if");
        let isLeapYear;
        let now_month_day = 0;
        LeapYear(now.getFullYear()) ? isLeapYear = 1 : isLeapYear = 0;
        now_month_day = dayMonth[newStartDate.getMonth()][isLeapYear];
        let sum_day = now_month_day + now.getDate();
        day_dif = sum_day - newStartDate.getDate()
    }
    // for (let i = )
    console.log(day_dif);
    console.log("sum_day=" + sum_day);
    console.log("dif" + (sum_day + day_dif));
    return sum_day
    // getMonth() + 1,
    // console.log("now.getMonth()"+ now.getMonth() + "newStartDate.getMonth()"+newStartDate.getMonth());
    // let isLeapYear = LeapYear(newStartDate.getFullYear())
    // console.log(isLeapYear ? '是' : '否');



    // otherVariable.birthday_string = newStartDate.getTime();
    // console.log(otherVariable.birthday_string);
    // let number = now.getTime() - otherVariable.birthday_string;
    // totalDays = Math.floor(number / (86400000 * 365)) + '年' + Math.floor(((number / 86400000) % 365) / 30) + '个月零' + Math.floor(((number / 86400000) % 365) % 30) + "天";
    // let totalDays = year + '年' + (month - 1) + '个月零' + Math.abs(day) + "天";
    // console.log(totalDays);
    // console.log(dif + "day");
}
// birthday()
window.birthday = birthday()
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份 
        "d+": this.getDate(),                    //日 
        "h+": this.getHours(),                   //小时 
        "m+": this.getMinutes(),                 //分 
        "s+": this.getSeconds(),                 //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}