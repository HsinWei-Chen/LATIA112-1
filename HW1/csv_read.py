import pandas as pd
import random
import matplotlib.pyplot as plt

df = pd.read_csv('C:/Users/user/Desktop/HW1/University Ranking.csv')
print(df)

# Q1 : find the top 10 universities in which contry
data = df[["Location"]].head(10)
for i in data:
    print(data[i].value_counts())

# Q2 : find the highest ranked university in each country
data = df.head(100)
answer = pd.DataFrame()
temp_df = data[data['National Rank'] == 1]
answer = temp_df.loc[:,['Location','Institution','World Rank']]
print(answer)

# Q3 : the top 100 education rank of universities
temp_df = df[["Institution","Education Rank"]]
temp_df = temp_df[temp_df['Education Rank'] != '-']
temp_df = temp_df.dropna(subset=['Education Rank'])   
educate_rank = temp_df[temp_df['Education Rank'].astype(int) < 100]      
print(educate_rank)

#Q4 : the top 100 faculty rank of universities
temp_df = df[["Institution","Faculty Rank"]]
temp_df = temp_df[temp_df['Faculty Rank'] != '-']
temp_df = temp_df.dropna(subset=['Faculty Rank'])   
faculty_rank = temp_df[temp_df['Faculty Rank'].astype(int) < 100]        
print(faculty_rank)

#Q5 : the top 100 research rank of universities
temp_df = df[["Institution","Research Rank"]]
temp_df = temp_df[temp_df['Research Rank'] != '-']   
temp_df = temp_df.dropna(subset=['Research Rank'])
Research_rank = temp_df[temp_df['Research Rank'].astype(int) <= 100]
Research_rank = Research_rank.sort_values(by=['Research Rank'])        
print(Research_rank)

# Q6 : The score of top 100 universities
data = df.head(100)
answer = df.loc[:,['Institution','Score']]
print(answer)

# Q7 : the count of top 200 universities in each country and compare the top 10 countries
answer = df.loc[:,['Location']].head(200)
answer = answer.value_counts()
print(answer.head(10))

# Q8 : the top 100 enployable rank of universities
temp_df = df[["Institution","Employability Rank"]]
temp_df = temp_df[temp_df['Employability Rank'] != '-']   
temp_df = temp_df.dropna(subset=['Employability Rank'])
Employability_rank = temp_df[temp_df['Employability Rank'].astype(int) <= 100]
print(Employability_rank)

# Q9 : The National Rank of USA 
temp_df = df[df['Location'] == 'USA']
answer = temp_df.loc[:,['Institution','National Rank']]
print(answer)

# Q10 : The rank of Taiwan University
temp_df = df[df['Location'] == 'Taiwan']
answer = temp_df.loc[:,['Institution','World Rank']]
print(answer)


