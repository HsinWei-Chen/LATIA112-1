import pandas as pd
import random
import matplotlib.pyplot as plt

df = pd.read_csv('cwurData.csv')
df['country'].unique()
count = df['country'].value_counts()
count = count.reset_index()
country = count['country']
count = count['count']
countjs = count.to_json(orient='values')

