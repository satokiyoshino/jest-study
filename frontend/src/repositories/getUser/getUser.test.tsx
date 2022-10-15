import { getUser } from "./index";

describe('getUser', () => {
  test('データが取れるかどうかのテスト', async () => {
    const userName = await getUser('1');
    expect(userName.name).toEqual('John');
  })
  
  test('データが取れなかった時のテスト', async () => {
    await expect(getUser("100")).rejects.toThrow()
  })
})
