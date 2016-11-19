from . import api
from flask import jsonify

@api.route('/')
def apiInfo():
	info = {
		'version': 1,
		'admin': 'Alan Ma',
		'contact': 'alanma0907@utexas.edu',
	}
	return jsonify(**info)

@api.route('/search')
def search():
    pass

