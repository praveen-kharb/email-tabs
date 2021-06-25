const tabNavList = document.querySelectorAll('.tab-nav li');
const tabBody = document.querySelectorAll('#row');


tabNavList.forEach((item, index, listArray) => {
    item.addEventListener('click',()=>{
        item.style.backgroundColor = "#DC3545";
        item.style.color = "white";
        listArray.forEach((ele,i)=>{
            if(i!==index){
                ele.style.backgroundColor = "white";
                ele.style.color = "black";
            }
        })
        if(item.classList.contains('active')){
            
            return;
        }else{
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
            
            
        }

        if(listArray[0].classList.contains('active')){
            tabBody[0].classList.add('active');
            tabBody[1].classList.remove('active');
            tabBody[2].classList.remove('active');
            tabBody[3].classList.remove('active');
            tabBody[4].classList.remove('active');
            //tabBody[1].item.style.backgroundColor = "#DC3545";
            //tabBody[1].item.style.color = "white";tabBody[2].item.style.backgroundColor = "#DC3545";
            //tabBody[2].item.style.color = "white";tabBody[3].item.style.backgroundColor = "#DC3545";
            //tabBody[3].item.style.color = "white";tabBody[4].item.style.backgroundColor = "#DC3545";
            //tabBody[4].item.style.color = "white";
        }
        if(listArray[1].classList.contains('active')){
            tabBody[1].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[2].classList.remove('active');
            tabBody[3].classList.remove('active');
            tabBody[4].classList.remove('active');
        }
        if(listArray[2].classList.contains('active')){
            tabBody[2].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[1].classList.remove('active');
            tabBody[3].classList.remove('active');
            tabBody[4].classList.remove('active');
        }
        if(listArray[3].classList.contains('active')){
            tabBody[3].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[1].classList.remove('active');
            tabBody[2].classList.remove('active');
            tabBody[4].classList.remove('active');
        }
        if(listArray[4].classList.contains('active')){
            tabBody[4].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[1].classList.remove('active');
            tabBody[3].classList.remove('active');
            tabBody[2].classList.remove('active');
        }

    })
})
var i=2,j=1;
function closebtn() {
    const close = document.querySelector(".timer-cut");
    close.style.display = "none";

}
function hidebtn(ele) {
    const hide = document.querySelector(`.${ele}`);
    hide.remove();
    if(j>1) j--;
    console.log(j);
}
function noneBtn () {
    const none = document.querySelector(".timer");
    none.style.display = "none";
}

function time__btn() {
    const close = document.querySelector(".timeCut");
    close.style.display = "none";
}
function time_Btn() {
    const hide = document.querySelector(".timerCut");
    hide.style.display = "none";
}
function timeBtn() {
    const none = document.querySelector(".timer_cut");
    none.style.display = "none";
}

// on/off
document.querySelector(".good").style.display="none"
const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {
  
    if (toggle.checked==true)
    {
        main();
    }
    if (toggle.checked!==true)
    {
        main1();
    }
 
});
document.querySelector(".notgood").style.display="none"
const toggl = document.querySelector('.toggl .input')

toggl.addEventListener('click', () => {
    if (toggl.checked==true)
    {
        main2();
    }
    if (toggl.checked!==true)
    {
        main3();
    }
});
var top=document.querySelector(".time-cut")
var op=document.querySelector(".temp")
console.log(op)

op.addEventListener("click",function(){

    if(j<3)
    {document.querySelector(".timer").innerHTML += `<div class="a${i}"><div class="time-cut">
    <input type="email" class="form-control col-2 mr-2" value="1" id="exampleInputEmail1"
      aria-describedby="emailHelp">
    <select class="form-control col-7" id="exampleFormControlSelect1">
      <option>Hour(s) Before</option>
      <option>Day(s) Before</option>
      <option>Minute(s) Before</option>
    </select> <span class="px-3" onclick="hidebtn('a${i}')"><i class="far fa-trash-alt"></i></span>
  </div></div>`
  j+=1;
  i+=1;
}
console.log(i);

});



function main(){    document.querySelector(".good").style.display="block"
   }
    function main1(){    document.querySelector(".good").style.display="none"}
    function main2(){    document.querySelector(".notgood").style.display="block"
   }
    function main3(){    document.querySelector(".notgood").style.display="none"}
    
