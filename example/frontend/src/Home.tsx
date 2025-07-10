import { memo } from "react"
import { useTRPC } from "./utils/trpc"
import { useQuery } from '@tanstack/react-query';


const Home = () => {
    const trpc = useTRPC();

    const userQuery = useQuery(trpc.getUser.queryOptions({id: "123"}));
    
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is a basic example of a React component.</p>
            {userQuery.isLoading && <p>Loading user...</p>}
            {userQuery.isError && <p>Error loading user: {userQuery.error.message}</p>}
            {userQuery.isSuccess && (
                <div>
                    <p>User ID: {userQuery.data.id}</p>
                    <p>User Email: {userQuery.data.email}</p>
                </div>
            )}
        </div>
    )
}

export default memo(Home)