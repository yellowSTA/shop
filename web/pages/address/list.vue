<template>
    <view class="list">
        <uni-swipe-action>
            <uni-swipe-action-item :options="options" v-for="item in list" :key="item.id">
                <view class="item">
                    <view class="content">
                        <view class="user">
                            <text>{{item.name}}</text>
                            <text>{{item.mobile}}</text>
                        </view>
                        <view class="address">{{item.address}}</view>
                    </view>
                    <i class="icon cuIcon-edit"></i>
                </view>
            </uni-swipe-action-item>
        </uni-swipe-action>
        <navigator hover-class="none" url="/pages/address/add" class="btn-add">添加收货地址</navigator>
    </view>
</template>

<script>
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue' 
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    name: '陈彤',
                    mobile: '12343234567',
                    address: '深圳市福田区市花路25号银东大厦4楼B405',
                    isDefault: false
                },
                {
                    id: 2,
                    name: '陈彤',
                    mobile: '12343234567',
                    address: '深圳市福田区市花路25号银东大厦4楼B405',
                    isDefault: true
                },
                {
                    id: 3,
                    name: '陈彤',
                    mobile: '12343234567',
                    address: '深圳市福田区市花路25号银东大厦4楼B405',
                    isDefault: false
                }
            ],
            options:[
                {
                    text: '设为默认',
                    style: {
                        backgroundColor: '#007aff'
                    }
                }, {
                    text: '删除',
                    style: {
                        backgroundColor: '#dd524d'
                    }
                }
            ]
        }
    },
    components: {
        uniSwipeAction,
        uniSwipeActionItem
    }
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30rpx;
    border-bottom: 1rpx solid #ECECEC;
    .content {
        flex: 1;
        padding-right: 20rpx;
    }
    .icon {
        font-size: 38rpx;
    }
    .user {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20rpx;
        font-size: 32rpx;
    }
}
.btn-add {
    position: fixed;
    bottom: 40rpx;
    left: 50%;
    width: 630rpx;
    height: 90rpx;
    line-height: 90rpx;
    margin-left: -315rpx;
    text-align: center;
    border-radius: 50px;
    color: #fff;
    font-size: 32rpx;
    background-color: #D0A56B;
}
</style>
