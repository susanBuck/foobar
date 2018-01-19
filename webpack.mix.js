let mix = require('laravel-mix');

mix.less('resources/less/app.less', 'css/')  // 1
    .less('resources/less/auth/auth.less', 'css/auth/') // 2
    .less('resources/less/auth/login.less', 'css/auth/') // 3

    .less('resources/less/groups/create.less', 'css/groups/') // 4
    //.less('resources/less/groups/show.less', 'css/groups/') // 5
    .less('resources/less/groups/edit.less', 'css/groups/') // 6
    //.less('resources/less/groups/index.less', 'css/groups/') // 7

    .less('resources/less/home/guest.less', 'css/home/') // 8
    //.less('resources/less/home/user.less', 'css/home/') // 9

    //.less('resources/less/responses/create.less', 'css/responses/') // 10
    .less('resources/less/responses/done.less', 'css/responses/') // 11
    .less('resources/less/responses/notSupported.less', 'css/responses/'); // 12

    /*

    Between each of the following tests, I run this command:

        rm -rf ./public/css; npm run dev; find ./public/css -type f -and -not -name ".DS_STORE" | wc -l

    This command...
        1. Wipes `public/css` (destination folder) clean for a blank slate
        2. Runs `npm run dev` to invoke the above .less statements
        3. Counts the number of resulting .css files that were produced in `public/css`

    Test 1:
    Leave all 12 .less statements above active.
    Run above-mentioned command.
    .css file count:
        Expected: 12
        Actual: 11
    FAIL

    Test 2
    Comment any ONE of the .less statements above, so only 11 are run.
    Run above-mentioned command.
    .css file count:
        Expected: 11
        Actual: 10
    FAIL

    Test 3
    Comment any TWO of the .less statements above, so only 10 are run.
    Run above-mentioned command.
    .css file count:
        Expected: 10
        Actual: 9
    FAIL

    Test 4
    Comment out any THREE of the .less statements above, so only 9 are run.
    Run above-mentioned command.
    .css file count:
        Expected: 9
        Actual: 9
    PASS

    Test 5
    Comment out any FOUR of the .less statements above, so only 8 are run.
    Run test command.
        Expected: 8
        Actual: 8
    PASS

    Conclusion: When attempting to run more than 9 .less commands, it fails to process all files.

    */


