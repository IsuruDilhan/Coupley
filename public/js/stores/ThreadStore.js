var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ThreadConstants = require('../constants/ThreadConstants');
var assign = require('object-assign');

var CHAT_EVENT = 'change';

var Thread = [];
var PreviousThread = [];
var LikedUsers;
var SearchList = [];

var ThreadStore = assign({}, EventEmitter.prototype, {

<<<<<<< HEAD
  /**
   * Get messages.
   * @return  array[]
   */
  getmessages: function () {
      return Thread;
    },

  /**
     * put messages to Thread.
     *
     */
  savemessage: function (data) {
      Thread.push(data);
    },

  emitChange: function () {
      this.emit(CHAT_EVENT);
    },

  /**
     * @param {function} callback
     */
  addChangeListener: function (callback) {
      this.on(CHAT_EVENT, callback);
    },
  /**
   * Get messages.
   * @return array[]
   */
  getpreviousmessage:function () {
    return PreviousThread;
  },
  /**
     * put previous messages to PreviousThread.
     *
     */
  savepreviousmessage:function (results) {
    PreviousThread = results;
  },
  /**
     * put liked user list to LikedUsers.
     *
     */
  savelikedusers:function (results) {
      LikedUsers = results;
    },
  /**
   * Get all the liked users by a particular user.
   * @return {object}
   */
  getlikedusers:function () {
      return LikedUsers;
    },
  /**
     * put searched conversation list SearchList.
     *
     */
  saveSearchConv:function (results) {
    SearchList = results;
  },
  /**
   * Get Search reslts of previos conversations.
   * @return array[]
   */
  getsearchconv:function () {
      return SearchList;

    },

=======
  getmessages: function () {
    return Thread;
  },

  savemessage: function (data) {
    Thread.push(data);
  },

  emitChange: function () {
    this.emit(CHAT_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHAT_EVENT, callback);
  },
>>>>>>> 0265d573d72eafde72b1cb196855487c570d5b0e
});

AppDispatcher.register(function (payload) {
  switch (payload.action.actionType) {
<<<<<<< HEAD
    case (ThreadConstants.RETRIVEOLD):
      ThreadStore.savepreviousmessage(payload.action.previousmessage);
      ThreadStore.emitChange();
      break;
    case (ThreadConstants.RETRIVELIKED):
      ThreadStore.savelikedusers(payload.action.listoflikedusers);
      ThreadStore.emitChange();
      break;
    case (ThreadConstants.SEARCHMSGLIST):
      ThreadStore.saveSearchConv(payload.action.seacrhconvlist);
      ThreadStore.emitChange();
      break;

=======
    case (ThreadConstants.SAVE):
      ThreadStore.savemessage(payload.action.chatmessage);
      ThreadStore.emitChange();
      break;
>>>>>>> 0265d573d72eafde72b1cb196855487c570d5b0e
  }
});

module.exports = ThreadStore;
