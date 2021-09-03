
utools.onPluginEnter(({ code, type, payload }) => {
    if (code === 'settings') {
        console.log("Settings");
        window.vue._data.dialogVisible = true
    } else {
        window.vue._data.dialogVisible = false
    }
})
// utools.onPluginOut(() => {

//     console.log('用户退出插件')
//   })
var path = __dirname;
var fs = require('fs');

function reDefaultFlash(){
    window.readconfig = readConfig()
    console.log(window.readconfig);
    init()
}
function reDefaultConfig() {
    let defaultconfig
    defaultconfig = { "12_24": { "options": [{ "label": "ui_12_24_24", "value": "24" }, { "label": "ui_12_24_12", "value": "12" }], "order": 107, "text": "12/24", "type": "combo", "value": 12 }, "background_image": { "default": "./defaultBackground.png", "value": "" }, "birthday": { "condition": "from_friend_tips.value==true", "order": 126, "text": "ui_birthday", "type": "bool", "value": true }, "birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 128, "text": "ui_birthday_string", "type": "textinput", "value": "2021.08.25" }, "birthday_string_size": { "condition": "from_friend_tips.value==true&&birthday.value==true", "fraction": false, "max": 300, "min": 1, "order": 131, "text": "ui_birthday_string_size", "type": "slider", "value": 50 }, "birthday_string_type": { "condition": "from_friend_tips.value==true&&birthday.value==true", "options": [{ "label": "ui_birthday_string_type_detail", "value": "a" }, { "label": "ui_birthday_string_type_days", "value": "b" }], "order": 129, "text": "ui_birthday_string_type", "type": "combo", "value": "a" }, "body_color": { "condition": "background_image.value == ''", "order": 119, "text": "ui_body_color", "type": "color", "value": "rgb(22, 22, 22)" }, "color": { "order": 112, "text": "ui_color", "type": "tip" }, "date_size": { "fraction": false, "max": 300, "min": 1, "order": 104, "text": "ui_date_size", "type": "slider", "value": 60 }, "day_color": { "order": 116, "text": "ui_day_color", "type": "color", "value": "rgb(255, 253, 93)" }, "footer_slogan": { "order": 110, "text": "ui_footer_slogan", "type": "textinput", "value": "Time flows away" }, "footer_slogan_size": { "condition": "footer_slogan.value != ''", "fraction": false, "max": 300, "min": 1, "order": 111, "text": "ui_footer_slogan_size", "type": "slider", "value": 45 }, "from_friend_tips": { "order": 125, "text": "ui_from_friend_tips", "type": "bool", "value": false }, "header_slogan": { "order": 108, "text": "ui_header_slogan", "type": "textinput", "value": "时光飞逝" }, "header_slogan_size": { "condition": "header_slogan.value != ''", "fraction": false, "max": 300, "min": 1, "order": 109, "text": "ui_header_slogan_size", "type": "slider", "value": 65 }, "hello_world": { "order": 124, "text": "ui_hello_world", "type": "tip" }, "hour_color": { "order": 117, "text": "ui_hour_color", "type": "color", "value": "rgb(71, 144, 229)" }, "min_color": { "order": 118, "text": "ui_min_color", "type": "color", "value": "rgb(132, 216, 75)" }, "month_color": { "order": 115, "text": "ui_month_color", "type": "color", "value": "rgb(199, 94, 83)" }, "other_thing": { "order": 120, "text": "ui_other_thing", "type": "tip" }, "position": { "order": 100, "text": "ui_position", "type": "tip" }, "position_h": { "options": [{ "label": "ui_position_h_l", "value": "flex-start" }, { "label": "ui_position_h_c", "value": "center" }, { "label": "ui_position_h_r", "value": "flex-end" }], "order": 102, "text": "ui_position_h", "type": "combo", "value": "center" }, "position_v": { "options": [{ "label": "ui_position_v_u", "value": "flex-start" }, { "label": "ui_position_v_c", "value": "center" }, { "label": "ui_position_v_d", "value": "flex-end" }], "order": 101, "text": "ui_position_v", "type": "combo", "value": "center" }, "prefix_birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 127, "text": "ui_prefix_birthday_string", "type": "textinput", "value": "度过了" }, "schemecolor": { "order": 0, "text": "ui_browse_properties_scheme_color", "type": "color", "value": "rgb(28, 28, 28)" }, "suffix_birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 130, "text": "ui_suffix_birthday_string", "type": "textinput", "value": "天" }, "text_color": { "order": 113, "text": "ui_text_color", "type": "color", "value": "rgb(200, 200, 200)" }, "text_opacity": { "condition": "background_image.value != ''", "fraction": true, "max": 1, "min": 0, "order": 123, "precision": 2, "step": 0.1, "text": "ui_text_opacity", "type": "slider", "value": 0.6 }, "text_opacity_color": { "condition": "background_image.value != ''", "order": 122, "text": "ui_text_opacity_color", "type": "color", "value": "rgba(255, 255, 255, 0)" }, "text_size": { "order": 103, "text": "ui_text_size", "type": "tip" }, "time_size": { "fraction": false, "max": 300, "min": 1, "order": 105, "text": "ui_time_size", "type": "slider", "value": 65 }, "scroll_size": { "fraction": false, "max": 300, "min": 1, "order": 106, "precision": 2, "step": 1, "text": "ui_scroll_size", "type": "slider", "value": 85 }, "year_color": { "order": 114, "text": "ui_year_color", "type": "color", "value": "rgb(188, 189, 190)" } }

    let config = JSON.stringify(defaultconfig);
    fs.writeFile(path + '\\config.json', config, (err) => {
        if (err) {
            throw err;
        }
        console.log("setDefault");
    });
    setTimeout(function () {
        global.window.readconfig = defaultconfig
        console.log(global.window.readconfig);
        init()
    }, 500);
}

function readConfig() {
    return require('./config.json')
}

function submitConfig(params) {
    let config = JSON.stringify(params);
    fs.writeFile(path + '/config.json', config, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
        console.log("submit");
    });
}

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1,                 //月份 
        "d+": this.getDate(),                    //日 
        "h+": this.getHours(),                   //小时 
        "m+": this.getMinutes(),                 //分 
        "s+": this.getSeconds(),                 //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function init() {
    let h = document.body.scrollHeight
    utools.setExpendHeight(h + 1)
}

// function birthday(params) {
//     params = "2021.01.21"

// }

window.readconfig = readConfig()
if (window.readconfig['birthday_string'].value === '') {
    window.readconfig['birthday_string'].value = new Date().Format("yyyy.MM.dd");
}

window.setDefault = reDefaultConfig
window.submitConfig = submitConfig
window.init = init
// window.nowpath = path

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