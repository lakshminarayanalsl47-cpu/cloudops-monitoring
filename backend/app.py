from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Home Route
@app.route("/")
def home():
    return "CloudOps Dashboard Backend Running"


# Dashboard API
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


# Login API
@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    if username == "admin" and password == "cloudops123":
        return jsonify({
            "success": True,
            "message": "Login Successful"
        })

    return jsonify({
        "success": False,
        "message": "Invalid Credentials"
    })
@app.route("/aws")
def aws():

    return jsonify({
        "ec2": "3 Running",
        "rds": "Available",
        "alb": "Healthy",
        "cloudwatch": "Monitoring"
    })

# Run Flask App
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)