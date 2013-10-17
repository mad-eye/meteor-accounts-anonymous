Meteor.loginAnonymously = function(callback) {
  var options = {
    methodArguments: [{anonymous: true}],
    userCallback: callback
  };
  Accounts.callLoginMethod(options);
}
