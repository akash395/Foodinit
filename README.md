# To run the online restaurant project: CSC322 Software Engineering

### Extra Details
- Languages Used: Python, CSS, Javascript, HTML
- Also Used: Flask, MySQL

### Instructions

1. Install Node.js from https://nodejs.org/en/
2. Install Git from https://git-scm.com/
3. Open a terminal, and go to desired directory.
4. git clone https://github.com/myumbla3/OnlineRestaurant.git
5. npm install (for installing dependencies for frontend)
6. make a virtual environment to download all python dependencies
7. activate that environment
8. pip install -r requirements.txt (found in src->flaskapp folder)
9. For Foodinit.sql, this file is used for MYSQL Workbench, which you also need to install for the database
   to work. Set accounts have been created to allow the user to sign in successfully
10. once all dependencies are installed type
  -> python app.py
11. Then in another terminal, type:npm start, which will open up a browser in localhost for you to access the websites

### Home Page
![Home](https://github.com/myumbla3/OnlineRestaurant/blob/main/home.png)

### Menu Page
![Menu](https://github.com/myumbla3/OnlineRestaurant/blob/main/Menu.png)

### Sign In Page
![SignIn](https://github.com/myumbla3/OnlineRestaurant/blob/main/SignIn.png)

- There are problems within the sql file itself. If you type in any of the Customer Values in the Sign In Page,
  it will successfully allow you to sign in to the website itself. However, there is no yet current implementation
  to differentiate between a registered customer and guest surfer.
