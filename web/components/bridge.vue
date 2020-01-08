<template>
    <view class="bridge">
        <slot></slot>
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
.bridge {
    display: block;
    width: 32rpx;
    height: 32rpx;
    line-height: 32rpx;
    text-align: center;
    font-size: 20rpx;
    color: #fff;
    border-radius: 50%;
    background-color: #D44D44;
}
</style>
