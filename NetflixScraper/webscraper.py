from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from Credentials import LoginMail, password, myProfile_xpath
from bs4 import BeautifulSoup

def main():
    driver = webdriver.Chrome()
    driver.get('https://www.netflix.com/browse/subtitles?so=az')
    time.sleep(3)
    emailId = driver.find_element_by_xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/form/div[1]/div/div/label/input')
    emailId.send_keys(LoginMail)
    time.sleep(3)
    passwordInput = driver.find_element_by_xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/form/div[2]/div/div/label/input')
    passwordInput.send_keys(password)
    signInButton = driver.find_element_by_xpath('/html/body/div[1]/div/div[3]/div/div/div[1]/form/button').click()
    time.sleep(4)
    chooseProfile = driver.find_element_by_xpath(myProfile_xpath).click()
    time.sleep(4)
    #select audio or subs
    select1 = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[1]/div/div[2]/div/div/div/div[2]/div[1]/div/div[1]').click()
    time.sleep(2)
    selectAudio = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[1]/div/div[2]/div/div/div/div[2]/div[1]/div/div[2]/ul/li[1]/a').click()
    #selectSubs = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[1]/div/div[2]/div/div/div/div[2]/div[1]/div/div[2]/ul/li[2]/a').click()
    time.sleep(3)
    #select language
    select2 = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[1]/div/div[2]/div/div/div/div[2]/div[2]/div/div').click()
    time.sleep(3)
    selectGerman = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[1]/div/div[2]/div/div/div/div[2]/div[2]/div/div[2]/ul/li[2]').click()
    time.sleep(4)

    #select Sortation of Gallery
    select3 = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[1]/div/div[2]/div/div/div/div[3]/div/div[1]').click()
    time.sleep(3)
    selectAZ = driver.find_element_by_xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[1]/div/div[2]/div/div/div/div[3]/div/div[2]/ul/li[3]/a').click()
    time.sleep(4)


    def scroll_down():
        SCROLL_PAUSE_TIME = 0.5

        # Get scroll height
        last_height = driver.execute_script("return document.body.scrollHeight")


        while True:
            print(last_height)
            # Scroll down to bottom
            for i in range(1, last_height-1200, 1):
                driver.execute_script("window.scrollTo(0, {});".format(i))

            # Wait to load page
            time.sleep(SCROLL_PAUSE_TIME)

            # Calculate new scroll height and compare with last scroll height
            new_height = driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

    scroll_down()


    def getData():
        pageHtml = driver.find_element_by_class_name('galleryContent')
        soup = BeautifulSoup(pageHtml.text, 'html.parser')
        print(soup)

    getData()
    time.sleep(10)


if __name__ == '__main__':
    main()