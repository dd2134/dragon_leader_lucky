// 引入jQuery  const $ = require('jquery');    // 定义函数，使用jQuery  function printMessage() {    // 例如，在DOM加载完成后打印欢迎消息    $(document).ready(function() {  	var arr = "青团是江南地区的传统特色小吃，也叫“艾团”、“清明果”或“艾粑粑”、“艾糍粑”。它采用青艾的汁或浆麦草、雀麦草汁等与糯米粉一起捣制，并包裹上各种甜或咸的馅料（如豆沙、芝麻、蛋黄等），再搓揉成团状，放入蒸笼里蒸熟。蒸熟后的青团表面会刷上一层熟油，使其看起来碧青油亮。青团口感糯韧绵软，清香可口，带有一种清淡悠长的青草香气，从色彩到口感都充满了春天的气息。"    console.log(arr);    });  }    // 暴露函数作为模块的公开API  module.exports = printMessage; 