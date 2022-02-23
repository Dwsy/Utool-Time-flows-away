utools.onPluginReady(() => {
    //console.log('插件装配完成，已准备好')
    // utools.dbStorage.setItem(key, value)
    // utools.dbStorage.getItem(key, value)
    start()

    //全局函数
    window.setDefault = reDefaultConfig
    window.submitConfig = submitConfig
    window.refresh = refresh
    window.getCache = getCache
    global.window.abc = "123"
    window.readconfig = readConfig()
    window.mini = false
    if (!utools.dbStorage.getItem('miniconfig')){
        let miniconfig = {
            height: 300,
            width: 440,
            textRatio: 2,
            scrollRatio: 1.5
        }
        utools.dbStorage.setItem('miniconfig', miniconfig)
    }

    if (window.readconfig['birthday_string'].value === '') {
        window.readconfig['birthday_string'].value = new Date().Format("yyyy.MM.dd");
    }
    // start core index.js
    window.miniconfig = utools.dbStorage.getItem('miniconfig')
    utools.onPluginEnter(({ code, type, payload }) => {
        if (code === 'settings') {
            //console.log("Settings");

            window.vue._data.dialogVisible = true
            utools.onPluginOut(() => { })
        } if (code === 'time') {

            window.vue._data.dialogVisible = false
            utools.onPluginOut(() => { })
        }
        if (code === 'minizd') {
            mini = true
            utools.outPlugin()
            utools.onPluginOut(() => {
                global.window.ubWindow = utools.createBrowserWindow('mini.html', {
                    show: false,
                    title: 'MiniTime',
                    frame: false,
                    titleBarStyle: 'hidden',
                    // height: 300,
                    // width: 440
                    height: window.miniconfig.height + 0,
                    width: window.miniconfig.width + 0
                    // webPreferences: {
                    //     preload: 'preload.js'
                    // }

                }, () => {
                    // 显示
                    // ubWindow.webContents.send('setSize')
                    // require('electron').ipcRenderer.sendTo(ubWindow.webContents.id, 'setSize')、

                    require('electron').ipcRenderer.on('setSize', function (event, arg) {
                        // ubWindow.setSize(1440, 900)
                        console.log(arg);
                    })
                    ubWindow.show()
                    ubWindow.setAlwaysOnTop(true)
                    refresh()


                })


                refresh()
            })
        }
        if (code === 'mini') {
            mini = true
            utools.outPlugin()
            utools.onPluginOut(() => {
                global.window.ubWindow = utools.createBrowserWindow('mini.html', {
                    show: false,
                    title: 'MiniTime',
                    frame: false,
                    titleBarStyle: 'hidden',
                    height: 300,
                    width: 440
                    // webPreferences: {
                    //     preload: 'preload.js'
                    // }
                }, () => {
                    // 显示
                    ubWindow.show()
                    // ubWindow.setAlwaysOnTop(true)

                    refresh()

                })
            })

            // utools.hideMainWindow()
        }
        if (code === 'nixieclock') {
            global.window.ubWindow = utools.createBrowserWindow('./nixieclock/index.html', {
                show: false,
                title: 'NixieClock',
                frame: false,
                titleBarStyle: 'hidden',
                height: 500,
                width: 1000
                // webPreferences: {
                //     preload: 'preload.js'
                // }
            }, () => {
                // 显示
                ubWindow.show()
                ubWindow.setAlwaysOnTop(true)
                utools.hideMainWindow()
            })
        }
    })
    // if (!window.mini) {
    //     console.log("window.startVue(true)");
    window.startVue(true)
    // }
    // window.vue._data.startApp = true
})

utools.onPluginDetach(() => {
    console.log('插件被分离')
    // alert("mini")

})

//启动初始化

function start() {
    if (!utools.dbStorage.getItem('customer')) {
        let now = new Date().Format("yyyy.MM.dd")
        //console.log(now);
        let defaultconfig
        defaultconfig = { "12_24": { "options": [{ "label": "ui_12_24_24", "value": "24" }, { "label": "ui_12_24_12", "value": "12" }], "order": 107, "text": "12/24", "type": "combo", "value": 12 }, "background_image": { "default": "./defaultBackground.png", "value": "" }, "birthday": { "condition": "from_friend_tips.value==true", "order": 126, "text": "ui_birthday", "type": "bool", "value": true }, "birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 128, "text": "ui_birthday_string", "type": "textinput", "value": now }, "birthday_string_size": { "condition": "from_friend_tips.value==true&&birthday.value==true", "fraction": false, "max": 300, "min": 1, "order": 131, "text": "ui_birthday_string_size", "type": "slider", "value": 50 }, "birthday_string_type": { "condition": "from_friend_tips.value==true&&birthday.value==true", "options": [{ "label": "ui_birthday_string_type_detail", "value": "a" }, { "label": "ui_birthday_string_type_days", "value": "b" }], "order": 129, "text": "ui_birthday_string_type", "type": "combo", "value": "b" }, "body_color": { "condition": "background_image.value == ''", "order": 119, "text": "ui_body_color", "type": "color", "value": "rgb(22, 22, 22)" }, "color": { "order": 112, "text": "ui_color", "type": "tip" }, "date_size": { "fraction": false, "max": 300, "min": 1, "order": 104, "text": "ui_date_size", "type": "slider", "value": 60 }, "day_color": { "order": 116, "text": "ui_day_color", "type": "color", "value": "rgb(255, 253, 93)" }, "footer_slogan": { "order": 110, "text": "ui_footer_slogan", "type": "textinput", "value": "Time flows away" }, "footer_slogan_size": { "condition": "footer_slogan.value != ''", "fraction": false, "max": 300, "min": 1, "order": 111, "text": "ui_footer_slogan_size", "type": "slider", "value": 45 }, "from_friend_tips": { "order": 125, "text": "ui_from_friend_tips", "type": "bool", "value": false }, "header_slogan": { "order": 108, "text": "ui_header_slogan", "type": "textinput", "value": "时光飞逝" }, "header_slogan_size": { "condition": "header_slogan.value != ''", "fraction": false, "max": 300, "min": 1, "order": 109, "text": "ui_header_slogan_size", "type": "slider", "value": 65 }, "hello_world": { "order": 124, "text": "ui_hello_world", "type": "tip" }, "hour_color": { "order": 117, "text": "ui_hour_color", "type": "color", "value": "rgb(71, 144, 229)" }, "min_color": { "order": 118, "text": "ui_min_color", "type": "color", "value": "rgb(132, 216, 75)" }, "month_color": { "order": 115, "text": "ui_month_color", "type": "color", "value": "rgb(199, 94, 83)" }, "other_thing": { "order": 120, "text": "ui_other_thing", "type": "tip" }, "position": { "order": 100, "text": "ui_position", "type": "tip" }, "position_h": { "options": [{ "label": "ui_position_h_l", "value": "flex-start" }, { "label": "ui_position_h_c", "value": "center" }, { "label": "ui_position_h_r", "value": "flex-end" }], "order": 102, "text": "ui_position_h", "type": "combo", "value": "center" }, "position_v": { "options": [{ "label": "ui_position_v_u", "value": "flex-start" }, { "label": "ui_position_v_c", "value": "center" }, { "label": "ui_position_v_d", "value": "flex-end" }], "order": 101, "text": "ui_position_v", "type": "combo", "value": "center" }, "prefix_birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 127, "text": "ui_prefix_birthday_string", "type": "textinput", "value": "度过了" }, "schemecolor": { "order": 0, "text": "ui_browse_properties_scheme_color", "type": "color", "value": "rgb(28, 28, 28)" }, "suffix_birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 130, "text": "ui_suffix_birthday_string", "type": "textinput", "value": "天" }, "text_color": { "order": 113, "text": "ui_text_color", "type": "color", "value": "rgb(200, 200, 200)" }, "text_opacity": { "condition": "background_image.value != ''", "fraction": true, "max": 1, "min": 0, "order": 123, "precision": 2, "step": 0.1, "text": "ui_text_opacity", "type": "slider", "value": 0.6 }, "text_opacity_color": { "condition": "background_image.value != ''", "order": 122, "text": "ui_text_opacity_color", "type": "color", "value": "rgba(255, 255, 255, 0)" }, "text_size": { "order": 103, "text": "ui_text_size", "type": "tip" }, "time_size": { "fraction": false, "max": 300, "min": 1, "order": 105, "text": "ui_time_size", "type": "slider", "value": 65 }, "scroll_size": { "fraction": false, "max": 300, "min": 1, "order": 106, "precision": 2, "step": 1, "text": "ui_scroll_size", "type": "slider", "value": 85 }, "year_color": { "order": 114, "text": "ui_year_color", "type": "color", "value": "rgb(188, 189, 190)" } }
        // defaultconfig['birthday_string'].value = new Date().Format("yyyy.MM.dd");
        let miniconfig = {
            height: 300,
            width: 440,
            textRatio: 2,
            scrollRatio: 1.5
        }
        utools.dbStorage.setItem('miniconfig', miniconfig)
        utools.dbStorage.setItem('defaultconfig', defaultconfig)
        utools.dbStorage.setItem('customer', defaultconfig)
        alert('首次运行提示：\n鼠标点击右键或utools输入time设置可设置时间条参数。\nMini模式按"-","+"可调整显示大小')
        //console.log("初始化成功");
    } else {
        //console.log("启动");
    }
}

//恢复默认配置
function reDefaultConfig() {
    utools.dbStorage.setItem('customer', utools.dbStorage.getItem('defaultconfig'))
    setTimeout(function () {
        global.window.readconfig = utools.dbStorage.getItem('customer')
        //console.log("恢复默认配置");
        refresh()
    }, 500);
}
//读取配置
function readConfig() {
    return utools.dbStorage.getItem('customer')
}

function submitConfig(params) {
    utools.dbStorage.setItem('customer', params)
    window.readconfig = readConfig()
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
//刷新配置
window.magic = 1
function refresh() {
    clearCache()
    window.magic = -window.magic
    let h = document.body.scrollHeight
    utools.setExpendHeight(h + window.magic)
    if (window.mini) {
        ubWindow.setSize(ubWindow.getSize()[0] + window.magic, ubWindow.getSize()[1])

    }


    clearCache()
}

// function birthday(params) {
//     params = "2021.01.21"

// }




function birthday() {
    //日期贡献算法
    let otherVariable = {}
    let dayMonth = [[0, 0], [31, 31], [28, 29], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31]];
    let LeapYear = new Function('year', 'if(((year%4)==0)&&((year%100)!=0)||((year%400)==0)){return true}return false');
    let leap_year = 366;//闰年
    let common_year = 365;//平年

    // //console.log("startDate"+startDate);
    // //console.log("newStartDate"+newStartDate);
    let properties = window.readconfig
    // let properties = {
    //     'birthday_string': {
    //         value: "2006.11.11"
    //     }
    // }
    const now = new Date();
    let startDate = properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/');
    // let dif = DateDiff(startDate)
    let newStartDate = new Date(startDate)
    let dif = now - newStartDate
    //console.log(Math.floor(dif / 86400000));
    let difday = Math.floor(dif / 86400000)
    let year = now.getFullYear() - newStartDate.getFullYear() - 1
    //console.log(now.getFullYear(), newStartDate.getFullYear());
    //console.log("year" + year)
    let month = 0
    let sum_day = 0;
    let yearContributionDay = 0
    let monthContributionDay = 0
    let dayContributionDay = 0
    let nm = now.getMonth()
    let om = newStartDate.getMonth()
    //console.log("now" + nm, "oldm" + om);
    if (nm >= om) {
        let month = nm - om
        for (var i = 0; i <= year; i++) {
            //console.log("LeapYear(i) ?" + i, year);
            LeapYear(i) ? yearContributionDay += leap_year : yearContributionDay += common_year;
        }
        //console.log("yearContributionDay" + yearContributionDay);
        let isLeapYear = 0
        LeapYear(now.getFullYear()) ? isLeapYear = 1 : isLeapYear = 0;//选择二月
        for (let i = nm; i > om; i--) {
            //console.log('m：：：' + (i) + 'd' + dayMonth[i][isLeapYear]);
            monthContributionDay += (dayMonth[i][isLeapYear])
            //console.log("monthContributionDay" + monthContributionDay);
        }
        dayContributionDay = difday - yearContributionDay - monthContributionDay
        //console.log("day:" + dayContributionDay);
        //console.log(`相差${year + 1}年${month}月${dayContributionDay}天`);
        return `${year + 1}年${month}月${dayContributionDay}`
    } else {
        for (var i = 0; i < year; i++) {
            //console.log("LeapYear(i) ?" + i, year);
            LeapYear(i) ? yearContributionDay += leap_year : yearContributionDay += common_year;
        }
        let t1 = 12 - newStartDate.getMonth() + now.getMonth()
        //console.log(t1);
        //console.log("yearContributionDay" + yearContributionDay);
        let isLeapYear = 0
        LeapYear(now.getFullYear()) ? isLeapYear = 1 : isLeapYear = 0;//选择二月
        //console.log("om" + om);
        let newMonth = 0
        for (var i = om + 2; i <= 12; i++) {
            newMonth++
            //console.log('m：11：：' + (i) + 'd' + dayMonth[i][isLeapYear]);
            monthContributionDay += dayMonth[i][isLeapYear]
            //console.log("monthContributionDay" + monthContributionDay);
        }
        //console.log(newStartDate.getDate());
        // monthContributionDay-=newStartDate.getDate()
        // monthContributionDay+=now.getDate()
        //console.log("-----------------" + nm);

        for (let i = nm; i > 0; i--) {
            newMonth++
            //console.log('m：：：' + (i) + 'd' + dayMonth[i][isLeapYear]);
            monthContributionDay += (dayMonth[i][isLeapYear])
            //console.log("monthContributionDay" + monthContributionDay);
        }
        let newDay = 0
        if (now.getDate() > newStartDate.getDate()) {
            //console.log("> 过了 个月", newMonth + 1);
            newDay = now.getDate() - newStartDate.getDate()
            newMonth += 1
        } else {
            //console.log("< 过了 个月", newMonth);
            newDay = dayMonth[om + 1][isLeapYear] - newStartDate.getDate() + now.getDate()
        }
        dayContributionDay = difday - yearContributionDay - monthContributionDay
        //console.log("day:" + dayContributionDay);
        return `${year}年${newMonth}月${newDay}`
    }



}
let key = 0
let d = null
let cache = null
function clearCache() {
    key = 0
}
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