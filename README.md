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
10. once all dependencies are installed type python app.py
![App](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/app.png)

11. Then in another terminal, type:npm start, which will open up a browser in localhost for you to access the websites
![npm](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/npm.png)

### Home Page
![Home](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/home.png)

- This is the home page for the website where a video displays food and there is a navigation bar at the top of the website where you can navigate to
  the various parts of the website, including the menu, signing in, contacting us, etc.

### Menu Page
![Menu](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/Menu.png)

- The top picks food are displayed at the front of the Menu, and there is the feature to add any of the to the cart, but that feature isn't working right now.
  On the left hand side of the page, there is a trigram in which you can click and it will display the various options of food provided, whether it be
  Breakfast, Lunch, Dinner, Specials, etc.
  
  - Breakfast
   ![Breakfast](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/Breakfast.png)
   
  - Lunch
   ![Lunch](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/lunch.png)
   
  - Dinner
   ![Dinner](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/Dinner.png)
   
### Admin Page
![Admin](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/admin.png)

- This is the Admin page where the Managers will sign in instead of the usual sign in method.

#### Requirements
![Req](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/AdminReq.png)

- If you don't implement anything within the text boxes, then there wil be a red ring around the text boxes and text indicating that
  you did not meet the requirements to log in.
  
#### Token Acceptance
![Token](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/token.png)

- This token indicates that when you sign in through admin, then you successfully signed in. The manager is now within the database. We tried to fix the token, but
  it didn't work properly and just displayed the token as one string of text.

### Sign In Page
![SignIn](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/SignIn.png)

![SignError](https://github.com/myumbla3/OnlineRestaurant/blob/main/RImages/signerror.png)

- There are problems within the sql file itself. If you type in any of the Customer Values in the Sign In Page,
  it will allow you to successfully sign in to the website itself. However, we lacked enough back end skills
  to differentiate a registered customer, vip customer and guest surfer. Vip customers would've had a 
  specialized menu catered to their preferences, and registered customers would've been redirected to the top picks in the menu. We also tried to use escape_string from
  MySQLdb in order to redirect the VIP and Registered customers to different pages based on their deposit funds.
  
- Unfortunately, we realize that we should've focused more of our time on the back end first, and add a front end onwards. The back end is more important to work on since that is where
  all the information is stored. Since this is a first for all of us, we were lost on how to start. Once we did start, we encountered various problems with our machines. A lot of precious time were spent on debugging the problem on how to get things up and running before actually coding. As mentioned previously we spent a lot of time with tutorials learning new things and information on how to do this kind of project rather than starting our own version of it. 
Through this proejct we learned our strengths and weaknesses and what areas we need to improve on. We got valuable experience on how to tackle this type of project and situation in the real world job. We all learned from our mistakes and hopefully we can avoid this kind of behavior in the job field.
