const cols=10 //横10マス
const rows=20 //縦20マス
let board = [] //盤面情報
let lose; //一番上まで到達したか
let interval; //ゲームを実行するタイマーを保持する変数
let current; //今操作しているブロックの形
let currentX; //今操作しているブロックの位置
let currentY; //同上

//操作するブロックのパターン
//空のマスが0
const shapes=[
  [1,1,1,1],
  [1,1,1,0,1],
  [1,1,1,0,0,0,1],
  [1,1,0,0,1,1],
  [0,1,1,0,1,1],
  [0,1,0,0,1,1,1]
];

//ブロックの色
const colors = [
  'cyan','orange','blue','yellow','red','green','purple'
];

//盤面を空にする
//xとyが：0＝何もなし、1～＝ブロック
function init(){
  for(var y = 0; y < rows; ++y){
    board[y] =[];
    for(var x = 0; x < cols; ++x){
      board[y][x] = 0;
    }
  }
}

//shapeからランダムにブロックのパターンを出力し、盤面の一番上へセットする。
function newShape(){
  const id = Math.floor(Math.random() * shapes.length); //ランダムにインデックスを出す
  const shape = shapes[id];
  //パターンを操作ブロックへセットする
  current = [];

}

function newGame(){
  clearInterval(interval); //ゲームタイマーをクリア
  init(); //盤面をまっさらにする
  newShape(); //操作ブロックをセット
  lose = false; //負けフラッグ
  interval = setInterval(tick,250); //250ミリ病ごとにtick関数を呼び出す
}

newGame();
