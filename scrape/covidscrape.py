# Imports for Web Scraping
import requests
from bs4 import BeautifulSoup
from csv import writer

# Web Scrape Data
response = requests.get('https://www.worldometers.info/coronavirus/#countries')
soup = BeautifulSoup(response.text,'html.parser')

alldata = soup.find_all(class_ = 'maincounter-number')

# Write data to covid.txt
coviddata = open('covid.txt', 'w')
for data in alldata:
    title = data.find(span_ = '').get_text().replace('\n', '').strip(' ')
    coviddata.write(str(title))
    coviddata.write('|')
