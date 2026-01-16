import React, {useState} from 'react'
import { X, Plus } from 'react-feather';

const CardAdd = () => {
    const [card,setCard] = useState('');
    const [show,setShow] = useState(false);
  return (
    <div>
        <div className="flex flex-col">
           {show && <div>
                <textarea className='p-1 w-full rounded-md border-2 bg-zinc-700 border-zinc-900' name="" id="" cols="30" rows="2"placeholder='Enter Card Title...'></textarea>
                <div className='flex p-1'>
                    <button className='p-1 rounded bg-sky-800 text-white mr-2'>Add Card</button>
                    <button onClick={()=> setShow(!show)} className='p-1 rounded hover:bg-gray-600'><x size={16}></x></button>
                </div>
            </div>}
        </div>
        {!show && <button onClick={()=> setShow(!show)} className='flex p-1 w-full justify-start rounded items-center mt-1 hover:bg-gray-500 h-500 h-8'>
            <Plus size={16}></Plus> Add a card
        </button>}
        </div>
  )
}

export default CardAdd