from flask import Flask, jsonify, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/hello')

def hello_world():

    return make_response(jsonify({'message':'hello world!'}))

if __name__ == "__main__":
    app.run(host='localhost', port=5000)