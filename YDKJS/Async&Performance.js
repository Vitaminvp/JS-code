
const chooseActivity = () => {};
const chooseActivityPromise = () => {};
const callFriend = () => {};
const takeGame = () => {};
const haveFun = () => {};
const game = () => {};
const fun = () => {};
const failureCallback = () => {};

chooseActivity(function(activities) {
  callFriend(activities, function(friends) {
    takeGame(friends, function(game) {
      haveFun(fun);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

chooseActivityPromise(function () {
  
})