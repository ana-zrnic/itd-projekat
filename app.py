from logging import debug, log
from flask import Flask, json, render_template, request, make_response, jsonify
import mysql.connector
app = Flask(__name__)

mydb_conn = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="majdb"
)
mycursor = mydb_conn.cursor()


@app.route('/static/')
def hello_world():
    return render_template('index.html')

@app.route('/static/process', methods=['POST', 'GET'])
def process():
    naslov=request.json['naslov']
    opis=request.json['opis']
    vrijeme=request.json['vrijeme']

    data = (naslov, opis, vrijeme)

    insert = (
        "INSERT INTO logovi (naslov, opis, vrijeme) "
        "VALUES (%s, %s, %s)"
        )
    mycursor.execute(insert, data)        
    mydb_conn.commit()   
    return make_response(render_template('index.html'), 201)


@app.route('/static/logs', methods=['GET'])
def getAll():
    try:
        # read question : SQLite index start from 1 (see index.html)
        query = "SELECT * FROM logovi"
        mycursor.execute(query)
        logs = mycursor.fetchall() # fetch the data from cursor
        mydb_conn.commit() # apply changes
        responseString = ""
        f = open("demofile2.txt", "w")
        f.write("Length"+str(len(logs))+"\n")
        f.write("[\n")
        responseString += "["
        for i in range(0,len(logs)):
            #f.write(str(jsonify(id=logs[i][0], naslov=str(logs[i][1]), opis=str(logs[i][2]), vrijeme=str(logs[i][3]))))
            d = {
                "id" : logs[i][0],
                "naslov" : logs[i][1],
                "opis" : logs[i][2], 
                "vrijeme" : logs[i][3]
            }
            responseString += str(json.dumps(d))
            if i != len(logs) - 1:
                responseString +=","
            f.write(str(json.dumps(d))+ ",\n")
        responseString += "]"
        f.write("]\n")
        f.write("After log")
        f.close()
        # go to thanks page : pass the value of tuple using question[0]
        resp = app.response_class(
            response=responseString, status=200, mimetype='application/json'
        )
        return responseString #make_response(response=responseString, status=200)
    except mydb_conn.Error as err: # if error
        # then display the error in 'database_error.html' page
        return make_response(render_template('index.html'), 501)
    #finally:
        # mydb_conn.close() # close the connection



@app.route('/static/logs/<int:log_id>', methods=['DELETE'])
def delete(log_id):

    try:
        delete = (
            "DELETE FROM logovi WHERE id = " + str(log_id)
            )
        mycursor.execute(delete)        
        mydb_conn.commit()   
        resp = app.response_class(status=202, mimetype='application/text')
        return resp
    except mydb_conn.Error as err: # if error
        # then display the error in 'database_error.html' page
        return make_response(render_template('index.html'), 501)

@app.route('/static/logs/<int:log_id>', methods=['PUT'])
def edit(log_id):
    try:
        naslov=request.json['naslov']
        opis=request.json['opis']
        vrijeme=request.json['vrijeme']

        update = (
            "UPDATE logovi SET naslov = '" + naslov + "', opis = '" + opis + "', vrijeme = '" + vrijeme + "' WHERE id = " + str(log_id)
            )
        mycursor.execute(update)        
        mydb_conn.commit()   
        resp = app.response_class(status=202, mimetype='application/json')
        return resp
    except mydb_conn.Error as err: # if error
        # then display the error in 'database_error.html' page
        return make_response(render_template('index.html'), 501)

@app.route('/static/logs/<int:log_id>', methods=['GET'])
def getById(log_id):
    try:
        # read question : SQLite index start from 1 (see index.html)
        query = "SELECT * FROM logovi WHERE id = "+str(log_id)
        mycursor.execute(query)
        logs = mycursor.fetchall() # fetch the data from cursor
        mydb_conn.commit() # apply changes
        
        responseString = ""
        f = open("demofile3.txt", "w")
        f.write("Length"+str(len(logs))+"\n")
        f.write("[\n")
        responseString += "["
        for i in range(0,len(logs)):
            #f.write(str(jsonify(id=logs[i][0], naslov=str(logs[i][1]), opis=str(logs[i][2]), vrijeme=str(logs[i][3]))))
            d = {
                "id" : logs[i][0],
                "naslov" : logs[i][1],
                "opis" : logs[i][2], 
                "vrijeme" : logs[i][3]
            }
            responseString += str(json.dumps(d))
            if i != len(logs) - 1:
                responseString +=","
            f.write(str(json.dumps(d))+ ",\n")
        responseString += "]"
        f.write("]\n")
        f.write("After log")
        f.close()
        # go to thanks page : pass the value of tuple using question[0]
        resp = app.response_class(
            response=responseString, status=200, mimetype='application/json'
        )
        return responseString #make_response(response=responseString, status=200)
    except mydb_conn.Error as err: # if error
        # then display the error in 'database_error.html' page
        return make_response(render_template('index.html'), 501)
    #finally:
        # mydb_conn.close() # close the connection




if __name__ == "__main__":
    app.run(debug="true")