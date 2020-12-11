from flask import Flask, render_template, request, redirect, jsonify, make_response
from flask_mysqldb import MySQL
from functools import wraps
import yaml
import jwt
import datetime


app = Flask(__name__)
app.config["DEBUG"] = True
app.config['SECRET_KEY'] = 'ThisIsSecretKey'

# Configure DB
with open(r'db.yaml') as file:
    db = yaml.load(file, Loader=yaml.FullLoader)


app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)


@app.route('/')
def home():
    return '''<h1>Welcome to Foodinit</h1>'''

# this is for user to sign up


@app.route('/signup', methods=["POST", "GET"])
def signUp():
    if request.method == "POST":
        userInfo = request.form
        first_name = userInfo['fname']
        last_name = userInfo['lname']
        email = userInfo['email']
        password = userInfo['password']

        print('email')
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO Customer(first_name, last_name, phone, funds, total_spendings, email_id, pass) VALUES (%s, %s, %s, %s, %s, %s, %s )",
                    (first_name, last_name, '6315528120', '50.00', '0.00', email, password))
        mysql.connection.commit()
        cur.close()
        return redirect('http://localhost:3000')
    return render_template('index.html')


# this is for user to sign in
@app.route('/signin', methods=["GET", "POST"])
def signIn():
    if request.method == "POST":
        userInfo = request.form
        email = userInfo["email"]
        password = userInfo["password"]

        cur = mysql.connection.cursor()
        resultSet = cur.execute(
            "SELECT 1 FROM Customer WHERE email_id = %s AND pass = %s", (email, password))

        if resultSet == 0:
            return redirect('http://localhost:3000/signin')
        return redirect('http://localhost:3000/menu')
        # return jsonify("Successfully logged in")


def token_requred(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        # it will be something like http://localhost:5000/rouute?token=sdkjfvhbksdfhIUYHRASDKFCBD
        token = request.args.get('token')

        if not token:
            return jsonify({'Message': "Token is missing"}), 403
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'Message': "Token is invalid"}), 403

        return f(*args, **kwargs)
    return decorated


# this is for manager to login
@app.route('/admin', methods=["POST", "GET"])
def admin():

    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        cur = mysql.connection.cursor()
        resultSet = cur.execute(
            "SELECT 1 FROM Manager WHERE manager_email = %s AND manager_password = %s", (email, password))

        # if resultSet == 0:          # no match found with the given email and password
        #     return redirect ('http://localhost:3000/admin')
        # else:                       # match found so now get a valid token
        token = jwt.encode({'user': email, 'exp': datetime.datetime.utcnow(
        ) + datetime.timedelta(seconds=120)}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF-8')})
    return make_response('Could not verify!', 401, {'WWW-Authenticate': 'Basic realm = "Login Required"'})


@app.route('/getemployeerecords', methods=["GET"])
def getEmployeeRecords():
    cur = mysql.connection.cursor()
    allEmployeeRecords = []

    cur.execute("SELECT * FROM Employee")
    row = cur.fetchone()
    while row is not None:
        allEmployeeRecords.append(row)
        row = cur.fetchone()

    return jsonify(allEmployeeRecords)


# ---------------------------------------------------------------
# SOME PRACTICE THINGS DON"T WORRY ABOUT IT

def token_requred(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        # it will be something like http://localhost:5000/rouute?token=sdkjfvhbksdfhIUYHRASDKFCBD
        token = request.args.get('token')

        if not token:
            return jsonify({'Message': "Token is missing"}), 403
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'Message': "Token is invalid"}), 403

        return f(*args, **kwargs)
    return decorated


@app.route('/unprotected')
def unprotected():
    return jsonify('Anyone can view this')


@app.route('/protected')
@token_requred
def protected():
    return jsonify('This is sensitive information, only authorized person can view this')


@app.route('/login')
def login():
    auth = request.authorization

    if auth and auth.password == 'password':
        token = jwt.encode({'user': auth.username, 'exp': datetime.datetime.utcnow(
        ) + datetime.timedelta(seconds=60)}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF-8')})
    return make_response('Could not verify!', 401, {'WWW-Authenticate': 'Basic realm = "Login Required"'})


if __name__ == '__main__':
    app.run(host='localhost', port=5000)
