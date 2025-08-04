"use client";
import { useState, useRef, useEffect } from "react";
import ShiritoriLog from "./ShiritoriLog";
import BeforeWord from "./BeforeWord.js"; // Assuming BeforeWord is another component you have
import wordList from "../word-data"; // Importing the word list

export default function Home() {
  const [shiritoriList, setShiritoriList] = useState(["しりとり"]);

  const inputRef = useRef();

  const [timer, setTimer] = useState(30);
  const timerRef = useRef();

  useEffect(() => {
    timerStart();
    return () => clearInterval(timerRef.current);
  }, []);

  const timerStart = () => {
    clearInterval(timerRef.current);
    setTimer(30);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 0) {
          clearInterval(timerRef.current);
          alert("時間切れです。ゲームを終了します。");
          gameReset();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }

  const gameReset = () => {
    setShiritoriList(["しりとり"]);
    inputRef.current.value = "";
    timerStart();
  };

  const handleAddWord = () => { // しりとりのルールに従って新しい単語を追加
    const newWord = inputRef.current.value;
    if (shiritoriList.at(-1).slice(-1) !== newWord[0]) {
      alert("しりがとられていません。しりとりのルールに従ってください。");
      return;
    } else if (newWord.slice(-1) === "ん") {
      alert("「ん」で終わる単語は使用できません。ゲームを終了します。");
      gameReset();
      return;
    } else if (!/^[\u3041-\u3096 \u30fc]+$/.test(newWord) || newWord.length < 2) {
      alert("ひらがなで2文字以上の単語を入力してください。");
      return;
    } else if (shiritoriList.find(item => item === newWord)) {
      alert("その単語はすでに使用されています。ゲームを終了します。");
      gameReset();
      return;
    }else if (!wordList.includes(newWord)) {
      alert("登録されていない単語です。");
      return;
    }

    setShiritoriList([...shiritoriList, newWord]);
    inputRef.current.value = ""; //入力をクリア
  };

  const handleReset = () => { // ゲームリセット
    if(window.confirm("リセットしますか？")) {
      gameReset();
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col mt-8 w-6/10 items-center justify-center border-8 rounded-md border-gray-200 p-8">
          <div className="flex flex-col items-center w-full max-w-3xl">
            <BeforeWord list={shiritoriList} className="justify-center" />
            <div className="text-lg font-bold mt-4">残り時間: {timer}秒</div>
            <input type="text" ref={inputRef} onKeyDown={(e) => e.key === "Enter" && handleAddWord()} className="border border-gray-300 rounded-md p-2 text-center" />
            <div className="flex gap-2 mt-2">
              <button onClick={handleAddWord} className="inline-flex items-center rounded-md bg-blue-600/50 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">送信</button>
              <button onClick={handleReset} className="inline-flex items-center rounded-md bg-red-600/50 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">リセット</button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 border-1 border-gray-200 px-8">
            <ShiritoriLog list={shiritoriList} />
          </div>
        </div>
      </div>

    </>
  );
}
