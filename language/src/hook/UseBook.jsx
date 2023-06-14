import {
  useQuery
} from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
const useBook = ()=>{
  const {user,loading} = useContext(AuthContext)
 
   
 
  const [axiosSecure] = useAxiosSecure();
    const { refetch, data: book = [] } = useQuery({
        queryKey: ['book', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/books?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

  return [book, refetch];
}

export default useBook