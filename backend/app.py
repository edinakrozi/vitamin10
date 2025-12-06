from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

QUOTES = [
    "The best way to get started is to quit talking and begin doing.",
    "Dream big and dare to fail.",
    "Don't let yesterday take up too much of today.",
    "Whether you think you can or you think you can't, you're right.",
    "The only limit to our realization of tomorrow is our doubts of today."
]

@app.route("/quote")
def quote():
    return jsonify({"quote": random.choice(QUOTES)})

if __name__ == "__main__":
    app.run(debug=True)
