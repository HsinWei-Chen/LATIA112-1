from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
import bs4
import csv

def scrape_rankings(url):
    driver = webdriver.Chrome()
    driver.get(url)
    driver.fullscreen_window()

    # Wait for the page to load (adjust the timeout as needed)
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'cols')))

    # Assuming there is a dropdown for disciplines
    discipline_dropdown = Select(driver.find_element(By.ID, 'filterDisciplines'))

    result = [['World Rank', 'National Rank', 'University', 'Country', 'Scholar', 'Publication', 'D-index']]

    # Iterate through each discipline in the dropdown
    for index in range(1, len(discipline_dropdown.options)):
        # Select discipline by index
        discipline_dropdown.select_by_index(index)

        # Wait for the page to load after selecting the discipline (adjust the timeout as needed)
        wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'cols')))

        page_html = driver.page_source
        info_columns = bs4.BeautifulSoup(page_html, 'html.parser').select('.cols.university-item.rankings-content__item')

        for question_column in info_columns:
            World = question_column.select_one('.col.col--3.py-0.px-0.position.border').text
            National = question_column.select_one('.col.col--3.py-0.px-0.position').text
            University_element = question_column.select_one('.lazyload')
            University = University_element.text.strip() if University_element else "N/A"
            Country = question_column.select_one('.sh').text
            Scholar = question_column.select_one('.ranking.no-wrap').text
            Publication = question_column.select_one('.col.col--3.py-0.ranking.no-wrap').text
            D_index = question_column.select('.ranking.no-wrap')[1].text

            # Extract alt text from the university image
            alt_text = University_element['alt'] if University_element and 'alt' in University_element.attrs else "N/A"

            col = [World, National, University, Country, Scholar, Publication, D_index, alt_text]
            result.append(col)

    driver.quit()
    return result

# List of URLs for different disciplines
urls = [
    "https://research.com/university-rankings/physics"
]
# Scraping data for each discipline
all_results = []
for url in urls:
    discipline_results = scrape_rankings(url)
    all_results.extend(discipline_results)

# Write the combined data to a CSV file
with open('resultbs4_combined_alt.csv', 'w', newline='', encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(all_results)

all_results
