<template>
    <view class="add">
        <view class="m-form">
            <view class="form-item">
                <view class="label">姓名</view>
                <input class="input" type="text" placeholder-class="placeholder" placeholder="请输入收货人姓名" />
            </view>
            <view class="form-item">
                <view class="label">电话</view>
                <input class="input" type="text" placeholder-class="placeholder" placeholder="请输入收货人联系电话" />
            </view>
            <view class="form-item">
                <view class="label">地址</view>
                <input class="input" type="text" placeholder-class="placeholder" placeholder="请输入收货人姓名" />
            </view>
            <view class="form-item">
                <textarea class="area" placeholder="请输入具体地址，如某某街道某某小区等" placeholder-class="placeholder"></textarea>
            </view>
        </view>
        <view class="btn-sure">保存地址</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-sure {
    width: 630rpx;
    height: 90rpx;
    line-height: 90rpx;
    margin: 60rpx 0 40rpx 60rpx;
    text-align: center;
    border-radius: 50px;
    color: #fff;
    font-size: 32rpx;
    background-color: #D0A56B;
}
</style>
