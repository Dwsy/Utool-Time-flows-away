
// setTimeout(console.log(), 300 )
((doc, win) => {
    const createTextSetter = selector => {
        const elem = doc.querySelector(selector);
        let text;
        return newText => {
            if (newText !== text) {
                text = newText;
                elem.textContent = newText;
                return true;
            }
            return false;
        };
    };

    const otherVariable = {
        set_12_24: '24',
        // from_friend_tips: false,
        birthday: false,
        pre_birthday: '',
        birthday_string: '',
        birthday_string_type: 'a',
        suf_birthday: '',
        text_background_color: {
            rgb: '',
            a: ''
        },
        body_background_color: ''
    }

    const timeMask = {
        year: doc.querySelector('#date>.mask#year>.p'),
        month: doc.querySelector('#date>.mask#month>.p'),
        d: doc.querySelector('#time>.mask#d>.p'),
        h: doc.querySelector('#time>.mask#h>.p'),
        m: doc.querySelector('#time>.mask#m>.p')
    };

    const setters = {
        time: createTextSetter('#time_div'),
        date: createTextSetter('#date_div')
    }

    doc.addEventListener('DOMContentLoaded', () => {
        const updateText = _ => {
            const now = new Date();
            setters.date(now.getFullYear() + '.' + (now.getMonth() + 1).toFixed().padStart(2, '0') + '.' + now.getDate().toFixed().padStart(2, '0'));
            let timeDiv;
            if (otherVariable.set_12_24 === '12') {
                let hour = now.getHours();
                hour = hour > 12 ? hour - 12 : hour;
                timeDiv = hour.toFixed().padStart(2, '0');
            } else {
                timeDiv = now.getHours().toFixed().padStart(2, '0');
            }
            timeDiv += ':' + now.getMinutes().toFixed().padStart(2, '0') + ':'
            const second = now.getSeconds();
            if (setters.time(timeDiv + second.toFixed().padStart(2, '0'))) {
                const minAndSec = second + 60 * now.getMinutes();
                const day = (((now.getDate() - 1) * 86400 + minAndSec + (3600 * now.getHours())) / (new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() * 86400))
                timeMask.year.style.maxWidth = `${(now.getMonth() + day) / 0.12}%`;
                timeMask.month.style.maxWidth = `${day * 100}%`;
                timeMask.d.style.maxWidth = `${(minAndSec + 3600 * now.getHours()) / 864}%`;
                timeMask.h.style.maxWidth = `${minAndSec / 36}%`;
                timeMask.m.style.maxWidth = `${second / 0.6}%`;
            }
            // if (otherVariable.birthday === true) {
            if (otherVariable.birthday === 'dev') {
                doc.getElementById('friend_div').style.display = 'inline';
                if (otherVariable.birthday === true) {
                    doc.querySelector('.birthday').style.display = 'inline';
                    let totalDays;
                    let number = now.getTime() - otherVariable.birthday_string;
                    if (otherVariable.birthday_string_type === 'b') {
                        totalDays = Math.floor(number / 86400000);
                    } else if (otherVariable.birthday_string_type === 'a') {

                        // let dayMonth = [[0, 0], [31, 31], [28, 29], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31], [31, 31], [30, 30], [31, 31], [30, 30], [31, 31]];
                        // let LeapYear = new Function('year', 'if(((year%4)==0)&&((year%100)!=0)||((year%400)==0)){return true}return false');
                        // function DateDiff(start) {
                        //     start = new Date(start);
                        //     end = new Date();
                        //     if (end > start) {
                        //         days = parseInt(Math.abs(end - start) / 1000 / 60 / 60 / 24);
                        //     } else {
                        //         days = '0';
                        //     }
                        //     return days;
                        // }
                        // let startDate = properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/');
                        // let newStartDate = new Date(startDate)
                        // let isLeapYear = LeapYear(newStartDate.getFullYear())
                        // let year = now.getFullYear() - newStartDate.getFullYear()
                        // let month = now.getMonth() - newStartDate.getMonth()
                        // month == 1 ? month = 0 : 0;
                        // let day = now.getDate() - newStartDate.getDate()
                        // // totalDays = year + '年' + month + '个月零' + day;
                        // // totalDays = year + '年' + Math.floor(((number / 86400000) % 365) / 30) + '个月零' + day;
                        // // totalDays = Math.floor(number / (86400000 * 365)) + '年' + Math.floor(((number / 86400000) % 365) / 30) + '个月零' + Math.floor(((number / 86400000) % 365) % 30);
                        // totalDays = DateDiff(properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/'))
                        totalDays = window.birthday
                    }
                    doc.getElementById('birthday_div').textContent = otherVariable.pre_birthday + totalDays + otherVariable.suf_birthday;
                } else {
                    doc.querySelector('.birthday').style.display = 'none';
                }
            } else {
                doc.getElementById('friend_div').style.display = 'none';
            }
        };
        setInterval(updateText, 1000);
        updateText();
    });
    properties = window.readconfig

    if (properties['date_size'])
        doc.getElementById('date').style.fontSize = properties['date_size'].value + 'px';
    if (properties['time_size'])
        doc.getElementById('time').style.fontSize = properties['time_size'].value + 'px';
    if (properties['header_slogan'])
        doc.getElementById('header_slogan').textContent = properties['header_slogan'].value;
    if (properties['header_slogan_size'])
        doc.getElementById('header_slogan').style.fontSize = properties['header_slogan_size'].value + 'px';
    if (properties['footer_slogan'])
        doc.getElementById('footer_slogan').textContent = properties['footer_slogan'].value;
    if (properties['footer_slogan_size'])
        doc.getElementById('footer_slogan').style.fontSize = properties['footer_slogan_size'].value + 'px';

    if (properties['position_h']) {
        doc.getElementsByTagName('body').item(0).style.alignItems = properties['position_h'].value;
    }
    if (properties['position_v']) {
        doc.getElementsByTagName('body').item(0).style.justifyContent = properties['position_v'].value;
    }
    if (properties['12_24']) {
        otherVariable.set_12_24 = properties['12_24'].value;
    }
    // if (properties['from_friend_tips']) {
    //     otherVariable.from_friend_tips = properties['from_friend_tips'].value;
    // }
    if (properties['birthday']) {
        otherVariable.birthday = properties['birthday'].value;
    }
    console.log(properties['birthday_string']);
    if (properties['birthday_string']) {
        let startDate = properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/');
        otherVariable.birthday_string = (new Date(startDate)).getTime();
    }
    if (properties['prefix_birthday_string']) {
        otherVariable.pre_birthday = properties['prefix_birthday_string'].value;
    }
    if (properties['suffix_birthday_string']) {
        otherVariable.suf_birthday = properties['suffix_birthday_string'].value;
    }
    if (properties['birthday_string_size']) {
        doc.getElementById('birthday_div').style.fontSize = properties['birthday_string_size'].value + 'px';
    }
    if (properties['birthday_string_type']) {
        otherVariable.birthday_string_type = properties['birthday_string_type'].value;
    }
    console.log(properties['background_image'].value);
    if (properties['background_image']) {
        if (!properties['background_image'].value) {
            doc.getElementById('text').style.backgroundColor = otherVariable.body_background_color
        } else {
            doc.getElementById('text').style.backgroundColor = otherVariable.text_background_color
        }
        if (!properties['background_image'].value) {
            doc.getElementsByTagName('body').item(0).style.backgroundImage = 'url("' + './' + properties['background_image'].default + '")';
        } else {
            // doc.getElementsByTagName('body').item(0).style.backgroundImage = 'url("' + 'file:///' + (properties['background_image'].value) + '")';

            doc.getElementsByTagName('body').item(0).style.backgroundImage = `url(${properties['background_image'].value})`;
        }

    }
    if (properties['body_color']) {
        const color = properties['body_color'].value;
        console.log(color);
        doc.getElementById('text').style.backgroundColor = 'rgba(' + color + ',' + otherVariable.text_background_color.a + ')';
        doc.getElementsByTagName('body').item(0).style.backgroundColor = color
        otherVariable.body_background_color = color;
    }
    if (properties['text_opacity_color'] && doc.getElementsByTagName('body').item(0).style.backgroundImage.toString() !== 'url("file:///")') {
        const customColor = properties['text_opacity_color'].value;
        // doc.getElementById('text').style.backgroundColor = 'rgba(' + customColor + ',' + (otherVariable.text_background_color.a ? otherVariable.text_background_color.a : 0) + ')';
        doc.getElementById('text').style.backgroundColor = properties['text_opacity_color'].value
        otherVariable.text_background_color.rgb = customColor;
    }
    //to
    if (properties['min_color']) {
        const backgroundColor = properties['min_color'].value
        doc.getElementById('m').style.borderColor = backgroundColor;
        timeMask.m.style.backgroundColor = backgroundColor;
    }
    if (properties['hour_color']) {
        const backgroundColor = properties['hour_color'].value
        doc.getElementById('h').style.borderColor = backgroundColor;
        timeMask.h.style.backgroundColor = backgroundColor;
    }
    if (properties['month_color']) {
        const backgroundColor = properties['month_color'].value
        doc.getElementById('month').style.borderColor = backgroundColor;
        timeMask.month.style.backgroundColor = backgroundColor;
    }
    if (properties['year_color']) {
        const backgroundColor = properties['year_color'].value
        doc.getElementById('year').style.borderColor = backgroundColor;
        timeMask.year.style.backgroundColor = backgroundColor;
    }
    if (properties['day_color']) {
        const backgroundColor = properties['day_color'].value
        doc.getElementById('d').style.borderColor = backgroundColor;
        timeMask.d.style.backgroundColor = backgroundColor;
    }
    if (properties['text_color']) {
        doc.getElementById('text').style.color = '' + properties['text_color'].value + '';
    }
    if (properties['text_opacity']) {
        doc.getElementById('text').style.backgroundColor = otherVariable.text_background_color.rgb
        // otherVariable.text_background_color.a = properties['text_opacity'].value;
    }
    if (properties['scroll_size']) {
        for (const elementsByClassNameElement of doc.getElementsByClassName(`mask`)) {
            elementsByClassNameElement.style.width = (properties['scroll_size'].value * 5.3) + 'px';

        }
    }

    window.addEventListener("resize", function () {
        console.log("------1");
        properties = window.readconfig
        if (properties['date_size'])
            doc.getElementById('date').style.fontSize = properties['date_size'].value + 'px';
        if (properties['time_size'])
            doc.getElementById('time').style.fontSize = properties['time_size'].value + 'px';
        if (properties['header_slogan'])
            doc.getElementById('header_slogan').textContent = properties['header_slogan'].value;
        if (properties['header_slogan_size'])
            doc.getElementById('header_slogan').style.fontSize = properties['header_slogan_size'].value + 'px';
        if (properties['footer_slogan'])
            doc.getElementById('footer_slogan').textContent = properties['footer_slogan'].value;
        if (properties['footer_slogan_size'])
            doc.getElementById('footer_slogan').style.fontSize = properties['footer_slogan_size'].value + 'px';

        if (properties['position_h']) {
            doc.getElementsByTagName('body').item(0).style.alignItems = properties['position_h'].value;
        }
        if (properties['position_v']) {
            doc.getElementsByTagName('body').item(0).style.justifyContent = properties['position_v'].value;
        }
        if (properties['12_24']) {
            otherVariable.set_12_24 = properties['12_24'].value;
        }
        // if (properties['from_friend_tips']) {
        //     otherVariable.from_friend_tips = properties['from_friend_tips'].value;
        // }
        if (properties['birthday']) {
            otherVariable.birthday = properties['birthday'].value;
        }
        if (properties['birthday_string']) {
            let startDate = properties['birthday_string'].value.replace(new RegExp('\\D', 'g'), '/');
            otherVariable.birthday_string = (new Date(startDate)).getTime();
        }
        if (properties['prefix_birthday_string']) {
            otherVariable.pre_birthday = properties['prefix_birthday_string'].value;
        }
        if (properties['suffix_birthday_string']) {
            otherVariable.suf_birthday = properties['suffix_birthday_string'].value;
        }
        if (properties['birthday_string_size']) {
            doc.getElementById('birthday_div').style.fontSize = properties['birthday_string_size'].value + 'px';
        }
        if (properties['birthday_string_type']) {
            otherVariable.birthday_string_type = properties['birthday_string_type'].value;
        }
        console.log(properties['background_image'].value);
        if (properties['background_image']) {
            if (!properties['background_image'].value) {
                doc.getElementById('text').style.backgroundColor = otherVariable.body_background_color
            } else {
                doc.getElementById('text').style.backgroundColor = otherVariable.text_background_color
            }
            if (!properties['background_image'].value) {
                doc.getElementsByTagName('body').item(0).style.backgroundImage = 'url("' + './' + properties['background_image'].default + '")';
            } else {
                // doc.getElementsByTagName('body').item(0).style.backgroundImage = 'url("' + 'file:///' + (properties['background_image'].value) + '")';

                doc.getElementsByTagName('body').item(0).style.backgroundImage = `url(${properties['background_image'].value})`;
            }

        }
        if (properties['body_color']) {
            const color = properties['body_color'].value;
            console.log(color);
            doc.getElementById('text').style.backgroundColor = 'rgba(' + color + ',' + otherVariable.text_background_color.a + ')';
            doc.getElementsByTagName('body').item(0).style.backgroundColor = color
            otherVariable.body_background_color = color;
        }
        if (properties['text_opacity_color'] && doc.getElementsByTagName('body').item(0).style.backgroundImage.toString() !== 'url("file:///")') {
            const customColor = properties['text_opacity_color'].value;
            // doc.getElementById('text').style.backgroundColor = 'rgba(' + customColor + ',' + (otherVariable.text_background_color.a ? otherVariable.text_background_color.a : 0) + ')';
            doc.getElementById('text').style.backgroundColor = properties['text_opacity_color'].value
            otherVariable.text_background_color.rgb = customColor;
        }
        //to
        if (properties['min_color']) {
            const backgroundColor = properties['min_color'].value
            doc.getElementById('m').style.borderColor = backgroundColor;
            timeMask.m.style.backgroundColor = backgroundColor;
        }
        if (properties['hour_color']) {
            const backgroundColor = properties['hour_color'].value
            doc.getElementById('h').style.borderColor = backgroundColor;
            timeMask.h.style.backgroundColor = backgroundColor;
        }
        if (properties['month_color']) {
            const backgroundColor = properties['month_color'].value
            doc.getElementById('month').style.borderColor = backgroundColor;
            timeMask.month.style.backgroundColor = backgroundColor;
        }
        if (properties['year_color']) {
            const backgroundColor = properties['year_color'].value
            doc.getElementById('year').style.borderColor = backgroundColor;
            timeMask.year.style.backgroundColor = backgroundColor;
        }
        if (properties['day_color']) {
            const backgroundColor = properties['day_color'].value
            doc.getElementById('d').style.borderColor = backgroundColor;
            timeMask.d.style.backgroundColor = backgroundColor;
        }
        if (properties['text_color']) {
            doc.getElementById('text').style.color = '' + properties['text_color'].value + '';
        }
        if (properties['text_opacity']) {
            doc.getElementById('text').style.backgroundColor = otherVariable.text_background_color.rgb
            // otherVariable.text_background_color.a = properties['text_opacity'].value;
        }
        if (properties['scroll_size']) {
            for (const elementsByClassNameElement of doc.getElementsByClassName(`mask`)) {
                elementsByClassNameElement.style.width = (properties['scroll_size'].value * 5.3) + 'px';

            }
        }
    });

})(document, window);