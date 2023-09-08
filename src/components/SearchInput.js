'use client'
import React,{useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

import {useRouter} from 'next/navigation'

const SearchInput = () => {

const [input, setInput] =useState("")
const [loading, setLoading] =useState(false)
const router =useRouter()

const handleSubmit =(e)=>{
e.preventDefault();	
router.push(`/search/web?searchTerm=${input}`)
}

const handleLuckyButton =async ()=>{
setLoading(true)
const res=await fetch("https://random-word-api.herokuapp.com/word")
const data =await res.json()
setLoading(false)
console.log(data[0])
if(!data) return
router.push(`/search/web?searchTerm=${data[0]}`)

}
	return (
		<>
			<form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transaction-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl">
				<AiOutlineSearch className="text-xl text-gray-500 mr-3"/>
				<input type="text"  className="flex-grow focus:outline-none" value={input} onChange={(e)=>{ setInput(e.target.value)}}/>
				<BsFillMicFill className="text-xl "/>
				
			</form>
			<div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row my-8">
				<button className="btn" onClick={handleSubmit}>Google Search</button>
				<button className="btn" onClick={handleLuckyButton}>{loading?'loading...' :"Im Feeling Lucky"}</button>	
			</div>
		</>
	);			
};

export default SearchInput;
