import { useQuery } from "@tanstack/react-query"
import axios from 'axios';
import { GoBack } from "../go-back/GoBack";

export const Users = () => {
    const API = "https://jsonplaceholder.typicode.com/users";

    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axios.get(API);
            return data;
        }
    });

    return (
        <div className='container'>
            <GoBack />
            <ul className="list">
                {data?.map((user) => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </div>
    )
}
