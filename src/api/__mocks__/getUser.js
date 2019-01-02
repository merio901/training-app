const users = {
  merio901: { name: "Mark" },
  paul: { name: "Paul" },
};

export default (getUser = url => {
  return new Promise((resolve, reject) => {
    const userID = url.substr("/users/".length);
    process.nextTick(() =>
      users[userID]
        ? resolve(users[userID])
        : reject({
            error: "User with " + userID + " not found.",
          })
    );
  });
});
