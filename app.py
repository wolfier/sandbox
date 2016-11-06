from flask import Flask, render_template, make_response, url_for, send_file
from flask import Blueprint
import config
import os

app = Flask(__name__)

if config.DEBUG:
	app.config['SERVER_NAME'] = 'local.dev:5000'
else:
	app.config['SERVER_NAME'] = 'wolfier.com'

script_dir = os.path.dirname(__file__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    # Swtich to send_file for production
    # return send_file('templates/index.html')
    # Prevent cachcing for developement testing
    rel_path = "app/templates/index.html"
    return make_response(open(os.path.join(script_dir, rel_path)).read())

# Blueprint declaration
bp = Blueprint('subdomain', __name__, subdomain="blog")

@bp.route('/', defaults={'path': ''})
@bp.route('/<path:path>')
def blog(path):
    rel_path = "blog/index.html"
    return make_response(open(os.path.join(script_dir, rel_path)).read())

app.register_blueprint(bp)

if __name__ == "__main__":
    app.run()
