"use client";
import React from 'react'

const Head = () => {
  return (
    <div className="w-full flex items-center justify-center">
        <div className="lg:flex lg:items-center lg:justify-between p-4 w-full max-w-3xl">
        <div className="min-w-0 flex-1">
            <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            しりとりゲーム
            </h1>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="sm:ml-3">
            <button
                type="button"
                onClick={() => { window.open('https://github.com/haru135790/shiritoriApp'); }}
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Github
            </button>
            </span>
        </div>
        </div>
    </div>
  )
}

export default Head;