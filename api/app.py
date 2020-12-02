from flask import Flask

app = Flask(__name__)

@app.route('/test',methods=['GET'])
def api():
    return {
        'test': 'test1'
    }

if __name__=="__main__":
    app.run(host='localhost',debug=True)