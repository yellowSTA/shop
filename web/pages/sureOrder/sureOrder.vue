<template>
    <view class="sureOrder">
        <!-- 头部 -->
        <view class="head">
            <!-- <view class="details">
                <view class="user">
                    <view>收货人：瞿龙</view>
                    <view>18565894578</view>
                </view>
                <view style="line-height: 50rpx;">收货地址：广东省深圳市龙华新区大浪街道龙胜大厦415 龙华新区大浪街道龙胜大厦415</view>
            </view> -->
            <view class="details">请选择收货地址</view>
            <image mode="widthFix" style="width: 22rpx;" src="../../static/images/icon_right-big.png"></image>
        </view>
        <image mode="widthFix" class="colorBar" src="../../static/images/color_bar.png"></image>
        <!-- 商品列表 -->
        <view class="goods">
            <view class="item">
                <image class="pic" src="http://via.placeholder.com/210X210/ccc"></image>
                <view class="info">
                    <view class="font_26">宏辉果蔬 苹果 烟台红富士 12个单75mm 总重约2.1kg</view>
                    <view class="sku">重量：2.1kg 种类：12粒75mm红富士</view>
                    <view class="other">
                        <view class="font_32 s-maincolor">￥24.90</view>
                        <view>数量：2</view>
                    </view>
                </view>
            </view>
            <view class="item">
                <image class="pic" src="http://via.placeholder.com/210X210/ccc"></image>
                <view class="info">
                    <view class="font_26">宏辉果蔬 苹果 烟台红富士烟台红富士烟台红富士</view>
                    <view class="sku">重量：2.1kg 种类：12粒75mm红富士</view>
                    <view class="other">
                        <view class="font_32 s-maincolor">￥24.90</view>
                        <view>数量：2</view>
                    </view>
                </view>
            </view>
            <view class="express">
                <view>快递费</view>
                <view>￥12.00</view>
            </view>
            <view class="express" style="border-bottom: 1rpx solid #E2E2E2;" @click="$refs.popup.open()">
                <view>优惠券</view>
                <view>
                    <text class="s-deepgray">满100减二十</text>
                    <image mode="widthFix" style="width: 20rpx;" src="../../static/images/icon-right.png"></image>
                </view>
            </view>
            <view class="total">共3件商品  小计：<text class="s-maincolor">￥107.68</text></view>
        </view>
        <view class="leaving-msg">
            <view class="label">买家留言</view>
            <input type="text" placeholder="非必填，输入对本次交易的说明" />
        </view>
        <!-- bar -->
        <view class="bar">
            <view class="flex-item f-tright f-pr20">
                <text>合计:</text>
                <text class="s-maincolor">￥205.48</text>
            </view>
            <view class="btn" @click="$refs.pay.open()">提交订单</view>
        </view>
        <!-- 优惠券 -->
        <uni-popup ref="popup" type="bottom">
            <view class="coupon">
                <view class="title">
                    <text class="text">优惠券</text>
                    <i class="icon cuIcon-close" @click="$refs.popup.close()"></i>
                </view>
                <view class="f-mb20">
                    <coupon></coupon>
                </view>
                <view class="f-mb20">
                    <coupon></coupon>
                </view>
            </view>
        </uni-popup>
        <!-- 支付方式 -->
        <uni-popup ref="pay" type="bottom">
            <view class="payBox">
                <view class="title">
                    <text class="text">选择支付方式</text>
                    <i class="icon cuIcon-close" @click="$refs.pay.close()"></i>
                </view>
                <view class="money">￥1024</view>
                <view class="f-pr20 f-pl20">
                    <radio-group>
                        <label class="item" v-for="(item, index) in payList" :key="index">
                            <image mode="widthFix" style="width: 80rpx;" :src="item.img"></image>
                            <text class="flex-item f-pl20">{{item.label}}</text>
                            <radio :value="item.value" :checked="item.checked" color="#D0A56B"></radio>
                        </label>
                    </radio-group>
                </view>
                <view class="btn-sure">确认支付</view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import coupon from '@/components/coupon.vue'
export default {
    data() {
        return {
            payList: [
                {
                    label: '微信',
                    value: 'wechat',
                    checked: true,
                    img: '/static/images/weixin_icon.png'
                },
                {
                    label: '支付宝',
                    value: 'Alipay',
                    img: '/static/images/fund_icon.png'
                }
            ]
        }
    },
    onReady() {
        //this.$refs.pay.open()
    },
    components: {
        uniPopup,
        coupon
    }
}
</script>

<style lang="scss" scoped>
.sureOrder {
    padding-bottom: 120rpx;
}
.head {
    display: flex;
    align-items: center;
    padding: 40rpx 30rpx;
    background-color: #fff;
    .details {
        flex: 1;
        padding-right: 24rpx;
        font-size: 26rpx;
    }
    .user {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24rpx;
        font-size: 32rpx;
    }
}
.colorBar {
    display: block;
    width: 100%;
}

.coupon {
    padding: 0 15rpx 50rpx 15rpx;
    background-color: #F0F0F0;
    .title {
        position: relative;
        padding: 20rpx;
        text-align: center;
        font-size: 32rpx;
        color: #666;
        .icon {
            position: absolute;
            right: 0;
            font-size: 38rpx;
        }
    }
}
.payBox {
    padding: 0 0 50rpx 0;
    background-color: #fff;
    .title {
        position: relative;
        padding: 20rpx;
        text-align: center;
        font-size: 32rpx;
        color: #666;
        border-bottom: 1rpx solid #ECECEC;
        .icon {
            position: absolute;
            right: 20rpx;
            font-size: 38rpx;
        }
    }
    .money {
        padding: 20rpx 0;
        text-align: center;
        font-size: 60rpx;
        color: #D0A56B;
    }
    .item {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        height: 120rpx;
        padding: 0 30rpx;
        border-top: 1rpx solid #ECECEC;
        &:last-child {
            border-bottom: 1rpx solid #ECECEC;
        }
    }
    .btn-sure {
        display: block;
        width: 624rpx;
        height: 104rpx;
        text-align: center;
        border-radius: 52px;
        margin: 60rpx 60rpx 0 60rpx;
        line-height: 104rpx;
        font-size: 32rpx;
        color: #fff;
        background-color: #D0A56B;
    }
}
.goods {
    padding: 30rpx 30rpx 0 30rpx;
    background-color: #fff;
    .item {
        display: flex;
        margin-bottom: 20rpx;
        .pic {
            width: 210rpx;
            height: 210rpx;
        }
        .info {
            position: relative;
            flex: 1;
            padding-left: 20rpx;
            height: 210rpx;
        }
        .sku {
            margin: 10rpx 0;
            font-size: 24rpx;
            color: #ccc;
        }
        .other {
            display: flex;
            justify-content: space-between;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            padding-left: 20rpx;
            font-size: 26rpx;
        }
    }
    .express {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 102rpx;
        font-size: 32rpx;
        border-top: 1rpx solid #E2E2E2;
    }
    .total {
        height: 100rpx;
        line-height: 100rpx;
        font-size: 32rpx;
        text-align: right;
    }
}

.leaving-msg {
    display: flex;
    align-items: center;
    height: 104rpx;
    margin: 10rpx 0;
    padding: 0 30rpx;
    font-size: 32rpx;
    background-color: #fff;
    input {
        flex: 1;
        text-align: right;
        height: 100%;
    }
}
.bar {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100rpx;
    font-size: 32rpx;
    background-color: #fff;
    .btn {
        width: 200rpx;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        color: #fff;
        background-color: #D0A56B;
    }
}
</style>
