from flask import Flask, request, Response, render_template, jsonify
import requests
import time
import random

app = Flask(__name__, static_url_path='/static')


@app.route("/gpt2", methods=["POST"])
def gpt2():
    context = request.form['context']

    url = "http://main-gpt2-harry-potter-fan-fiction-msh1273.endpoint.ainize.ai/gpt2-harrypotter/long"
    length = random.randrange(150, 200)

    data = {
        "text": context,
        "num_samples": 1,
        "length": length
    }

    response = requests.post(url, data=data)
    res = response.json()

    return res


@app.route("/")
def main():
    return render_template("index.html")


@app.route("/health", methods=["GET"])
def healthCheck():
    return "", 200


if __name__ == "__main__":
    from waitress import serve

    serve(app, host='0.0.0.0', port=5000)
