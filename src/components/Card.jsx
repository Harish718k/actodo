function Card(){
  return (
    <div className='flex gap-5 py-8'>
        <div className="flex-1 bg-purple-600 text-center py-6 rounded-md">
            <h2 className='font-semibold text-2xl'>23.</h2>
            <p>Chennai</p>
        </div>
        <div className="flex-1 bg-pink-600 text-center py-6 rounded-md">
            <h2 className='font-semibold text-2xl'>December</h2>
            <p>14:02:34</p>
        </div>
        <div className="flex-1 bg-yellow-600 text-center py-6 rounded-md">
            <h2 className='font-semibold text-2xl'>Built Using</h2>
            <p>React</p>
        </div>
    </div>
  )
}

export default Card