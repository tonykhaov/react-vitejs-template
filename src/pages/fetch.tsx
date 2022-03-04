import Title from '@src/components/Title'
import type { User } from '@src/types/user'
import { useQuery } from 'react-query'

function Fetch() {
  const { data, status } = useQuery<User[]>({
    queryKey: 'users',
    queryFn: () => fetch('https://my-backend.com/api/users').then((res) => res.json()),
  })

  return (
    <>
      <Title className="text-green-700">Fetch</Title>
      <div className="my-4 min-w-[50vw]">
        {status === 'loading' ? <p>Loading...</p> : null}
        {status === 'success' ? (
          <ul>
            {data.map((user) => (
              <li className="max-w-5 my-2 w-full border p-4" key={user.id}>
                <Title className="text-xl">{user.name}</Title>
                <p>{user.email}</p>
                <p>{user.password}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )
}

export default Fetch
