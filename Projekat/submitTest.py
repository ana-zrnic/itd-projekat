import requests

url = 'https://hookb.in/Z2yyY727rjIR33eLoMWZ'

data = {
    "name": "John"
}

r = requests.post(url, verify=False, json=data)