import React from 'react'

function SingleInstructor({singleInstrucotr}) {
  const {name,image,email,numClassesTaken,languagesTaken} =singleInstrucotr
  console.log(singleInstrucotr.name)
  return (
    <div>
         <div className="rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Name:{name}</h3>
        <p className="text-gray-700">Email:{email}</p>
        <p className="text-gray-700">Number of Classes Taken: {numClassesTaken}</p>
        <p className="text-gray-700 space-x-2">Languages: {languagesTaken.slice(0,3).join(" ,")}</p>
      </div>
    </div>
    </div>
  )
}

export default SingleInstructor