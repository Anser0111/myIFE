document.write('<table border="1">');    //以表格规格打印
for(var i=1;i<=9;++i){    //开始一个数的循环
    document.write('<tr>');    //打印表格行标签
        for(var j=1;j<=i;j++){    //开始另一个数的循环
            document.write('<td>'+i+'x'+j+'='+(i*j)+'</td>');    //完成两数的相乘
        }
    document.write('</tr>');
}
document.write('</table>');
