from flask import Flask, Blueprint, make_response

app = Flask(__name__)
app.config.from_object('config')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return app.send_static_file('index.html')

    # rel_path = "website/templates/index.html"
    # return make_response(open(os.path.join(app.config['BASE_DIR'], rel_path)).read())
