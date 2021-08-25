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


function reDefaultConfig() {
    let defaultconfig
    defaultconfig = { "12_24": { "options": [{ "label": "ui_12_24_24", "value": "24" }, { "label": "ui_12_24_12", "value": "12" }], "order": 107, "text": "12/24", "type": "combo", "value": 12 }, "background_image": { "default": "./defaultBackground.png", "value": "" }, "birthday": { "condition": "from_friend_tips.value==true", "order": 126, "text": "ui_birthday", "type": "bool", "value": true }, "birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 128, "text": "ui_birthday_string", "type": "textinput", "value": "2021.08.25" }, "birthday_string_size": { "condition": "from_friend_tips.value==true&&birthday.value==true", "fraction": false, "max": 300, "min": 1, "order": 131, "text": "ui_birthday_string_size", "type": "slider", "value": 50 }, "birthday_string_type": { "condition": "from_friend_tips.value==true&&birthday.value==true", "options": [{ "label": "ui_birthday_string_type_detail", "value": "a" }, { "label": "ui_birthday_string_type_days", "value": "b" }], "order": 129, "text": "ui_birthday_string_type", "type": "combo", "value": "a" }, "body_color": { "condition": "background_image.value == ''", "order": 119, "text": "ui_body_color", "type": "color", "value": "rgb(22, 22, 22)" }, "color": { "order": 112, "text": "ui_color", "type": "tip" }, "date_size": { "fraction": false, "max": 300, "min": 1, "order": 104, "text": "ui_date_size", "type": "slider", "value": 60 }, "day_color": { "order": 116, "text": "ui_day_color", "type": "color", "value": "rgb(255, 253, 93)" }, "footer_slogan": { "order": 110, "text": "ui_footer_slogan", "type": "textinput", "value": "Time flows away" }, "footer_slogan_size": { "condition": "footer_slogan.value != ''", "fraction": false, "max": 300, "min": 1, "order": 111, "text": "ui_footer_slogan_size", "type": "slider", "value": 45 }, "from_friend_tips": { "order": 125, "text": "ui_from_friend_tips", "type": "bool", "value": false }, "header_slogan": { "order": 108, "text": "ui_header_slogan", "type": "textinput", "value": "时光飞逝" }, "header_slogan_size": { "condition": "header_slogan.value != ''", "fraction": false, "max": 300, "min": 1, "order": 109, "text": "ui_header_slogan_size", "type": "slider", "value": 65 }, "hello_world": { "order": 124, "text": "ui_hello_world", "type": "tip" }, "hour_color": { "order": 117, "text": "ui_hour_color", "type": "color", "value": "rgb(71, 144, 229)" }, "min_color": { "order": 118, "text": "ui_min_color", "type": "color", "value": "rgb(132, 216, 75)" }, "month_color": { "order": 115, "text": "ui_month_color", "type": "color", "value": "rgb(199, 94, 83)" }, "other_thing": { "order": 120, "text": "ui_other_thing", "type": "tip" }, "position": { "order": 100, "text": "ui_position", "type": "tip" }, "position_h": { "options": [{ "label": "ui_position_h_l", "value": "flex-start" }, { "label": "ui_position_h_c", "value": "center" }, { "label": "ui_position_h_r", "value": "flex-end" }], "order": 102, "text": "ui_position_h", "type": "combo", "value": "center" }, "position_v": { "options": [{ "label": "ui_position_v_u", "value": "flex-start" }, { "label": "ui_position_v_c", "value": "center" }, { "label": "ui_position_v_d", "value": "flex-end" }], "order": 101, "text": "ui_position_v", "type": "combo", "value": "center" }, "prefix_birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 127, "text": "ui_prefix_birthday_string", "type": "textinput", "value": "度过了" }, "schemecolor": { "order": 0, "text": "ui_browse_properties_scheme_color", "type": "color", "value": "rgb(28, 28, 28)" }, "suffix_birthday_string": { "condition": "from_friend_tips.value==true&&birthday.value==true", "order": 130, "text": "ui_suffix_birthday_string", "type": "textinput", "value": "天" }, "text_color": { "order": 113, "text": "ui_text_color", "type": "color", "value": "rgb(200, 200, 200)" }, "text_opacity": { "condition": "background_image.value != ''", "fraction": true, "max": 1, "min": 0, "order": 123, "precision": 2, "step": 0.1, "text": "ui_text_opacity", "type": "slider", "value": 0.6 }, "text_opacity_color": { "condition": "background_image.value != ''", "order": 122, "text": "ui_text_opacity_color", "type": "color", "value": "rgba(255, 255, 255, 0)" }, "text_size": { "order": 103, "text": "ui_text_size", "type": "tip" }, "time_size": { "fraction": false, "max": 300, "min": 1, "order": 105, "text": "ui_time_size", "type": "slider", "value": 65 }, "scroll_size": { "fraction": false, "max": 300, "min": 1, "order": 106, "precision": 2, "step": 1, "text": "ui_scroll_size", "type": "slider", "value": 85 }, "year_color": { "order": 114, "text": "ui_year_color", "type": "color", "value": "rgb(188, 189, 190)" } }    let config = JSON.stringify(defaultconfig);
    fs.writeFile(path + '\\config.json', config, (err) => {
        if (err) {
            throw err;
        }
        console.log("setDefault");
    });

}

function readConfig() {
    return require('./config.json')
}

function submitConfig(params) {
    let config = JSON.stringify(params);
    fs.writeFile(path + '\\config.json', config, (err) => {
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

