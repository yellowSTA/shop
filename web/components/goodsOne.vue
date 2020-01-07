<template>
    <view class="goods">
        <scroll-view class="scroll" scroll-x="true">
            <view class="list">
                <view class="item">
                    <image class="coverImg" src="http://via.placeholder.com/280X280/ccc"></image>
                    <view class="info">
                        <image mode="widthFix" class="tag" src="../../static/images/module_hot_icon.png"></image>
                        <view class="name">5斤装 云南腾冲特产大河型核桃</view>
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
                        <image mode="widthFix" class="tag" src="../../static/images/module_hot_icon.png"></image>
                        <view class="name">5斤装 云南腾冲特产大河型核桃</view>
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
                        <image mode="widthFix" class="tag" src="../../static/images/module_hot_icon.png"></image>
                        <view class="name">5斤装 云南腾冲特产大河型核桃</view>
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
        </scroll-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                
            };
        }
    }
</script>

<style lang="scss" scoped>
.goods {
    margin: 20rpx -30rpx;
}
.scroll {
    white-space: nowrap;
    .list {
        padding: 0 30rpx 20rpx 30rpx;
    }
}
.item {
    display: inline-block;
    width: 280rpx;
    margin-right: 20rpx;
    background-color: #fff;
    box-shadow:0px 10rpx 10rpx 0px rgba(0, 0, 0, 0.04);
    border-radius: 16rpx;
    overflow: hidden;
    .coverImg {
        display: block;
        width: 280rpx;
        height: 280rpx;
        border-radius: 16rpx 16rpx 0 0;
    }
    .tag {
        display: block;
        width: 72rpx;
        height: auto;
    }
    .info {
        padding: 10rpx;
        .name {
            margin-top: 6rpx;
            font-size: 24rpx;
            color: #383838;
            white-space: normal;
        }
        .other {
            display: flex;
            justify-content: space-between;
            margin-top: 14rpx;
            font-size: 20rpx;
        }
    }
    .price {
        font-size: 28rpx;
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
