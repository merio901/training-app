export default {
  get: jest.fn(() => {
    console.log("mocked");
    return Promise.resolve({
      data: {},
    });
  }),
};
