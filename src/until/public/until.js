/*
 * @Author: CaoJ_20132014
 * @Date: 2018-02-01 09:01:39
 * @Last Modified by: CaoJ_20132014
 * @Last Modified time: 2018-04-16 14:04:31
 */
// import Cookie from 'js-cookie';
const PublicMethod = {
    /**
     * @param {time} 时间字符串 s20 表示20秒，m30 表示30分钟 h12 表示12小时 d30 表示30天 new Date()时间戳转对象
	 * @returns {object}
     */
    setTimes: (time) => {
        let date = new Date();
        let str1 = time.substring(1, time.length) * 1;
        let str2 = time.substring(0, 1);
        if (str2 == 's') {
            return new Date(date.setTime(date.getTime() + 1000 * str1));
        } else if(str2 == 'm'){
            return new Date(date.setTime(date.getTime() + 1000 * 60 * str1));
        } else if (str2 == 'h') {
            return new Date(date.setTime(date.getTime() + 1000 * 60 * 60 * str1));
        } else if (str2 == 'd') {
            return new Date(date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * str1));
        } else if (str2 == 'D') {
            return new Date(date.setTime(date.getTime() - 1000 * 60 * 60 * 24 * str1));
        }
    },
    /**
     * @param {type} 'set设置', 'get获取', 'remove移除'
     * @param {name} cookie 别名
     * @param {data} cookie 数据
     * @param {time} cookie 过期时间
     * @param {Path} cookie 路径
     */
    JS_Cookie: (type, name, data, time, Path) => {
        if (Path) {
            if (type == 'set' && name && data) {
                Cookie.set(name, data, { expires: time, path: Path });
            } else if (type == 'get' && name && !data) {
                return Cookie.getJSON(name);
            } else if (type == 'remove' && name && data && time && Path) {
                Cookie.remove(name, { path: Path });
            }
        } else {
            if (type == 'set' && name && data) {
                Cookie.set(name, data, { expires: time });
            } else if (type == 'get' && name && !data) {
                return Cookie.getJSON(name);
            } else if (type == 'remove' && name && !data) {
                Cookie.remove(name);
            }
        }
    },
    /**
     * @desc 格式化时间
     * @param {time} 需要格式化的时间
     * @param {cFormat} 格式化的规则 {y}-{m}-{d} {h}:{i}:{s} {a} 或 {y}-{m}-{d} {h}:{i}:{s}
     */
    parseTime: (time, cFormat) => {
        if (arguments.length === 0) {
            return null
        }
        const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
        let date;
        if (typeof time === 'object') {
            date = time;
        } else {
            if (('' + time).length === 10) time = parseInt(time) * 1000;
            date = new Date(time);
        }
        const formatObj = {
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate(),
            h: date.getHours(),
            i: date.getMinutes(),
            s: date.getSeconds(),
            a: date.getDay()
        }
        const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
            let value = formatObj[key];
            if (key === 'a') return ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][value - 1];
            if (result.length > 0 && value < 10) {
                value = '0' + value;
            }
            return value || 0;
        });
        return time_str;
    },
    /**
     * @desc 获取地址中的查询参数，输出对象
     * @param {url} 地址连接（可不传，即为当前地址）
     */
    getQueryParam: (url) => {
        url = url == null ? window.location.href : url;
        const search = url.substring(url.lastIndexOf('?') + 1);
        const queryObj = {};
        const reg = /([^?&=]+)=([^?&=]*)/g;
        search.replace(reg, (rs, $1, $2) => {
            const name = decodeURIComponent($1);
            let val = decodeURIComponent($2);
            val = String(val);
            queryObj[name] = val;
            return rs;
        });
        return queryObj;
    },
    /**
     * @desc 判断字符1是否包含字符串2
     * @param {str1, str1} str1：字符串；str2：被包含的字符串
     * @returns 如果通过验证返回true,否则返回false
     */
    isMatch: (str1, str2) => {
        let index = str1.indexOf(str2);
        if (index == -1) return false;
        return true;
    },
    /**
     * @desc 替换字符串
     * @param {str1} str：全部的字符串
     * @param {str2} str：需要被替换的字符串
     * @param {str3} str：用于替换的字符串
     * @returns 返回替换后的字符串
     */
    replaceAll: (str1, str2, str3) => {
        let regExp = new RegExp(str2, "g");
        return str1.replace(regExp, str3);
    },
    /**
     * @desc 拼接字符串
     * @param {arr} 数组
     * @param {str} 字符串
     * @returns 返回拼接后的字符串
     */
    connectString(arr, str) {
        let Str = '';
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (i < arr.length - 1) {
                Str += item + str;
            } else {
                Str += item;
            }
        }
        return Str;
    },
    /**
     * @desc 数组去重
     * @param {arr} 需要去重的数组
	 * @returns {array} 去重后的数组
     */
    unique: (arr) => {
        let result = [], json = {};
        for (let i = 0, len = arr.length; i < len; i++) {
            if (!json[arr[i]]) {
                json[arr[i]] = 1;
                result.push(arr[i]); //返回没被删除的元素
            }
        }
        return result;
    },
    /**
     * @desc 判断移动端手机是IOS还是Android
	 * @returns {string} Android或者ISO
     */
    judgePhone: () => {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            return "IOS";
        } else if (/(Android)/i.test(navigator.userAgent)) {
            return "Android";
        };
    },
    /**
     * @desc 根据手机号判断运营商
	 * @returns {string} YD 移动 LT联通 DX电信
     */
    yunyingshang: (phone) => {
        let CMCC = /(^((13[4-9]{1})|(147)|(15[0-2]{1})|(15[7-9]{1})|(178)|(18[2-4]{1})|(18[7-8]{1}))\d{8}$)|(^((1703)|(1705)|(1706))\d{7}$)/;//中国移动  
        let CUCC = /(^((13[0-2]{1})|(145)|(155)|(156)|(171)|(175)|(176)|(185)|(186))\d{8}$)|(^(170[7-9]{1})\d{7}$)/;//中国联通  
        let CTCC = /(^((133)|(149)|(153)|(173)|(177)|(180)|(181)|(189)|(199))\d{8}$)|(^(170[0-2]{1})\d{7}&)/;//中国电信  
        if (CMCC.test(phone)) {
            phoneType = "YD";
        }
        else if (CUCC.test(phone)) {
            phoneType = "LT";
        }
        else if (CTCC.test(phone)) {
            phoneType = "DX";
        } 
    }
}
export default PublicMethod;
