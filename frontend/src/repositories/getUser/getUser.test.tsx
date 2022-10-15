import { getUser } from "./index";

describe('getUser', () => {
  test('データが取れるかどうかのテスト', async () => {
    const userName = await getUser('1');
    expect(userName.name).toEqual('John');
  })
  
  // test('データが取れなかった時のテスト', async () => {
  //   const userName = await getUser('100');
  //   console.log(userName)
  //   expect(userName).toThrow('There is no user')
  // })
})
