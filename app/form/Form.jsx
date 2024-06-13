'use client'
import React, { useRef } from 'react'
import { submitAction } from '@/utils/utils';

const Form = () => {
    const ref = useRef();

    // This how to sumbit the form using server action

    return (
        <>
            <h1 className='text-2xl font-bold'>Form</h1>
            <div className='mx-10 mt-10'>
                <form ref={ref} action={(e) => { submitAction(e); ref.current.reset(); }} className='flex gap-5'>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" className='border border-black text-black' />
                    </div>

                    <div>
                        <label htmlFor="message">Message: </label>
                        <input type="text" name="message" id="message" className='border border-black text-black' />
                    </div>

                    <button type="submit" className='border border-black px-3'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form