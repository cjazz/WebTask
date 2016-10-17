module.exports = function(context, callback) {
    var webHookPayLoad = context.webhook  // contains the webhook payload provided by GitHub
	var urlQueryWebtaskTokenParams = context.data;
	
 	if (!webHookPayLoad)
	{
		callback('Invalid payload. Please check your WebHook configuration in GitHub.');
	}
	else  callback(null, { some: 'Completed' });
}        