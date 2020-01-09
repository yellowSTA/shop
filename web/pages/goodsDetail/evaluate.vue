<template>
    <view class="evaluate">
        <view class="item f-mb20">
            <view class="user">
                <image class="avatar" src="http://via.placeholder.com/54X54/ccc"></image>
                <text class="name">张大牛</text>
            </view>
            <view class="desc">多么好看的苹果,有这样的包装苹果肯定不会坏的,苹果收到后就马上打开箱子,香气扑鼻,即吃了一个,又脆又甜,好吃不贵</view>
            <view class="time">2017.08.09</view>
        </view>
        <view class="item">
            <view class="user">
                <image class="avatar" src="http://via.placeholder.com/54X54/ccc"></image>
                <text class="name">张大牛</text>
            </view>
            <view class="desc">多么好看的苹果,有这样的包装苹果肯定不会坏的,苹果收到后就马上打开箱子,香气扑鼻,即吃了一个,又脆又甜,好吃不贵</view>
            <view class="time">2017.08.09</view>
        </view>
    </view>
</template>

<script>
</script>

<style lang="scss" scoped>
.evaluate {
    position: relative;
    min-height: 100vh;
    padding: 20rpx;
    overflow: hidden;
    background-color: #fff;
    .title {
        margin-bottom: 20rpx;
        font-size: 28rpx;
    }
    .user {
        display: flex;
        align-items: center;
        .avatar {
            width: 54rpx;
            height: 54rpx;
            margin-right: 20rpx;
            border-radius: 50%;
        }
    }
    .desc {
        margin-top: 16rpx;
        font-size: 26rpx;
        line-height: 40rpx;
    }
    .time {
        margin-top: 10rpx;
        font-size: 24rpx;
        color: #ccc;
    }
}
</style>
