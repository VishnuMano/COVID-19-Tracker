# Imports for MongoDB
import pymongo
from pymongo import MongoClient

# Connecting code to Cluster
cluster = MongoClient("mongodb+srv://VishnuMano:COVID@cluster0.itvsv.mongodb.net/disease?retryWrites=true&w=majority")
collection = cluster.disease.covid

# Read from covid.txt and parse file to format with pipes
data = []
file = open("covid.txt", "rt")
for line in file:
    for word in line.split('|'):
        data.append(word)
# Posting Data into Database

covidData = [
    {
        "type": "cases",
        "number": data[0]
    },

    {
        "type": "deaths",
        "number": data[1]
    },

    {
        "type": "recovered",
        "number": data[2]
    },
]

collection.insert_many(covidData)