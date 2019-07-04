$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
        var data = {
            token: 'xoxb-645645449623-684727900789-xg1Q1wvu1Vse8jaLDMr0GimC',
            channel: '#general',
            username: 'post',
            text: 'Hello Slack!'
        };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function (data) {
                alert( '投稿' );
            }
        });
    });
});
