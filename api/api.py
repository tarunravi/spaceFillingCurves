from flask import Flask
from pythonBackend import Visualizer

app = Flask(__name__)

@app.route('/linear')
def linear():
    visualzation = Visualizer("Untitled.png")
    print(visualzation.zigZag(19))
    return {'data': visualzation.zigZag(19)}

@app.route('/hilbert')
def hilbert():
    visualzation = Visualizer("Untitled.png")
    print(visualzation.hilbert())
    return {'data': visualzation.hilbert()}
