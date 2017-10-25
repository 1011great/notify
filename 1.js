const notify = new Notify({
  title: '最新通知',
  content: 'notify预览版发布'
})

notify.show({
  autoHide:false,
  //autoHide: true,
  //timeout:2000
})
//字体闪烁
var colors=new Array("red","orange","green","blue","browm","purple","pink");
var ind=0;
    function changecolor()
    {
        document.fgColor=colors[ind++];
        if (ind==(colors.length))
        {ind=0}
    }
    setInterval("changecolor()",500);
    window.onload=changecolor();
  