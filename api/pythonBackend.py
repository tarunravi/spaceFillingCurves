import binascii
import math 
from hilbertcurve.hilbertcurve import HilbertCurve
import time


class Visualizer:
    colorList=[]
    def __init__(self, file):
        content = file.read()

        fileHex = binascii.hexlify(content)
        size = len(fileHex)/2

        self.colorList=[]
        for i in range(0, len(fileHex), 2):
            self.colorList.append(self.returnColor(fileHex[i: i+2]))
    
    def getTime(self):
        return time.time()
        
    def returnColor(self, hexCode):
        if hexCode=="00":
            return "0"
        if hexCode=="ff":
            return "1"
        decimalRep = int(hexCode, 16)
        if decimalRep<32:
            return "2"
        if decimalRep>=32 and decimalRep<=126:
            return "3"
        if decimalRep>126:
            return "4"
        return "5"

    def zigZag(self, width):
        finalList = []
        currentList=[]
        count=1
        rowCount=0
        print("zizZag1")
        print(len(self.colorList))
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
            finalList.append((currentList + ["5"] * width)[0:width])
        return finalList
        
    def hilbert(self):
        p=0
        while (pow(4, p) < len(self.colorList)):
            p+=1
        n=2
        print("h1")
        print(p,n)
        hilbert_curve = HilbertCurve(p, n)
        distances = list(range(len(self.colorList)))
        pointList = hilbert_curve.points_from_distances(distances)
        print("h2")
        rowMax = max([i[0] for i in pointList])+1
        colMax = max([i[1] for i in pointList])+1
        
        finalList = [["5" for x in range(colMax)] for y in range(rowMax)]
        
        for index, currentPoint in enumerate(pointList):
            finalList[currentPoint[0]][currentPoint[1]] = self.colorList[index]
        print(finalList)
        return finalList
