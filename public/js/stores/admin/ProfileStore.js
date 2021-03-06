var AppDispatcher = require('../../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ProfileConstants = require('../../constants/ProfileConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var admin = [];

var ProfileStore = assign({}, EventEmitter.prototype, {
  saveuserdata: function (data) {
    admin.push(data);
  },

  getuserdata: function () {
    if (admin.length == 0) {
      return {
        id:'',
        firstname: '',
        lastname: '',
        job:'',
        email:'',
        profilepic:'',
        created_at:'',

      };
    }

    localStorage.setItem('id', admin[0].id);
    return {
      id: admin[0].id,
      firstname: admin[0].firstname,
      lastname: admin[0].lastname,
      job:admin[0].job,
      email:admin[0].email,
      profilepic:admin[0].profilepic,
      created_at:admin[0].created_at,
    };
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
});

AppDispatcher.register(function (payload) {
  switch (payload.action.actionType) {
    case (ProfileConstants.GETDATA):
      ProfileStore.saveuserdata(payload.action.userdata);
      ProfileStore.emitChange();
      break;
  }
});

module.exports = ProfileStore;
