<template>
  <view class="container">
	<!-- 顶部标题 -->
    <view class="title">1269服务专区</view>

    <!-- 卡片模块区域 -->
    <view class="modules">
	  <!-- 左侧申请企业上链 -->
      <view class="apply-chain">
        <image class="img-occupy" src="/static/申请企业上链.png" mode="aspectFill" />
		<!-- 卡片内部信息模块 -->
		<view class="card-inner">
			<text>申请</text>
			<text>企业上链</text>
			<view></view>
		</view>
      </view>

      <!-- 右侧两个垂直的申请信息 -->
      <view class="apply-information">
        <view class="card">
          <image class="img-occupy" src="/static/上链企业数.png" mode="aspectFill" />
		  <view class="">
			  
		  </view>
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
/* 外层容器样式 */
.container {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 65rpx 0 80rpx;

  /* 定义背景颜色 */
  background: linear-gradient(
    to bottom,
    rgba(39, 170, 114, 1) 0%,
    rgba(39, 170, 114, 0.18) 42%,
    #f6fbf7 70%,
    #ffffff 100%
  );
}

/* 标题样式 */
.title {
  color: #ffffff;
  font-size: 48rpx;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
}

/* 卡片模块区域样式 */
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

/* 左右两侧卡片的公用样式 */
.apply-chain,
.apply-information {
  flex: 1;
  min-width: 0;
}

/* 左侧申请企业上链样式 */
.apply-chain {
  position: relative;
  height: 455rpx;
  box-sizing: border-box;
  border: 1rpx solid rgba(255, 255, 255, 0.88);
  border-radius: 16rpx;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 18rpx 40rpx rgba(39, 170, 114, 0.08);
}

/* 右侧申请信息样式 */
.apply-information {
  display: flex;
  flex-direction: column;
  gap: 40rpx;
}

/* 卡片样式 */
.card {
  position:relative;
  flex: 1;
  height: 208rpx;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 18rpx 40rpx rgba(39, 170, 114, 0.08);
}

/* 卡片背景图样式 */
.img-occupy {
  position:absolute;
  width: 100%;
  height: 100%;
  inset:0;
}

/* 保证占满，仅在H5端进行处理，考虑跨兼容性 */
/* #ifdef H5 */
:deep(.img-occupy img) {
  display: block;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
/* #endif */

/* 蓝色卡片边框 */
.blue {
	background:linear-gradient(135deg,#3aa6ff,#6ec6ff);
}

/* 绿色卡片边框 */
.green {
	background:linear-gradient(135deg,#2bb673,#3fd38a);
}

/* 卡片内部信息样式 */
.card-inner {
	position:relative;
	z-index:2;
}
</style>
