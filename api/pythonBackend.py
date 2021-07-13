import binascii
import math 
from hilbertcurve.hilbertcurve import HilbertCurve
import time


class Visualizer:
    colorList=[]
    def __init__(self, filename):
        with open(filename, 'rb') as f:
            content = f.read()

        fileHex = binascii.hexlify(content)
        size = len(fileHex)/2

        self.colorList=[]
        for i in range(0, len(fileHex), 2):
            self.colorList.append(self.returnColor(fileHex[i: i+2]))
    
    def getTime(self):
        return time.time()
        
    def returnColor(self, hexCode):
        if hexCode=="00":
            return "#FFFFFF"
        if hexCode=="ff":
            return "#FFA900"
        decimalRep = int(hexCode, 16)
        if decimalRep<32:
            return "#52006A"
        if decimalRep>=32 and decimalRep<=126:
            return "#CD113B"
        if decimalRep>126:
            return "#FF7600"
        return "#000000"

    def zigZag(self, width):
        finalList = []
        currentList=[]
        count=1
        rowCount=0
        for i in self.colorList:
            currentList.append(i)
            if count == width:
                if rowCount%2==0:
                    finalList.append(currentList)
                else:
                    finalList.append(currentList[::-1])
                currentList=[]
                count=0
                rowCount+=1
            count+=1
        if not currentList == []:    
            finalList.append(currentList)

                
        return finalList
        
    def hilbert(self):
        p=len(self.colorList)
        n=2
        hilbert_curve = HilbertCurve(p, n)
        distances = list(range(len(self.colorList)))
        pointList = hilbert_curve.points_from_distances(distances)
        
        rowMax = max([i[0] for i in pointList])+1
        colMax = max([i[1] for i in pointList])+1
        
        finalList = [[0 for x in range(colMax)] for y in range(rowMax)]
        
        for index, currentPoint in enumerate(pointList):
            finalList[currentPoint[0]][currentPoint[1]] = self.colorList[index]
        
        return finalList