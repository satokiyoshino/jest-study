import { renderHook, act } from "@testing-library/react";
import { useUser } from "./index";

describe('useUser', () => {
  const {result} = renderHook(() => useUser())

  test.only('onIdChange', () => {
    const updataValue = result.current[3].onIdChange
    const mockInput = jest.fn(() => ({
      target: { value: '4' },
    })) as unknown as () => React.ChangeEvent<HTMLInputElement>;

    act(() => {
      updataValue(mockInput())
    })

    expect(result.current[3].userIdForm).toBe('4')
  })

  describe('fetch', () => {
    test('happy path', async () => {
      act(() => {result.current[3].setUserIdForm('4')})
      await act( async () => {
        await result.current[3].submit();
      })
      
      expect(result.current[0]?.name).toEqual('Micheal')
    });

    test('fetch失敗', async () => {
      await expect(result.current[3].submit).rejects.toThrow()
    });
  })
})