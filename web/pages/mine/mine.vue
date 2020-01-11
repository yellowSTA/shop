<template>
    <view>
        <view class="head">
            <image mode="widthFix" class="avatar" src="../../static/images/defaultAvatar.png"></image>
            <view class="name">绿水长流</view>
        </view>
        <!-- neirong -->
        <view class="content">
            <view class="selection">
                <view class="title">
                    <view class="text">我的订单</view>
                    <view class="more">
                        <text>全部订单</text>
                        <image style="width: 20rpx;" src="../../static/images/icon-right.png" mode="widthFix"></image>
                    </view>
                </view>
                <view class="info">
                    <view class="list">
                        <view class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-payment.png"></image>
                            <view>待付款</view>
                            <view class="bridge"><Bridge>4</Bridge></view>
                        </view>
                        <view class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-shipped.png"></image>
                            <view>待发货</view>
                        </view>
                        <view class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-received.png"></image>
                            <view>待收货</view>
                        </view>
                        <view class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-all.png"></image>
                            <view>全部</view>
                        </view>
                    </view>
                </view>
            </view>
            <!--  -->
            <view class="selection f-mt30">
                <view class="title">
                    <view class="text">我的服务</view>
                </view>
                <view class="info">
                    <view class="list">
                        <view class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-Invitation.png"></image>
                            <view>邀请</view>
                        </view>
                        <view class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-ticket.png"></image>
                            <view>卡券</view>
                        </view>
                        <navigator hover-class="none" url="../address/list" class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-address.png"></image>
                            <view>收货地址</view>
                        </navigator>
                        <view class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-us.png"></image>
                            <view>关于我们</view>
                        </view>
                        <view class="item">
                            <image class="icon" mode="widthFix" src="../../static/images/mine-contact.png"></image>
                            <view>联系方式</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import Bridge from '../../components/bridge.vue';
export default {
    data() {
        return {
            
        }
    },
    components: {
        Bridge
    }
}
</script>

<style lang="scss" scoped>
.head {
    padding: 50rpx 0 80rpx 0;
    text-align: center;
    background-color: #D0A56B;
    .avatar {
        width: 120rpx;
        border: 5rpx solid #fff;
        border-radius: 50%;
    }
    .name {
        margin-top: 10rpx;
        font-weight: bold;
        font-size: 32rpx;
        color: #fff;
    }
}
.content {
    position: relative;
    top: -20rpx;
    padding: 30rpx;
    background-color: #F1F1F1;
    border-radius: 16rpx 16rpx 0 0;
}
.selection {
    background-color: #fff;
    border-radius: 16rpx;
    box-shadow:0px 4px 5px 0px rgba(38,38,38,0.12), 0px 2px 1px 0px rgba(38,38,38,0.05);
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90rpx;
        padding: 0 20rpx;
        border-bottom: 1rpx solid #ECECEC;
        .text {
            font-weight: bold;
            font-size: 28rpx;
        }
        .more {
            font-size: 24rpx;
            color: #999999;
        }
    }
    .list {
        overflow: hidden;
        padding: 20rpx 0 0 30rpx;
        margin-right: -42rpx;
        .item {
            position: relative;
            float: left;
            width: 130rpx;
            margin-right: 42rpx;
            margin-bottom: 40rpx;
            text-align: center;
            font-size: 24rpx;
        }
        .icon {
            width: 56rpx;
            margin-bottom: 10rpx;
        }
        .bridge {
            position: absolute;
            top: -4rpx;
            right: 10rpx;
        }
    }
}
</style>
