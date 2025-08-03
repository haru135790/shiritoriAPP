"use client";
import { useState, useRef } from "react";
import ShiritoriLog from "./ShiritoriLog";
import BeforeWord from "./BeforeWord.js"; // Assuming BeforeWord is another component you have

export default function Home() {
  const [shiritoriList, setShiritoriList] = useState(["しりとり"]);

  const inputRef = useRef();

  const handleAddWord = () => { // しりとりのルールに従って新しい単語を追加
    const newWord = inputRef.current.value;
    if (shiritoriList.at(-1).slice(-1) !== newWord[0]) {
      alert("しりがとられていません。しりとりのルールに従ってください。");
      return;
    } else if (newWord.slice(-1) === "ん") {
      alert("「ん」で終わる単語は使用できません。ゲームを終了します。");
      setShiritoriList(["しりとり"]); // ゲーム終了時は初期状態に戻す
      inputRef.current.value = ""; // 入力をクリア
      return;
    } else if (shiritoriList.find(item => item === newWord)) {
      alert("その単語はすでに使用されています。ゲームを終了します。");
      setShiritoriList(["しりとり"]); // ゲーム終了時は初期状態に戻す
      inputRef.current.value = ""; // 入力をクリア
      return;
    }

    setShiritoriList([...shiritoriList, newWord]);
    inputRef.current.value = ""; //入力をクリア
  };

  const handleReset = () => { // ゲームリセット
    if(window.confirm("リセットしますか？")) {
      setShiritoriList(["しりとり"]); // リセット時は初期状態に戻す
      inputRef.current.value = ""; // 入力をクリア
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col mt-8 w-6/10 items-center justify-center border-8 rounded-md border-gray-200 p-8">
          <div className="flex flex-col items-center w-full max-w-3xl">
            <BeforeWord list={shiritoriList} className="justify-center" />
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
