const c9 = document.getElementById("c9");
const c8 = document.getElementById("c8");
const c7 = document.getElementById("c7");
const c6 = document.getElementById("c6");
const c5 = document.getElementById("c5");
const c4 = document.getElementById("c4");
const c3 = document.getElementById("c3");
const c2 = document.getElementById("c2");
const c1 = document.getElementById("c1");
const c0 = document.getElementById("c0");
const clear = document.getElementById("cC");
const point = document.getElementById("cdot");
const add = document.getElementById("cadd");
const division = document.getElementById("cdiv");
const sub = document.getElementById("csub");
const multi = document.getElementById("cmulti");
const equa = document.getElementById("cequa");
const per = document.getElementById("per");
const display_result = document.getElementById("result");
const calc_Num = document.getElementsByClassName("calcNum");

//resultに計算結果を代入
let result;
function setResult(result){
  display_result.setAttribute("value",result)
}

//現時点で結果として表示されている数値
let NowResult ;
function getNowResult(){
  NowResult = display_result.getAttribute("value");
  NowResult = Number(NowResult)
}

//クリア
function clearDisplay(){
  display_result.setAttribute("value","");
  display_route.setAttribute("value","");
}
//今表示されている数字を消す
function clearDisplay_result(){
  display_result.setAttribute("value","");
}
//計算経過を消す
function clearDisplay_route(){
  display_route.setAttribute("value","");
}

clear.addEventListener('click',function(){
  clearDisplay();
});

//数値を表示する
for(i=0 ; i < calc_Num.length ; i++){
  calc_Num[i].addEventListener("click",function(){
   getNowResult()
    if(NowResult > 0){
     let NewResult = "" + NowResult + this.getAttribute("data-num")
     setResult(NewResult)
    }
    else{
      result = this.getAttribute("data-num");
      setResult(result);
    };
  });
};

//計算
const calc_Mark = document.getElementsByClassName("calcMark");
const display_route = document.getElementById("route");

//計算式を表示する
let currentMark ;
let NowRoute;
function getNowRoute(){
  NowRoute = display_route.getAttribute("value");
}
function showRoute(thisMark){
  display_route.setAttribute("value",""+NowRoute+NowResult+thisMark.getAttribute("data-num"));
  currentMark = thisMark.getAttribute("data-num");
}
for(i=0 ; i < calc_Mark.length ; i++){
  calc_Mark[i].addEventListener('click',function(){
    getNowResult();
    getNowRoute();
    showRoute(this);
    clearDisplay_result();
  })
};

//結果
equa.addEventListener("click",function(){
    getNowResult();
    let route = display_route.getAttribute("value");
    let result = route + NowResult;
  if(result.indexOf('%') !== -1){
    result = result.replace('%','/100+');
    result = eval(result);
  }
  else{result = eval(route + NowResult);}
    setResult(result);
    clearDisplay_route();
});
