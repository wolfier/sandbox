from flask import Flask, render_template, make_response, url_for, send_file
import os

app = Flask(__name__)

# http://flask.pocoo.org/snippets/57/
# Catch all path for now
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    script_dir = os.path.dirname(__file__)
    rel_path = "templates/index.html"
    return make_response(open(os.path.join(script_dir, rel_path)).read())

if __name__ == "__main__":
        app.run()
