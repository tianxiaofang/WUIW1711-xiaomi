//SES6
//alert(1);
{
	let imgs=document.querySelectorAll(".banner_tu li");
	let pagers=document.querySelectorAll(".pager li");
	let banners=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);

	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banners.onmouseenter=function(){
		clearInterval(t);
	};
	banners.onmouseleave=function(){
		t=setInterval(move,3000);
	};


	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2
			move();
		}
	};
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})

}

// 明星单品
{
	const prev=document.querySelector(".mingxing_btn1");
	const next=document.querySelector(".mingxing_btn2");
	const inner=document.querySelector(".mingxing_danping_rall");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable")
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
}
// 内容
{
	var prev=document.querySelector(".neirong_left");
	var next=document.querySelector(".neirong_right");
	var inner=document.querySelector(".neirong_bottom1");
	let n=0;
	next.onclick=function(){
		n++;
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-296*n+"px";
	}
	prev.onclick=function(){
		n--;
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-296*n+"px";
	}
}


//搭配
{


	const types=document.querySelectorAll(".zhineng_wzright");
	const goods=document.querySelectorAll(".dapei_goods");
	//console.log(types);
	//console.log(goods);
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("dapei_nav_active");
				goods[i].classList.remove("active")

			}
			this.classList.add("dapei_nav_active");
			goods[index].classList.add("active");
		}
	});
}