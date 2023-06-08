import React from 'react'

function Learn() {
  return (
    <>
        <h1 className='mb-10 text-3xl text-center text-cyan-900 font-semibold'>What do you learn?</h1>

    <div className='mb-10 grid lg:grid-cols-4 gap-5 md:grid-col-2'>
  
        <div className='text-center '>
          <div className='mx-auto flex justify-center'>
          <img width={100} height={100} src="https://cdn-icons-png.flaticon.com/512/383/383851.png?w=740&t=st=1686243082~exp=1686243682~hmac=d5f23a675d9003c31f8e7bff6255d717921aaae1f0f2cd1f5bd3f623ed1fd3b3" alt="" />
          </div>
          <h1 className='text-2xl text-[#173857] font-semibold mb-4'>Speak</h1>
          <p>Speak with native speakers on any topic you want (not just about the weather). Make friends in different parts of the Earth!</p>
        </div>
        <div className='text-center '>
          <div className='mx-auto flex justify-center'>
          <img width={100} height={100} src="https://www.boikhata.com.bd/wp-content/uploads/2017/08/law-9.png" alt="" />
          </div>
          <h1 className='text-2xl text-[#173857] font-semibold mb-4'>Read</h1>
          <p>Read literature in the original language. Grow your vocabulary, master the language’s grammar, and broaden your horizons!

</p>
        </div>
        <div className='text-center '>
          <div className='mx-auto flex justify-center'>
          <img width={100} height={100} src="https://cdn3.iconfinder.com/data/icons/artificial-intelligence-ai-glyph/64/diagram-deep-learning-machine-network-nural-512.png" alt="" />
          </div>
          <h1 className='text-2xl text-[#173857] font-semibold mb-4'>Listen</h1>
          <p>Understand new things about the foreign country, its culture and traditions. Feel yourself like a piece of something global!

</p>
        </div>
       
        <div className='text-center '>
          <div className='mx-auto flex justify-center'>
          <img width={100} height={100} src="https://media.istockphoto.com/id/918814482/vector/feather-pen-and-inkwell-drawing-of-ancient-pen-on-the-table-in-doodle-style.jpg?s=1024x1024&w=is&k=20&c=GiqlJjZry7DrInqDUPxCjR6oGjZgtDauAuScZUVFnik=" alt="" />
          </div>
          <h1 className='text-2xl text-[#173857] font-semibold mb-4'>Write</h1>
          <p>Write to your foreign friends or conduct business correspondence with people from other countries and even continents!



</p>
        </div>
       
    </div>

    </>
  )
}

export default Learn