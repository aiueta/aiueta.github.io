$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
        var data = {
            token: 'xoxb-645645449623-684280855940-7TFKjB1eZNTbQAhh7gRRuUw1',
            channel: '#general',
            username: 'post',
            text: 'Hello Slack!'
        };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function (data) {
                alert( '投稿'　+ data.ok );
            }
        });
    });
});
