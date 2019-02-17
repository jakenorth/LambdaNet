print("Starting")
from flask import *
from flask_cors import *
import random
import string
import time
import os
app = Flask('app')
CORS(app)
hosts = []
os.system("rm -rf static/functions")

def get_func_names():
  try:
    return list(os.walk("static/functions"))[0][2]
  except:
    return []

# Client apps
@app.route("/")
def host_home_route():
  return render_template("home.html")
@app.route("/functions")
def host_functions_route():
  return render_template("functions.html", functions=get_func_names())
@app.route("/deploy")
def host_deploy_route():
  return render_template("deploy.html")


# API
queue = {}
done = {}

@app.route("/api/func/<name>/<function>")
def newfunc(name, function):
  open("static/functions/"+name, "w+").write(function)
  return "Done!"

@app.route("/api/count")
def machine_count():
  return str(len(hosts))

@app.route("/api/run/<funcStr>/<argStr>")
@app.route("/api/run/<funcStr>")
def run_route(funcStr, argStr=""):
  print("triggered")
  ## Add function to queue
  jobID = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(32)])
  queue[jobID] = (funcStr, argStr)
  ## Wait for it to be done
  while not (jobID in done):
    time.sleep(0.1)
  ## Clean up
  result = done[jobID]
  del queue[jobID]
  del done[jobID]
  ## Return the result
  return result

@app.route("/api/fetch/<host_id>")
def fetch_route(host_id):
  if host_id not in hosts:
    print("New connection")
    print(hosts)
    hosts.append(host_id)
  try:
    jobID = list(queue)[0]
    funcStr, argStr = queue[jobID]
    print("putting")
    return jobID + "%%%%" + funcStr + "%%%%" + argStr
  except:
    print("nulling")
    return "null"

@app.route("/api/return/<jobID>/<result>")
def return_route(jobID, result):
  print(jobID + ": "+result)
  done[jobID] = result
  return "thank you!"

app.run(host='0.0.0.0', port=80)