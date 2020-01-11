<template>
    <view class="goods-detail">
        <view class="banner">
            <swiper class="swiper">
                <swiper-item class="item" v-for="(item, i) in banner" :key="i">
                    <image class="img" style="width: 100%;height: 100%;" :src="item"></image>
                </swiper-item>
            </swiper>
        </view>
        <!-- 商品信息 -->
        <view class="goods-info">
            <image mode="widthFix" style="width: 72rpx;" src="../../static/images/module_hot_icon.png"></image>
            <view class="name font_32">
                宏辉果蔬 红色苹果 烟台红富士 12个约80mm 总2.6kg 新鲜水果
            </view>
            <view class="price"><text class="font_32">￥</text>56.53</view>
            <view class="tag">
                <text>快递：0.00</text>
                <text>关注：4546</text>
                <text>新疆克孜勒苏</text>
            </view>
        </view>
        <!-- 评价 -->
        <view class="evaluate">
            <view class="title">商品评价（10）</view>
            <view class="item">
                <view class="user">
                    <image class="avatar" src="http://via.placeholder.com/54X54/ccc"></image>
                    <text class="name">张大牛</text>
                </view>
                <view class="desc">多么好看的苹果,有这样的包装苹果肯定不会坏的,苹果收到后就马上打开箱子,香气扑鼻,即吃了一个,又脆又甜,好吃不贵</view>
                <view class="time">2017.08.09</view>
            </view>
            <navigator hover-class="none" url="./evaluate" class="btn">查看全部评价</navigator>
        </view>
        <!-- 商品详情 -->
        <view class="details">商品详情</view>
        <!-- 底部bar -->
        <view class="bar">
            <view class="item flex-item">
                <i class="cuIcon-share"></i>
                <view class="text">分享</view>
            </view>
            <view class="item flex-item">
                <i class="cuIcon-cart"></i>
                <view class="text">购物车</view>
            </view>
            <view class="item flex-item">
                <i class="cuIcon-command"></i>
                <view class="text">客服</view>
            </view>
            <view class="item btn-add" @click="$refs.popup.open()">加入购物车</view>
            <view class="item btn-buy">立即购买</view>
        </view>
        <!-- 加入购物车选择框 -->
        <uni-popup ref="popup" type="bottom">
            <view class="select-box">
                <view class="goods">
                    <image class="pic" src="http://via.placeholder.com/218X218/ccc"></image>
                    <view class="info">
                        <view class="price">
                            <text class="font_24">￥</text>
                            <text>25.5</text>
                        </view>
                        <view class="name font_26">
                            黑龙江大米
                        </view>
                    </view>
                </view>
                <view class="selection">
                    <view class="title">种类</view>
                    <view class="list">
                        <view class="item">红富士12个</view>
                        <view class="item">红富士12个</view>
                        <view class="item active">红富士12个</view>
                        <view class="item">红富士12个</view>
                        <view class="item">红富士12个</view>
                    </view>
                </view>
                <view class="selection f-mt60">
                    <view class="title">口味</view>
                    <view class="list">
                        <view class="item">甜的</view>
                        <view class="item">咸的</view>
                        <view class="item active">苦的</view>
                        <view class="item">辣的</view>
                        <view class="item">酸的</view>
                    </view>
                </view>
                <view class="others">
                    <text class="s-gray font_26">数量</text>
                    <yp-number-box :min="1" :value="1" :max="9"></yp-number-box>
                </view>
                <view class="btns">
                    <view class="btn">加入购物车</view>
                    <view class="btn">立即购买</view>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
import uniPopup from "@/components/uni-popup/uni-popup.vue"
import ypNumberBox from "@/components/yp-number-box/yp-number-box.vue"
export default {
    data() {
        return {
            banner: [
                'http://via.placeholder.com/750X750/ccc',
                'http://via.placeholder.com/750X750/f5f5f5',
                'http://via.placeholder.com/750X750/666'
            ]
        }
    },
    onReady() {
        // this.$refs.popup.open()
    },
    components: {
        uniPopup,
        ypNumberBox
    }
}
</script>

<style lang="scss" scoped>
.goods-detail {
    background-color: #FFFFFF;
}
.banner {
    position: relative;
    width: 100%;
    height: 750rpx;
    .item, .swiper{
        width: 100%;
        height: 100%;
    }
}
.select-box {
    padding: 30rpx;
    border-radius: 16rpx 16rpx 0 0;
    background-color: #fff;
    .goods {
        display: flex;
        align-items: center;
        position: relative;
        top: -80rpx;
        .pic {
            width: 222rpx;
            height: 222rpx;
            border-radius: 16rpx;
            border: 6rpx solid #fff;
        }
        .info {
            padding: 10rpx 0 0 20rpx;
        }
        .price {
            margin-bottom: 10rpx;
            font-size: 34rpx;
            color: #FA4B4B;
        }
    }
    .selection {
        position: relative;
        top: -20rpx;
        .title {
            font-size: 26rpx;
            color: #999;
        }
        .list {
            margin-right: -20rpx;
            overflow: hidden;
        }
        .item {
            display: inline-block;
            height: 50rpx;
            line-height: 50rpx;
            padding: 0 30rpx;
            margin: 20rpx 20rpx 0 0;
            font-size: 26rpx;
            background: rgba(240,240,240,1);
            border-radius: 6rpx;
            &.active {
                color: #fff;
                background-color: #D0A56B;
            }
        }
    }
    .others {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40rpx;
    }
    .btns {
        display: flex;
        .btn {
            flex: 1;
            height:100rpx;
            line-height: 100rpx;
            text-align: center;
            margin: 80rpx -30rpx -30rpx -30rpx;
            font-size: 30rpx;
            color: #fff;
            background: rgba(234,187,123,1);
            &:last-child {
                background-color: #D0A56B;
            }
        }
    }
}
.goods-info {
    padding: 20rpx;
    
    .price {
        margin: 20rpx 0;
        font-size: 42rpx;
        color: #D55643;
        font-weight: 500;
    }
    .tag {
        display: flex;
        justify-content: space-between;
        font-size: 28rpx;
        color: #999999;
    }
}
.evaluate {
    position: relative;
    padding: 20rpx;
    overflow: hidden;
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
    .btn {
        width:208rpx;
        height:54rpx;
        line-height: 54rpx;
        text-align: center;
        margin: 60rpx 0 60rpx 270rpx;
        font-size: 24rpx;
        color: #D55643;
        border:1rpx solid #D55643;
        border-radius:28px;
    }
}
.details {
    padding: 20rpx;
}
.bar {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 105rpx;
    background-color: #fff;
    border-top: 1rpx solid #eee;
    .item {
        text-align: center;
    }
    .flex-item {
        padding: 10rpx 0 0 0;
        font-size: 22rpx;
        color: #FF8257;
        i {
            font-size: 36rpx;
        }
        .text {
            margin-top: 6rpx;
        }
    }
    .btn-add,
    .btn-buy{
        width:220rpx;
        height:104rpx;
        line-height: 104rpx;
        text-align: center;
        font-size: 30rpx;
        color: #fff;
        background: #E6BF73;
    }
    .btn-buy {
        background-color: #D0A56B;
    }
}
</style>
