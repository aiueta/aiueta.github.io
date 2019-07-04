$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
        var data = {
            token: 'xoxp-645645449623-643295357428-686550594535-94a2955170f0724bdf86b2ba51d73876',
            channel: '#入退室記録',
            username: 'oreno-bot',
            text: 'Hello Slack!'
        };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function (data) {
                alert( 'Can I post to Slack? :' + data.ok );
            }
        });
    });
});
