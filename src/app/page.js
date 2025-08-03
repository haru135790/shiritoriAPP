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

  return ( // ページの内容
    <>
      <h1>しりとりゲーム</h1>
      <BeforeWord list={shiritoriList} />
      <input type="text" ref={inputRef} onKeyDown={(e) => e.key === "Enter" && handleAddWord()} />
      <button onClick={handleAddWord}>送信</button>
      <button onClick={handleReset}>リセット</button>
      <ShiritoriLog list={shiritoriList} />
    </>
  );
}
