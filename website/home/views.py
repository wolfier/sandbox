from . import home

@home.route('/', defaults={'path': ''})
@home.route('/<path:path>')
def index(path):
	return home.send_static_file('index.html')