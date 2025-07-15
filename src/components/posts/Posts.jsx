import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GoBack } from '../go-back/GoBack';

export const Posts = () => {
    const API = "https://jsonplaceholder.typicode.com/posts";

    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const { data } = await axios.get(API);
            return data;
        }
    });

    return (
        <div className='container'>
            <GoBack/>
            <ol className="list">
                {data?.map((user) => {
                    return <li key={user.id}>{user.title}</li>
                })}
            </ol>
        </div>
    )
}
