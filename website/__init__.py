from flask import Flask

from .home import home
from .blog import blog
from .api import api


server = Flask(__name__, static_folder=None)
server.config.from_object('config')

server.config['SERVER_NAME'] = 'wolfier.dev:5000'

server.register_blueprint(home)
server.register_blueprint(blog, subdomain='blog')
server.register_blueprint(api, subdomain='api')
