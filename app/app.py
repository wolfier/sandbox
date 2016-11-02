from flask import Flask, render_template, make_response, url_for, send_file
from flask import Blueprint
import os
import config 

app = Flask(__name__)

if config.DEBUG:
	app.config['SERVER_NAME'] = 'local.dev:5000'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    # Swtich to send_file for production
    # return send_file('templates/index.html')
    # Prevent cachcing for developement testing
    script_dir = os.path.dirname(__file__)
    rel_path = "templates/index.html"
    return make_response(open(os.path.join(script_dir, rel_path)).read())

# Blueprint declaration
bp = Blueprint('subdomain', __name__, subdomain="blog")

@bp.route('/', defaults={'path': ''})
@bp.route('/<path:path>')
def blog(path):
    return "setting up the blog subdomain"

app.register_blueprint(bp)

if __name__ == "__main__":
        app.run()
