import { renderHook, act } from '@utils/test/app-test-utils'
import useCounter from '@src/hooks/useCounter'
import { faker } from '@faker-js/faker'

describe('useCounter', () => {
  it('should be able to increment and then decrement', () => {
    const randomCount = faker.datatype.number(100)
    const randomStep = faker.datatype.number(10)

    const { result } = renderHook(() => useCounter({ initialCount: randomCount, step: randomStep }))
    expect(result.current.count).toBe(randomCount)

    act(() => result.current.increment())
    expect(result.current.count).toBe(randomCount + randomStep)

    act(() => result.current.decrement())
    expect(result.current.count).toBe(randomCount)
  })

  it('should be able to decrement and then increment', () => {
    const randomCount = faker.datatype.number(100)
    const randomStep = faker.datatype.number(10)

    const { result } = renderHook(() => useCounter({ initialCount: randomCount, step: randomStep }))
    expect(result.current.count).toBe(randomCount)

    act(() => result.current.decrement())
    expect(result.current.count).toBe(randomCount - randomStep)

    act(() => result.current.increment())
    expect(result.current.count).toBe(randomCount)
  })
})
