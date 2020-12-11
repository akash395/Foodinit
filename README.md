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
10. once all dependencies are installed for WINDOWS type python app.py
![App](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/app.png)

11. Then in another terminal, type:npm start, which will open up a browser in localhost for you to access the websites
![npm](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/npm.png)

12. If you're using mac just follow these steps:
make sure you are starting in restaurant and then type in the following lines
<img width="187" alt="Screen Shot 2020-12-11 at 4 07 11 PM" src="https://user-images.githubusercontent.com/38135805/101957531-9fc9be80-3bcf-11eb-8c2e-db66cc86a684.png">


### Home Page
![Home](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/home.png)

- This is the home page for the website where a video displays food and there is a navigation bar at the top of the website where you can navigate to
  the various parts of the website, including the menu, signing in, contacting us, etc.

### Menu Page
![Menu](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/Menu.png)

- The top picks food are displayed at the front of the Menu, and there is the feature to add any of the items to the cart, you can view the 'Add Cart' once you hover over the item but that feature to add it isn't working right now.
  On the left hand side of the page, there are three lines in which you can click and it will display the various options of food provided, whether it be
  Breakfast, Lunch, Dinner, Specials, etc.
  
  - Breakfast
   ![Breakfast](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/Breakfast.png)
   
  - Lunch
   ![Lunch](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/lunch.png)
   
  - Dinner
   ![Dinner](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/Dinner.png)

### Sign In Page
![SignIn](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/SignIn.png)

- There are problems within the sql file itself. If you type in any of the Customer Values in the Sign In Page,
  it will successfully allow you to sign in to the website itself. However, wwe didn't have enough time 
  to differentiate a registered customer and guest surfer. We also didn't have enough time to differentiate a vip customer and register customer. Vip would've had a 
  specialized menu catered to their prefences, and registered customer would've been redirected to the top picks in the menu. We also tried to use escape_string from
  MySQLdb in order to redirect the VIP and Registered customers to different pages based on their deposit funds.
  
- Now we realize that we should've focused more of our time on the back end first, then add a front end onwards. The back end is more important to work on since that is where
  all the information is stored
