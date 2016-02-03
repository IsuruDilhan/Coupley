<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('init');
});



/*
	Login route
	Handles initial login of a user of Coupley
=======
/*
    Login route
    Handles initial login of a user of Coupley
>>>>>>> b0504640741c074b5d955e7021387a3d1600042e
    @author rajikaimal
*/

Route::get('/api/login', function () {
    return 'Done';
});

Route::group(['prefix' => 'api'], function () {
    //authenticate users with AuthenticateController
    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    //Register new users with RegisterConroller@register
    Route::post('register', 'RegisterController@check');

    Route::post('chat', 'ChatController@addmessage');

    //Return profile data
    Route::get('profile', 'ProfileController@profile');
    //Return userslist for search
    Route::get('search', 'SearchController@search');
    //Return visitor profile data
    Route::get('visitorprofile', 'ProfileController@visitor');
<<<<<<< HEAD




=======
    //Like a user
    Route::post('like', 'ProfileController@like');
>>>>>>> fe96c6a1edcdc7229e65212d5143fd2fb7f72b4a
});

Route::get('socket', 'SocketController@index');
Route::post('sendmessage', 'SocketController@sendMessage');
Route::get('writemessage', 'SocketController@writemessage');

/*
    Dashboard route
    Handles Admin panel of Coupley
    @author isurudilhan
*/

Route::get('/cp-admin', function () {
    return view('init_admin');
});

Route::group(['prefix' => 'admin-api'], function () {
    Route::resource('authenticates', 'AdminAuthenticateController', ['only' => ['index']]);
    Route::post('authenticates', 'AdminAuthenticateController@authenticate');
    //Return userslist
    Route::get('search', 'UsersController@friends');
    Route::get('blocked', 'UsersController@blocked');
    //Register new admins with RegisterConroller@register
    Route::post('registerAdmin', 'AdminRegisterController@checks');
    //block certain user
    Route::post('blockuser', 'UsersController@block');
    //unblock certain user
    Route::post('unblockuser', 'UsersController@Unblock');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});

Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');
});
