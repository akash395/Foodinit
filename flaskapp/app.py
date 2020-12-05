from flask import Flask, render_template , request, redirect, jsonify
from flask_mysqldb import MySQL
import yaml


app = Flask (__name__)
app.config ["DEBUG"] = True

# Configure DB
with open (r'db.yaml') as file:
    db = yaml.load (file, Loader = yaml.FullLoader)


app.config ['MYSQL_HOST'] = db ['mysql_host']
app.config ['MYSQL_USER']  = db ['mysql_user']
app.config ['MYSQL_PASSWORD'] = db ['mysql_password']
app.config ['MYSQL_DB'] = db ['mysql_db']

mysql = MySQL (app)


@app.route ('/')
def home():
    return '''<h1>Welcome to Foodinit</h1>'''

# this is for user to sign up
@app.route ('/signup', methods = ["POST", "GET"])
def signUp():
    if request.method == "POST":
        userInfo = request.form
        first_name = userInfo['fname']
        last_name = userInfo ['lname']
        email = userInfo ['email']
        password = userInfo['password']

        print ('email')
        cur = mysql.connection.cursor ()
        cur.execute ("INSERT INTO Customer(first_name, last_name, phone, funds, total_spendings, email_id, pass) VALUES (%s, %s, %s, %s, %s, %s, %s )",(first_name, last_name, '6315528120', '50.00', '0.00', email, password))
        mysql.connection.commit ()
        cur.close ()
        return redirect('http://localhost:3000')
    return render_template ('index.html')


# this is for user to sign in
@app.route ('/signin', methods = ["GET", "POST"])
def signIn():
    if request.method == "POST":
        userInfo = request.form
        email = userInfo["email"]
        password = userInfo["password"]

        cur = mysql.connection.cursor ()
        resultSet = cur.execute ("SELECT 1 FROM Customer WHERE email_id = %s AND pass = %s", (email, password))
        
        if resultSet == 0:
            return redirect ('http://localhost:3000/signin')  
        return jsonify("Successfully logged in")

# this is for manager to login
@app.route ('/admin', methods = ["POST", "GET"])
def admin():
    if request.method == "POST":
        adminInfo = request.form
        email = adminInfo["email"]
        password = adminInfo["password"]

        cur = mysql.connection.cursor()
        resultSet = cur.execute ("SELECT 1 FROM Manager WHERE manager_email = %s AND manager_password = %s", (email, password))

        if resultSet == 0:
            return redirect ('http://localhost:3000/admin')
        return redirect('http://localhost:3000/records')


@app.route ('/getemployeerecords', methods = ["GET"])
def getEmployeeRecords ():
    cur = mysql.connection.cursor ()
    allEmployeeRecords = []
    
    cur.execute ("SELECT * FROM Employee")
    row = cur.fetchone ()
    while  row is not None:
        allEmployeeRecords.append (row)
        row = cur.fetchone()
        

    return jsonify (allEmployeeRecords)
    



if __name__ == '__main__':
    app.run (host = 'localhost', port = 5000)