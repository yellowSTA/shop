let verify = {}
verify.config = {} //从vue中读取定义要检查的字段和规则
let $trim = function(val) {
    // return val.replace(/(^\s*)|(\s*$)/g, "");
    if(val && typeof val === 'string') {
        return val.replace(/^\s+(.*?)\s+$/, "$1")
    } else {
        return val;
    }
    return val
}

verify.rules = {
    password: {
        method: function(val) {
            const reg = /^\S{6,32}$/;
            if(!reg.test(val)){
                return false;
            }
            return true;
        },
        errMsg: '密码长度6-32位'
    },
    required: {
        method: (val) => {
            if (val == '') {
                return false
            }
            return true;
        },
        errMsg: '不能为空'
    },
    number: {
        method: function(val) {
            if(isNaN(val)) {
                return false
            }
            return true;
        },
        errMsg: '请填写正确的数字格式'
    },
    //验证码
    code: {
        method: function(val) {
            const reg = /^[0-9]{3,6}$/;
            if (val == '') {
                this.errMsg = '请填写验证码';
                return false;
            }
            if (!reg.test(val)) {
                this.errMsg = '验证码格式错误！';
                return false;
            }
            return true;
        },
        errMsg: '验证码格式错误！'
    },
    //手机号码
    mobile: {
        method: function(val) {
            const reg = /^1\d{10}$/;
            if(val == '') {
                this.errMsg = '请填写手机号码';
                return false;
            }
            if(!reg.test(val)){
                this.errMsg = '手机格式错误';
                return false;
            }
            return true;
        },
        errMsg: '手机格式错误！'
    },
    //邮箱
    email: {
        method: function(val) {
            const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if(!reg.test(val)) {
                return false;
            }
            return true;
        },
        errMsg: '邮箱格式错误'
    },
    //身份证
    IdCard: {
        method: function(val) {
            var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
            if(!reg.test(val)) {
                return false;
            }
            return true;
        },
        errMsg: '身份证格式错误'
    }
}

verify.validate = function(params) {
    for (let k in params) {
        let config = verify.config[k];
        if(!config){
            // console.warn('the rule "'+k+'" is not found')
            continue
        }
        let len = config.length;

        for (let i = 0; i < len; i++) {
            let obj = verify.rules[config[i].method]; //从rules获取对应的对象
            let b = null;
            let errmsg = '';

            if (typeof config[i].method == 'function') {
                b = config[i].method($trim(params[k]));
                errmsg = config[i].errMsg;
            } else if (obj) {
                b = obj.method($trim(params[k]));
                errmsg = config[i].errMsg ? config[i].errMsg : obj.errMsg; //判断是否有自定义消息
            } else {
                console.error('[verify] '+k + ': rule is not defined');
                return false;
            }
            
            if (!b) {
                verify.$errMsg = errmsg;
                return false;
            } else{
                verify.$errMsg = '';
            }
        }
    }

    return true;
}

verify.install = function(Vue, options) {

    Vue.mixin({
        created: function() {
            let option = this.$options.verify;
            if (option) {
                verify.config = option;

                if (options && options.rules) {
                    verify.rules = Object.assign({}, verify.rules, options.rules)
                }
            }

        }
    })
}

export default verify