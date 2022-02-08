window.addEventListener('load', function() {
    //获取元素
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    //鼠标进入遮挡层与大图片出现，鼠标离开遮挡层与大图片消失
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })
        //鼠标拖拽效果
    preview_img.addEventListener('mousemove', function(e) {
        // 获取鼠标在盒子里面坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //默认鼠标在遮挡层中间，盒子的坐标为鼠标在盒子坐标减去盒子宽度一半，高度一半
        var MaskX = x - mask.offsetWidth / 2;
        var MaskY = y - mask.offsetHeight / 2;
        //设置限定条件,遮挡层不能超出盒子
        var MaskMaxX = this.offsetWidth - mask.offsetWidth;
        var MaskMaxY = this.offsetHeight - mask.offsetHeight;
        if (MaskX <= 0) {
            MaskX = 0
        } else if (MaskX >= MaskMaxX) {
            MaskX = MaskMaxX;
        }
        if (MaskY <= 0) {
            MaskY = 0
        } else if (MaskY >= MaskMaxY) {
            MaskY = MaskMaxY;
        }
        // 不要忘记加单位
        mask.style.left = MaskX + 'px';
        mask.style.top = MaskY + 'px';
        //移动遮挡层，大图片随遮挡层一起移动
        var bigImg = document.querySelector('.bigImg');
        //大图片移动最大距离就是大图片的高度和宽度减去装大图片盒子的宽高
        var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
        var bigMaxY = bigImg.offsetHeight - big.offsetHeight;
        //大图片移动距离 = 遮挡层移动距离*大图片移动最大距离/遮挡层移动最大距离
        var bigImgX = MaskX * bigMaxX / MaskMaxX;
        var bigImgY = MaskY * bigMaxY / MaskMaxY;
        console.log(bigMaxY);
        console.log(bigImgY);
        bigImg.style.left = -bigImgX + 'px';
        bigImg.style.top = -bigImgY + 'px';
    })
})