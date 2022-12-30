// 创建 canvas 元素
const canvas = document.createElement('canvas')

// 设置 canvas 的宽度和高度
canvas.width = 500
canvas.height = 500

// 将 canvas 添加到文档中
document.body.appendChild(canvas)

// 获取 canvas 的绘图上下文
const ctx = canvas.getContext('2d')

// 定义绘制球的函数
function drawBall(x, y, radius, color) {
	ctx.beginPath()
	ctx.arc(x, y, radius, 0, 2 * Math.PI)
	ctx.fillStyle = color
	ctx.fill()
}

// 在 canvas 上绘制一个红色的球
drawBall(250, 250, 50, 'red')

// 定义监听键盘事件的函数
function handleKeyDown(event) {
	if (event.key === 'ArrowUp') {
		// 向上移动球
		y -= 10
	} else if (event.key === 'ArrowDown') {
		// 向下移动球
		y += 10
	} else if (event.key === 'ArrowLeft') {
		// 向左移动球
		x -= 10
	} else if (event.key === 'ArrowRight') {
		// 向右移动球
		x += 10
	}

	// 重新绘制球
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	drawBall(x, y, 50, 'red')
}

// 监听键盘事件
document.addEventListener('keydown', handleKeyDown)
// 创建 canvas 元素
const canvas = document.createElement('canvas')

// 设置 canvas 的宽度和高度
canvas.width = 500
canvas.height = 500

// 将 canvas 添加到文档中
document.body.appendChild(canvas)

// 获取 canvas 的绘图上下文
const ctx = canvas.getContext('2d')

// 定义绘制球的函数
function drawBall(x, y, radius, color) {
	ctx.beginPath()
	ctx.arc(x, y, radius, 0, 2 * Math.PI)
	ctx.fillStyle = color
	ctx.fill()
}

// 在 canvas 上绘制一个红色的球
drawBall(250, 250, 50, 'red')

// 定义监听键盘事件的函数
function handleKeyDown(event) {
	if (event.key === 'ArrowUp') {
		// 向上移动球
		y -= 10
	} else if (event.key === 'ArrowDown') {
		// 向下移动球
		y += 10
	} else if (event.key === 'ArrowLeft') {
		// 向左移动球
		x -= 10
	} else if (event.key === 'ArrowRight') {
		// 向右移动球
		x += 10
	}

	// 重新绘制球
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	drawBall(x, y, 50, 'red')
}

// 监听键盘事件
document.addEventListener('keydown', handleKeyDown)
