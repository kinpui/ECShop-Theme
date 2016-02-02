/** 
9连击 2014/11/7 



***/

//打乱9连击

function rand_c(){

	var arr=[];
    for(var i=1;i<17;i++){
    arr[i]=i;
    }
    arr.sort(function(){ return 0.5 - Math.random() })
      $("#rand_c").html(
		  "	<div class=\"ui-grid-c\"><div id=\"no"+arr[0]+"\" onclick=\"sub("+arr[0]+");\" class=\"ui-block-a\" ><img   style=\"width:100%\" src=\"themes/oppo/images/click/"+arr[0]+".png\" /></div>"+
		   "<div  id=\"no"+arr[2]+"\"  onclick=\"sub("+arr[2]+");\" class=\"ui-block-c\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[2]+".png\" /></div>"+
		 "<div  id=\"no"+arr[13]+"\"  onclick=\"sub("+arr[13]+");\" class=\"ui-block-b\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[13]+".png\" /></div>"+
	      "<div  id=\"no"+arr[3]+"\"  onclick=\"sub("+arr[3]+");\" class=\"ui-block-d\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[3]+".png\" /></div></div>"+
		  "	<div class=\"ui-grid-c\"><div id=\"no"+arr[4]+"\" onclick=\"sub("+arr[4]+");\" class=\"ui-block-a\" ><img   style=\"width:100%\" src=\"themes/oppo/images/click/"+arr[4]+".png\" /></div>"+
		  "<div  id=\"no"+arr[5]+"\"  onclick=\"sub("+arr[5]+");\" class=\"ui-block-b\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[5]+".png\" /></div>"+
		   "<div  id=\"no"+arr[10]+"\"  onclick=\"sub("+arr[10]+");\" class=\"ui-block-c\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[10]+".png\" /></div>"+
	      "<div  id=\"no"+arr[7]+"\"  onclick=\"sub("+arr[7]+");\" class=\"ui-block-d\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[7]+".png\" /></div></div>"+
		  "	<div class=\"ui-grid-c\"><div id=\"no"+arr[8]+"\" onclick=\"sub("+arr[8]+");\" class=\"ui-block-a\" ><img   style=\"width:100%\" src=\"themes/oppo/images/click/"+arr[8]+".png\" /></div>"+
		  "<div  id=\"no"+arr[9]+"\"  onclick=\"sub("+arr[9]+");\" class=\"ui-block-b\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[9]+".png\" /></div>"+
		  "<div  id=\"no"+arr[14]+"\"  onclick=\"sub("+arr[14]+");\" class=\"ui-block-c\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[14]+".png\" /></div>"+
	      "<div  id=\"no"+arr[11]+"\"  onclick=\"sub("+arr[11]+");\" class=\"ui-block-d\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[11]+".png\" /></div></div>"+
		  "	<div class=\"ui-grid-c\"><div id=\"no"+arr[12]+"\" onclick=\"sub("+arr[12]+");\" class=\"ui-block-a\" ><img   style=\"width:100%\" src=\"themes/oppo/images/click/"+arr[12]+".png\" /></div>"+
		  "<div  id=\"no"+arr[1]+"\"  onclick=\"sub("+arr[1]+");\" class=\"ui-block-b\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[1]+".png\" /></div>"+
		  "<div  id=\"no"+arr[6]+"\"  onclick=\"sub("+arr[6]+");\" class=\"ui-block-c\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[6]+".png\" /></div>"+
	      "<div  id=\"no"+arr[15]+"\"  onclick=\"sub("+arr[15]+");\" class=\"ui-block-d\"><img style=\"width:100%\"  src=\"themes/oppo/images/click/"+arr[15]+".png\" /></div></div>"
	  );
}




var i;  //提交过来的数字
var val;  //设置的值

function sub(i){
//delCookie("name")

if(getCookie("name") == null){
    setCookie("name", i)
	if(getCookie("name") != 1){
	    delCookie("name")
		alert('请选择NO1');
	}else{
	//alert(i);
	$("#no"+i).css("background-color","#696969");
	}
}else{

	var previou;  //上一次击的值 
	var next;       //现在点击的值
	previou = getCookie("name");
	 setCookie("name", i);
     next = getCookie("name");

	if(next - previou == 1){
		$("#no"+i).css("background-color","#696969");
	}else{
		alert('请按顺序点击');
		location.reload();
	}

	if(next == 9){
			alert('点击完成');

		//异步
		//当完成时提交时判断
		//如果名额没满，则返回他的名次
		//如果名额已满, 则返回挑战失败
			var id;
				id = $('#aid').val();
						$(document).ready(function(){
									$.post("click.php",
									{
									  act:"is_finish",
									  id:id,
									  finish: '1'
									},
								function(data,status){
									  $("#prize").trigger("click");
									  $("#result").html(data);	
									
									//	if(data. == '1'){
									//		$("#pagetwo").removeClass("bgpersonal");
										//	$("#pagetwo").addClass("bgpersonal_z");
									//}

								//  alert("Data: " + data + "\nStatus: " + status);
								});
						 });
				}
	}

}


			var id;
				id = $('#aid').val();
						$(document).ready(function(){
									$.post("click.php",
									{
									  act:"is_finishp",
									  id:id,
									  finish: '1'
									},
								function(data,status){
										if(data != ''){
									  $("#prize").trigger("click");
									   $("#pagetwo").toggleClass("bgpersonal_y");
									  //$("#pagetwo").html("<div data-role="content" style=\"width:100%;height:100%;background-size:cover;background-image:url('./themes/oppo/images/click/pz.jpg');\"></div>");	
										}
								});
						 });


var hash_c = window.location.hash
//定时检查名额是否已满 如果满后就执行一次。
if(window.location.hash != '#pagetwo'){
	window.setInterval(showalert, 3000); 
}
	function showalert() 
	{ 
		var id;
		id = $('#aid').val();
		$(document).ready(function(){
						$.post("click.php",
						{
						  act:"finish",
						  id:id
						},
					function(data,status){
						 if(data == 0){
							//alert(1);
							location.reload();
							
						 }
					});
			 });
	} 

//页面载入时判断
window.onload=function()
{
	var id;
	var full;
    id = $('#aid').val();
    full = $('#full').val();

if(full == 0){
	$(document).ready(function(){
				$.post("click.php",
				{
				  act:"is_finish",
				  id:id,
				  finish: '1'
				},
			function(data,status){
				  $("#result").html(data);		
				
				 $("#prize").trigger("click");
			//  alert("Data: " + data + "\nStatus: " + status);
			});
	 });
}			
   rand_c();
   delCookie("name") ;
}

/**
 * 方法说明
 * @method setCookie
 * @param {str, int} 名字 值
 * @return {返回值类型} 返回值说明
 */
function setCookie(name,value) 
{ 
var Days = 30; 
var exp = new Date(); 
exp.setTime(exp.getTime() + Days*24*60*60*1000); 
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 

/**
 * 方法说明
 * @method getCookie 获取Cookie值
 * @param {str} 名字
 * @return {返回值类型} 返回值说明
 */
function getCookie(name) 
{ 
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

if(arr=document.cookie.match(reg))

return (arr[2]); 
else 
return null; 
} 

/**
 * 删除cookie名字
 * @method delCookie 删除cookie
 * @param {str} 名字
 * @return {返回值类型} 返回值说明
 */
function delCookie(name) 
{ 
var exp = new Date(); 
exp.setTime(exp.getTime() - 1); 
var cval=getCookie(name); 
if(cval!=null) 
document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 
