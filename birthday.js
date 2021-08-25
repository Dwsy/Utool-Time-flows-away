function birthday() {

    let otherVariable = {}
    let dayMonth = [[0, 0], [31, 31], [28, 29], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31]];
    let LeapYear = new Function('year', 'if(((year%4)==0)&&((year%100)!=0)||((year%400)==0)){return true}return false');
    const now = new Date();
    // console.log("startDate"+startDate);
    // console.log("newStartDate"+newStartDate);
    let startDate = properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/');
    let newStartDate = new Date(startDate)
    let year = now.getFullYear() - newStartDate.getFullYear()
    let month = now.getMonth() - newStartDate.getMonth() 
    let day = now.getDate() - newStartDate.getDate() + 1
    let totalDays = year + '年' + month + '个月零' + day + "天";
    
    
    // getMonth() + 1,
    // console.log("now.getMonth()"+ now.getMonth() + "newStartDate.getMonth()"+newStartDate.getMonth());
    // let isLeapYear = LeapYear(newStartDate.getFullYear())
    // console.log(isLeapYear ? '是' : '否');



    otherVariable.birthday_string = newStartDate.getTime();
    // console.log(otherVariable.birthday_string);
    // let number = now.getTime() - otherVariable.birthday_string;
    // totalDays = Math.floor(number / (86400000 * 365)) + '年' + Math.floor(((number / 86400000) % 365) / 30) + '个月零' + Math.floor(((number / 86400000) % 365) % 30) + "天";
    console.log(totalDays);
}
birthday()

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