<template>
    <view class="register">
        <image mode="widthFix" class="f-mt80" src="../../static/images/register.png" style="width: 100%;"></image>
        <view class="form">
            <view class="item">
                <input type="text" placeholder="输入手机号" placeholder-class="placeholder" />
            </view>
            <view class="item">
                <input type="text" placeholder="请输入密码" placeholder-class="placeholder" />
            </view>
            <view class="item">
                <input type="text" placeholder="请确认密码" placeholder-class="placeholder" />
            </view>
            <view class="btn-submit" @click="onRegister">注册</view>
        </view>
    </view>
</template>

<script>
export default {
    onLoad() {
        console.log(this.verify)
    },
    methods: {
        onRegister() {
            uni.request({
                url: 'http://192.168.8.124:3000/api/users/register',
                method: 'post',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                data: {
                    user_name: 'yellowstar',
                    password: '123456'
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
page {
    background-color: #fff;
}
.form {
    padding: 30rpx;
    input {
        height: 100rpx;
        font-size: 28rpx;
        border-bottom: 1rpx solid #ECECEC;
    }
    .btn-submit {
        display: block;
        width: 100%;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        margin-top: 60rpx;
        font-size: 32rpx;
        border-radius: 16rpx;
        color: #fff;
        background-color: #D0A56B;
    }
}
</style>
