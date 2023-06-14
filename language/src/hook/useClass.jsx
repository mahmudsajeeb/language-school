import {
  useQuery
} from '@tanstack/react-query'
 
const useClass = ()=>{
 
 
  const {data: claass = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['claass'],
    queryFn: async() => {
        const res = await fetch('https://school-server-two.vercel.app/classes');
        return res.json();
    }
})

  return [claass, refetch];
}

export default useClass