from flask import jsonify
from website import server

@server.route('/api/')
def apiInfo():
	info = {
		'version': 1,
		'admin': 'Alan Ma',
		'contact': 'alanma0907@utexas.edu',
	}
	return jsonify(**info)

@server.route('/', defaults={'path': ''})
@server.route('/<path:path>')
def index(path):
	return server.send_static_file('index.html')