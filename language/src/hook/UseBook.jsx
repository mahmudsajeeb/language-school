import {
  useQuery
} from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import useAxiosSecure from './useAxiosSecure'
const useBook = ()=>{
  const {user,loading} = useContext(AuthContext)
//  const token = localStorage.getItem('access-token');
   
  // const { refetch, data: book = [] } = useQuery(['book', user?.email], async () => {
  //   const response = await fetch(`http://localhost:1000/books?email=${user?.email}`,
  //   {
  //     headers:{
  //       authorization:`bearer ${token}`
  //     }
  //   }
  //   );
     
  //   return response.json();
  // });
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