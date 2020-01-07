<template>
    <view class="goods">
        <view class="item">
            <image class="coverImg" src="http://via.placeholder.com/280X280/ccc"></image>
            <view class="info">
                <view class="name">5斤装 云南老字号特产大力 农家饲养猪肉</view>
                <image mode="widthFix" class="tag" src="../../static/images/module_hot_icon.png"></image>
                <view class="other">
                    <view class="price">
                        <text class="fh">¥ </text>
                        <text>18.8 </text>
                    </view>
                    <view class="num">2484人关注</view>
                </view>
            </view>
        </view>
        <view class="item">
            <image class="coverImg" src="http://via.placeholder.com/280X280/ccc"></image>
            <view class="info">
                <view class="name">5斤装 云南老字号特产大力 农家饲养猪肉</view>
                <image mode="widthFix" class="tag" src="../../static/images/module_hot_icon.png"></image>
                <view class="other">
                    <view class="price">
                        <text class="fh">¥ </text>
                        <text>18.8 </text>
                    </view>
                    <view class="num">2484人关注</view>
                </view>
            </view>
        </view>
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
.goods {
    margin: 20rpx 0;
}
.item {
    display: flex;
    height: 280rpx;
    margin-bottom: 20rpx;
    border-radius: 16rpx;
    box-shadow: 0px 10rpx 10rpx rgba(0, 0, 0, 0.04);
    overflow: hidden;
    .name {
        padding-top: 10rpx;
        font-size: 28rpx;
        color: #383838;
        line-height: 40rpx;
    }
    .coverImg {
        display: block;
        width: 280rpx;
        height: 280rpx;
    }
    .tag {
        display: block;
        width: 72rpx;
        height: auto;
        margin-top: 14rpx;
    }
    .info {
        position: relative;
        flex: 1;
        padding: 0 20rpx;
        .other {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 20rpx;
            padding: 0 20rpx;
        }
    }
    .price {
        font-size: 40rpx;
        font-weight: bold;
        color: #FA4B4B;
        .fh {
            margin-right: 6rpx;
            font-weight: normal;
            font-size: 24rpx;
        }
    }
    .num {
        font-size: 20rpx;
        color: #ccc;
    }
}
</style>
