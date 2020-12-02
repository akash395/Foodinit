from flask import Flask, render_template , request, redirect
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

@app.route ('/post', methods = ["POST", "GET"])
def home():
    if request.method == "POST":
        userInfo = request.form
        first_name = userInfo['fname']
        last_name = userInfo ['lname']
        email = userInfo ['email']
        password = userInfo['password']

        cur = mysql.connection.cursor ()
        cur.execute ("INSERT INTO user (first_name, last_name, email, password) VALUES (%s, %s, %s, %s)", (first_name, last_name, email, password))
        mysql.connection.commit ()
        cur.close ()
        return redirect('http://localhost:3000')
    return render_template ('index.html')


if __name__ == '__main__':
    app.run (host = 'localhost', port = 5000)