function toast(title, duration = 1500, success) {
	uni.showToast({
		title: title || "出错啦~",
		icon: success ? 'success' : 'none',
		duration: duration || 2000
	})
}

export default toast
