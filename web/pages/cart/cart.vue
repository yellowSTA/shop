<template>
    <view class="cart">
        <cu-custom bgColor="topBar-bg1">
            <block slot="left"><text></text></block>
            <block slot="content">购物车</block>
            <view slot="right">
                <text class="btn-edit" v-if="!isEdit" @click="onEdit">编辑</text>
                <text class="btn-edit" v-else @click="onEdit">完成</text>
            </view>
        </cu-custom>
        <!-- 商品列表 -->
        <view class="content">
            <view class="list">
                <view class="item">
                    <i class="icon cuIcon-roundcheck"></i>
                    <image class="pic" src="http://via.placeholder.com/200X200/ccc"></image>
                    <view class="info">
                        <view class="name z-ellipsis-2">5斤装 云南特大号农家猪肉巴适得约75mm 总重约2.1kg 总重约2.1kg </view>
                        <view class="sku">1袋500g</view>
                        <view class="other">
                            <view class="price">
                                <text class="font_24">￥</text>24.9
                            </view>
                            <yp-number-box :min="0" :max="9"></yp-number-box>
                        </view>
                    </view>
                </view>
                <view class="item">
                    <i class="icon cuIcon-roundcheck"></i>
                    <image class="pic" src="http://via.placeholder.com/200X200/ccc"></image>
                    <view class="info">
                        <view class="name z-ellipsis-2">5斤装 云南特大号农家猪肉巴适得约75mm 总重约2.1kg 总重约2.1kg </view>
                        <view class="sku">1袋500g</view>
                        <view class="other">
                            <view class="price">
                                <text class="font_24">￥</text>24.9
                            </view>
                            <yp-number-box :min="0" :max="9"></yp-number-box>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <!-- bar -->
        <view class="bar">
            <view class="flex-item flex-row" @click="selectAll">
                <i v-if="checkAll" class="icon active cuIcon-roundcheckfill"></i>
                <i v-else class="icon cuIcon-roundcheck"></i>
                <text class="font_26 s-gray">全选</text>
            </view>
            <template v-if="!isEdit">
                <text>合计:</text>
                <text class="font_24 s-red">￥</text>
                <text class="s-red font_34">88.00</text>
                <navigator hover-class="none" url="/pages/sureOrder/sureOrder" class="btn">结算(1)</navigator>
            </template>
            <template v-else>
                <text class="btn-del">删除</text>
            </template>
        </view>
    </view>
</template>

<script>
    import ypNumberBox from "@/components/yp-number-box/yp-number-box.vue"
    export default {
        data() {
            return {
                checkAll: false,
                isEdit: false
            }
        },
        methods: {
            // 全选、全不选
            selectAll() {
                this.checkAll = !this.checkAll
            },
            // 编辑
            onEdit() {
                this.isEdit = !this.isEdit
            }
        },
        components: {
            ypNumberBox
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        padding: 20rpx 30rpx;
    }

    .list {
        padding: 40rpx 30rpx 10rpx 30rpx;
        border-radius: 16rpx;
        background-color: #fff;
        box-shadow: 0px 4px 5px 0px rgba(38, 38, 38, 0.12), 0px 2px 1px 0px rgba(38, 38, 38, 0.05);

        .item {
            display: flex;
            align-items: center;
            margin-bottom: 40rpx;

            .pic {
                width: 200rpx;
                height: 200rpx;
                border-radius: 16rpx;
            }

            .info {
                flex: 1;
                height: 200rpx;
                padding-left: 20rpx;
                position: relative;
            }

            .name {
                font-size: 24rpx;
                font-weight: 500;
            }

            .sku {
                margin: 10rpx 0;
                font-size: 24rpx;
                color: #999;
            }

            .other {
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
                padding-left: 20rpx;
            }

            .price {
                font-size: 28rpx;
                color: #FA4B4B;
                font-weight: 500;
            }

            .icon {
                margin-right: 20rpx;
                font-size: 38rpx;
                color: #ccc;
            }
        }
    }

    .btn-edit {
        padding-right: 20rpx;
    }

    .bar {
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        /* #ifdef H5 */
        bottom: 50px;
        /* #endif */
        left: 0;
        width: 100%;
        height: 100rpx;
        padding: 0 30rpx;
        background-color: #fff;

        .icon {
            margin-right: 10rpx;
            font-size: 38rpx;
            color: #ccc;
        }

        .btn {
            width: 160rpx;
            height: 80rpx;
            line-height: 80rpx;
            text-align: center;
            margin-left: 40rpx;
            font-size: 26rpx;
            color: #fff;
            background: rgba(208, 165, 107, 1);
            border-radius: 16rpx;
        }
        .btn-del {
            height: 50rpx;
            line-height: 50rpx;
            padding: 0 30rpx;
            font-size: 24rpx;
            border: 1rpx solid #666;
            border-radius: 16px;
        }
    }
    .icon.active {
        color: #D0A56B;
    }
</style>
