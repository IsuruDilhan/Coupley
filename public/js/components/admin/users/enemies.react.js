/**
 * Created by Isuru 1 on 26/01/2016.
 */

import SearchItem from './blocked/blockedUser.react';
import SearchStore from '../../../stores/admin/SearchStore';
import UserActions from '../../../actions/admin/BlockedUsersActions';
import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import styles from 'material-ui/lib/styles';
import FontIcon from 'material-ui/lib/font-icon';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const colors = styles.Colors;

var AvatarExampleSimple = React.createClass({
  getInitialState: function () {
    return {
      results: SearchStore.getresults(),
    };
  },

  componentDidMount: function () {
    UserActions.getsearchresults();
    SearchStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      results: SearchStore.getresults(),
    });
  },

  _renderSearchItem: function () {
    if (this.state.results) {
      return this.state.results.map((result) => {
        return (<div className="col-lg-4">
                  <SearchItem key={result.id} username={result.username} firstname={result.firstname} lastname={result.lastname} profilepic={result.profilepic} gender={result.gender} id={result.id} />
                </div>);
      });} else {
        return (<div className="col-lg-4">
        No any blocked users found.
              </div>);
      }
  },

  render: function () {
    return (
        <div>
            <h1>Blocked Users</h1>
			{this._renderSearchItem()}
        </div>
    );
  },

});

export default AvatarExampleSimple;
