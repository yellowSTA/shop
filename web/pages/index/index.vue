<template>
    <view class="content">
        <view class="header">
            <view class="search-box">
                <i class="iconfont iconsousuo"></i>
                <input class="input" type="text" confirm-type="search" placeholder="新疆特产和田大枣" />
            </view>
            <i class="iconfont iconxiaoxi font_48"></i>
        </view>
        <!-- 轮播 -->
        <swiper class="swiper" :indicator-dots="true">
            <swiper-item class="item">
                <image class="img" src="http://img1.gtimg.com/rushidao/pics/hv1/20/108/1744/113431160.jpg"></image>
            </swiper-item>
            <swiper-item class="item">
                <image class="img" src="http://file02.16sucai.com/d/file/2014/0704/e53c868ee9e8e7b28c424b56afe2066d.jpg"></image>
            </swiper-item>
            <swiper-item class="item">
                <image class="img" src="http://i2.w.yun.hjfile.cn/doc/201303/54c809bf-1eb2-400b-827f-6f024d7d599b_01.jpg"></image>
            </swiper-item>
        </swiper>
        <!-- 菜单 -->
        <view class="menus">
            <view class="item">
                <image class="img" mode="widthFix" src="http://via.placeholder.com/100X100/ccc"></image>
                <view>水果</view>
            </view>
            <view class="item">
                <image class="img" mode="widthFix" src="http://via.placeholder.com/100X100/ccc"></image>
                <view>特产</view>
            </view>
            <view class="item">
                <image class="img" mode="widthFix" src="http://via.placeholder.com/100X100/ccc"></image>
                <view>牛奶</view>
            </view>
            <view class="item">
                <image class="img" mode="widthFix" src="http://via.placeholder.com/100X100/ccc"></image>
                <view>当季</view>
            </view>
        </view>
        <!-- 推广广告 -->
        <view class="banner">
            <image class="img" mode="widthFix" src="http://via.placeholder.com/690X140/ccc"></image>
        </view>
        <!-- 商品列表 -->
        <view class="goods">
            <view class="goods-title">
                <text>常规商品</text>
                <text>更多<i class="iconfont iconright"></i></text>
            </view>
            <goods-one></goods-one>
            <view class="goods-title">
                <text>常规精品</text>
                <text>更多<i class="iconfont iconright"></i></text>
            </view>
            <goods-two></goods-two>
            <view class="goods-title">
                <text>活动产品</text>
                <text>更多<i class="iconfont iconright"></i></text>
            </view>
            <goods-three></goods-three>
        </view>
    </view>
</template>

<script>
    import GoodsOne from '../../components/goodsOne.vue'
    import GoodsTwo from '../../components/goodsTwo.vue'
    import GoodsThree from '../../components/goodsThree.vue'
    export default {
        data() {
            return {
                title: 'Hello'
            }
        },
        onLoad() {

        },
        methods: {

        },
        components: {
            GoodsOne,
            GoodsTwo,
            GoodsThree
        }
    }
</script>

<style lang="scss" scoped>
.content {
    padding: 100rpx 30rpx;
    background-color: #fff;
}
.header {
    display: flex;
    align-items: center;
    padding: 20rpx 30rpx;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    .search-box {
        display: flex;
        align-items: center;
        flex: 1;
        height: 70rpx;
        margin-right: 20rpx;
        padding: 0 26rpx;
        border:1px solid #ccc;
        border-radius:20px;
    }
    .input {
        height: 100%;
        flex: 1;
        padding-left: 24rpx;
    }
}
.swiper {
    width: 100%;
    height: 400rpx;
    margin-top: 40rpx;
    border-radius: 20rpx;
    box-shadow: 0 4px 20rpx rgba(181,181,181,.6);
    overflow: hidden;
    .item {
        width: 100%;
    }
    .img {
        width: 100%;
        height: 100%;
        border-radius: 20rpx;
    }
}
.menus {
    margin: 60rpx -30rpx 0 -30rpx;
    overflow: hidden;
    .item {
        display: inline-block;
        width: 186rpx;
        margin-bottom: 30rpx;
        text-align: center;
    }
    .img {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
    }
}
.banner {
    display: flex;
    width: 100%;
    height: 220rpx;
    align-items: center;
    .img {
        width: 100%;
        border-radius: 20rpx;
    }
}
.goods-title {
    display: flex;
    justify-content: space-between;
    font-size: 32rpx;
    .iconfont {
        transform: rotate(90deg);
    }
}
</style>
