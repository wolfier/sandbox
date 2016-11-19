from . import blog

@blog.route('/', defaults={'path': ''})
@blog.route('/<path:path>')
def index(path):
	return blog.send_static_file('index.html')