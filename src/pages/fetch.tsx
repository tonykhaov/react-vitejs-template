import Title from '@src/components/Title'
import type { User } from '@src/types/user'
import { useQuery, useQueryClient } from 'react-query'

function Fetch() {
  const queryClient = useQueryClient()

  const { data, status, refetch } = useQuery<User[]>({
    queryKey: 'users',
    queryFn: () => fetch('https://my-backend.com/api/users').then((res) => res.json()),
    enabled: !queryClient.getQueryData('users'),
  })

  return (
    <>
      <Title className="text-green-700">Fetch</Title>
      <div className="my-4 min-w-[50vw]">
        {status === 'loading' ? <p>Loading...</p> : null}
        {status === 'success' ? (
          <div>
            <button className="rounded-lg bg-gray-300 px-8 py-4" onClick={() => refetch()}>
              Refetch!
            </button>
            <ul>
              {data.map((user) => (
                <li className="my-2 w-full border p-4" key={user.id}>
                  <Title className="text-xl">{user.name}</Title>
                  <p>{user.email}</p>
                  <p>{user.password}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Fetch
