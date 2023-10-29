import pandas as pd
import random
import matplotlib.pyplot as plt

df = pd.read_csv('C:/Users/user/Desktop/LATIA112-1/HW1/University Ranking.csv')
print(df)

# Q1 : find the top 10 universities in which contry
data = df[["Location"]].head(10)
top_10 = data.value_counts()
top_10.plot(kind='pie',autopct='%1.1f%%')
plt.title('Top 10 Universities')
plt.show()
print(top_10)

# Q2 : find the highest ranked university in each country and graph it
data = df.head(100)
highest = pd.DataFrame()
temp_df = data[data['National Rank'] == 1]
highest = temp_df.loc[:,['Location','Institution','World Rank']]
print(highest)

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

# Q6 : the top 100 enployable rank of universities
temp_df = df[["Institution","Employability Rank"]]
temp_df = temp_df[temp_df['Employability Rank'] != '-']   
temp_df = temp_df.dropna(subset=['Employability Rank'])
Employability_rank = temp_df[temp_df['Employability Rank'].astype(int) <= 100]
print(Employability_rank)

# Q7 : the top 100 universities' scorce and the proportion of each country
data = df.head(100)
score = df.loc[:,['Institution','Score']]
propertion = data.loc[:,['Location']].value_counts()
print(score)
print(propertion)
propertion.plot(kind='pie',autopct='%1.1f%%',)
plt.title('Top 100 Universities')
plt.axis('equal')
plt.show()

# Q8 : the count of top 200 universities in each country and compare the top 10 countries
top200 = df.loc[:,['Location']].head(200)
top_10_country = top200.value_counts().head(10)
print(top_10_country)
top_10_country.plot(kind='bar')
plt.xlabel('Location')
plt.ylabel('Count')
plt.show()

# Q9 : The National Rank of USA 
temp_df = df[df['Location'] == 'USA']
USA_Rank = temp_df.loc[:,['Institution','National Rank']]
print(USA_Rank)

# Q10 : The rank of Taiwan University
temp_df = df[df['Location'] == 'Taiwan']
Taiwan_Ranlk = temp_df.loc[:,['Institution','World Rank']]
print(Taiwan_Ranlk)


