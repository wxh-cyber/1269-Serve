<template>
  <view class="container">
    <view class="title">1269服务专区</view>

    <view class="modules">
      <view class="apply-chain">
        <image class="img-occupy" src="/static/申请企业上链.png" mode="aspectFill" />
      </view>

      <view class="apply-information">
        <view class="card">
          <image class="img-occupy" src="/static/上链企业数.png" mode="aspectFill" />
        </view>
        <view class="card">
          <image class="img-occupy" src="/static/产业链图谱.png" mode="aspectFill" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
</script>

<style scoped>
.container {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 65rpx 0 80rpx;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    to bottom,
    rgba(39, 170, 114, 1) 0%,
    rgba(39, 170, 114, 0.18) 42%,
    #f6fbf7 70%,
    #ffffff 100%
  );
}

.title {
  color: #ffffff;
  font-size: 48rpx;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
}

.modules {
  width: 100%;
  max-width: 960rpx;
  box-sizing: border-box;
  margin-top: 72rpx;
  padding: 0 40rpx;

  display: flex;
  align-items: stretch;
  gap: 40rpx;
}

.apply-chain,
.apply-information {
  flex: 1;
  min-width: 0;
}

.apply-chain {
  height: 455rpx;
  box-sizing: border-box;
  border: 1rpx solid rgba(255, 255, 255, 0.88);
  border-radius: 16rpx;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 18rpx 40rpx rgba(39, 170, 114, 0.08);
}

.apply-information {
  display: flex;
  flex-direction: column;
  gap: 40rpx;
}

.card {
  flex: 1;
  height: 208rpx;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 18rpx 40rpx rgba(39, 170, 114, 0.08);
}

.img-occupy {
  display: block;
  width: 100%;
  height: 100%;
}

:deep(.img-occupy img) {
  display: block;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
</style>
