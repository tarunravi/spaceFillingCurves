from flask import Flask, request
from pythonBackend import Visualizer
from PIL import Image
import time
import binascii

app = Flask(__name__)
visualizationObject = None
@app.route('/linear')
def linear():
    if visualizationObject==None:
        time.sleep(1)
    return {'data': visualizationObject.zigZag(100)}

@app.route('/hilbert')
def hilbert():
    return {'data': visualizationObject.hilbert()}

@app.route('/api/upload', methods = ['POST'])
def upload_file():
    global visualizationObject
    file = request.files['file']
    visualizationObject = Visualizer(file)
    print("done")
    return "done"