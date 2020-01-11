<template>
    <view class="coupon-item">
        <image mode="widthFix" class="bg" src="../../static/images/cp_validity_bg.png"></image>
        <view class="info">
            <view class="left">
                <view class="money">
                    <text class="font_40">￥ </text>50
                </view>
                <view class="desc">满199元使用</view>
            </view>
            <view class="right">
                <view class="name">全场全品类全场全品类全场全品品品类(特列商品除外）</view>
                <view class="time">
                    <text>2017.12.12-2017.12.30</text>
                    <i class="icon cuIcon-roundcheck"></i>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.coupon-item {
    position: relative;
    .info {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .left {
        width: 254rpx;
        text-align: center;
        color: #fff;
        .money {
            padding-top: 30rpx;
            font-size: 82rpx;
        }
    }
    .right {
        flex: 1;
        position: relative;
        padding: 10rpx 20rpx;
        .name {
            height: 102rpx;
            font-size: 22rpx;
            color: #666;
        }
        .time {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 84rpx;
            font-size: 20rpx;
            color: #999;
        }
        .icon {
            font-size: 40rpx;
            color: #999;
        }
    }
    .bg {
        width: 720rpx;
        display: block;
    }
}
</style>
