from flask import Flask, jsonify

server = Flask(__name__)
server.config.from_object('config')

import website.endpoints

