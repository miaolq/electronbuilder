# tip
* 将自己电脑对应的声网插件(mac,windows)放入当前目录下,并改名为AgoraWebAgent.(默认已放入win64版)
* yarn
* npm run dist


* 仅在win64试验ok
* 快捷键图标,可能在重启电脑后才正确显示,windows的bug(网上有个issue)
* package.json文件关于如何打包
* 主要逻辑在main.js,通过nodejs的child_process运行插件

# feature
* 自动更新
* 代码签名,证书
* 插件关闭提示
* mac版集成声网插件