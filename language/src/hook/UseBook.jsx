import {
  useQuery
} from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
const useBook = email=>{
  const {user} = useContext(AuthContext)
  const { isLoading,   data:book=[] } = useQuery({
    queryKey: ['book',user?.email], 
    queryFn: async () => {
      const response = await fetch(`https://school-server-two.vercel.app/books?email=${user?.email}`)
      console.log('res from axios' , response)
      return response.json();
    },
  })
  return[book,isLoading]
}

export default useBook