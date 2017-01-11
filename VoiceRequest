def get_google_translate_token(text):

	TOKEN_SERVER_URL = "localhost:3000/"
	r = request.url(TOKEN_SERVER_URL, text)

	if r.status_code == 200:
		return r.body
	else:
		raise "Token server is down."