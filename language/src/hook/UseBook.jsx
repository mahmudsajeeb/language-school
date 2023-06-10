import {
  useQuery
} from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
const useBook = ()=>{
  const {user} = useContext(AuthContext)
 
  const { isLoading,   data:book=[] } = useQuery({
    queryKey: ['book',user?.email], 
     
    queryFn: async () => {      
      const response = await fetch(`http://localhost:1000/books?email=${user?.email}`)
      console.log('res from found book' , response)
      return response.json();
    },
  })
  return[book,isLoading]
}

export default useBook