from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "CloudOps Dashboard Backend Running"

@app.route("/dashboard")
def dashboard():

    data = {
        "totalServers": 12,
        "runningServers": 10,
        "awsInstances": 5,
        "alerts": 2,

        "servers": [
            {
                "hostname": "web01",
                "cpu": "25%",
                "ram": "40%",
                "disk": "60%",
                "status": "Online"
            },
            {
                "hostname": "app01",
                "cpu": "30%",
                "ram": "50%",
                "disk": "65%",
                "status": "Online"
            },
            {
                "hostname": "db01",
                "cpu": "80%",
                "ram": "75%",
                "disk": "90%",
                "status": "Warning"
            }
        ]
    }

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)