import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUser } from '../github';
jest.unmock('axios');

const mockAxios = new MockAdapter(axios);

const FAKE_DATA = {
  id: 1,
  name: 'Michal',
  bio: 'Frontend Developer at Netguru',
  publicRepos: 8,
  publicGists: 0,
}
describe('getUser', () => {
  it('should return proper user data', async () => {
    mockAxios.onGet('https://api.github.com/users/merio901').reply(200, FAKE_DATA);

    const user = await getUser('merio901');

    expect(user.data).toEqual(FAKE_DATA);
  });
});
