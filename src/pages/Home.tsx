import * as React from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
}

function Home() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <h1>HOMEPAGE</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register('email', { required: false })}
          placeholder="email"
        />
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Home
