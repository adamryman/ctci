# You are passed a collection of object arrays ([1,2], ["A", "B"]) you need to return the collection with all possible

import unittest

def createCombinations(objectArray):
    finalArray = []
    for obj in objectArray[0]:
        objArray = []
        objArray.append(obj)
        finalArray.append(objArray)

    i = 1
    while(len(objectArray) > i):
        newFinalArray = []
        for subArray in finalArray:
            for obj in objectArray[i]:
                newSubArray = list(subArray)
                newSubArray.append(obj)
                newFinalArray.append(newSubArray)
        i = i + 1

        finalArray = newFinalArray
    return finalArray

class Tests(unittest.TestCase):
    def testCombinations(self):
        answer = [[1,"A"],[1,"B"],[2,"A"],[2,"B"]]

        self.assertEqual(createCombinations([[1,2],["A","B"]]), answer)

if __name__ == '__main__':
    suite = unittest.TestLoader().loadTestsFromTestCase(Tests)
    unittest.TextTestRunner(verbosity=2).run(suite)


