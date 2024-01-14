from woocommerce import API
from pprint import pprint

wcapi = API(
    url="https://shekaf.org",
    consumer_key="ck_5fb7ed79b0b0eceaaabccacacc17dfa930898749",
    consumer_secret="cs_87ce3b0ba565c277311a2bb8c8b5c917478b9f1f",
    version="wc/v3",
    timeout=10
)


page = 1 
products = []
while True:
    prods = wcapi.get('products', params={'per_page': 100,  'page': page, 'stock_status': 'instock'}).json()
    page += 1
    if not prods:
        break
    products.append(prods)

data = []
for a in range(len(products)):
    for i in range(len(products[a])):
        data.append(products[a][i]) 
