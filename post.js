$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
        var data = {
            token: 'xoxp-645645449623-643295357428-686566886135-8f32cf6ec2316887f29f7c9c9e5c5741',
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
