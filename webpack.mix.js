let mix = require('laravel-mix');

mix.less('resources/less/app.less', 'css/')  // 1
    .less('resources/less/auth/auth.less', 'css/auth/') // 2
    .less('resources/less/auth/login.less', 'css/auth/') // 3

    .less('resources/less/groups/create.less', 'css/groups/') // 4
    .less('resources/less/groups/show.less', 'css/groups/') // 5
    .less('resources/less/groups/edit.less', 'css/groups/') // 6
    .less('resources/less/groups/index.less', 'css/groups/') // 7

    .less('resources/less/home/guest.less', 'css/home/') // 8
    .less('resources/less/home/user.less', 'css/home/') // 9

    .less('resources/less/responses/create.less', 'css/responses/') // 10
    .less('resources/less/responses/done.less', 'css/responses/') // 11
    .less('resources/less/responses/notSupported.less', 'css/responses/'); // 12




