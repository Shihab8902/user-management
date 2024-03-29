import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetUsers = () => {


  const { data, refetch, isPending } = useQuery({
    queryKey: ["all users"],
    queryFn: async () => {
      const result = await axios.get(`https://usermanagement-xi.vercel.app/api/users`);
      return result.data;
    }
  });


  return { data, refetch, isPending };




}

export default useGetUsers