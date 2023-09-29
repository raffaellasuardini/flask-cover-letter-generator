import os
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
CORS(app)


@app.route("/", methods=['GET', 'POST'])
def index():
    pass


if __name__ == '__main__':
    app.run(debug=True)
