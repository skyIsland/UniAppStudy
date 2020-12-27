<template>
	<form class='loginView' @submit="login">
		<view class="input-view">
			<view class="label-view">
				<text class="label">账号 </text>
			</view>
			<input class="input" type="text" placeholder="请输入用户名" name="nameValue" />
		</view>
		<view class="input-view">
			<view class="label-view">
				<text class="label">密码</text>
			</view>
			<input class="input" type="password" placeholder="请输入密码" name="passwordValue" />
		</view>
		<view class="button-view">
			<button type="default" class="login" hover-class="hover" formType="submit">登录</button>
			<button type="default" class="register" hover-class="hover" @click="register">免费注册</button>
		</view>
	</form>
</template>

<script>
	import util from '../../utils/util.js'

	export default {
		data() {
			return {};
		},
		methods: {
			login(e) {
				console.log("得到账号:" + e.detail.value.nameValue + ';得到密码:' + e.detail.value.passwordValue)

				if (e.detail.value.nameValue == '' || e.detail.value.passwordValue == '') {
					util.toastError('账号和密码均不能为空')
					return;
				}

				util.request(this.$serverUrl + '_Account/Login', {
					userid: e.detail.value.nameValue,
					password: e.detail.value.passwordValue,
					cookie: false
				}, 'POST').then((user) => {
					console.log(user);				
					if (user == undefined || user.access_token == '') {
						util.toastError('登录失败：未知错误')
						//that.loading = false
						return
					}
					util.setUser(user)
					util.toastSuccess('登录成功')
					setTimeout(function() {
						uni.redirectTo({
							url: '/pages/center/center'
						})
					}, 1500)
				}).catch((e) => {
				 console.log(e);
					//that.loading = false
					util.toastError(e.message)
				})

			},
			register() {
				console.log("前往注册页面")
			}
		}
	}
</script>

<style>

</style>
