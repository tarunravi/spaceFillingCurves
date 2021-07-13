from flask import Flask
from pythonBackend import Visualizer

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    visualzation = Visualizer("Untitled.png")
    print("hello")
    print(visualzation.zigZag(19))
    return {'data': visualzation.zigZag(19)}

