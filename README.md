# Trabbit
# Purpose of the App
Trabbit is our LAP 2 Group Project for beth-appreciation-channel. It is a habit tracker web app which has the following functionalities for our users:
- Users are able to login
- Users are able to choose a habit they want to track (e.g water, exercise, 8 hours of sleep) and choose how many days a week they wish to complete the habit.
- Users are able to track a habit and mark it as complete for the day.
- Users are able to see if they have completed a habit for the day and see their most recent completion streak.

# Technologies
- HTML, CSS and JS
- Express
- Jest
- MongoDB
- Bcrypt

The website was deployed using Netlify for the client and Heroku for the server (the website is deployed [here](https://trabbit.netlify.app/)). The remote database is deployed using Atlas on the MongoDB cloud.

# Installation and Usage
## Prerequisites
- Docker
## Installation 
- Clone or download the repo
## Usage
- Go to the project folder
- Open the bash terminal
- Run: `bash _scripts/startDev.sh`
- You will find:
    - Client in localhost:8080
    - Server in localhost:3000
- To close the app:
    - Open a new bash terminal in the project folder
    - Run: `bash _scripts/stop.sh`
- To perfom a complete teardown of the app:
    - Open a new bash terminal in the project folder
    - Run: `bash _scripts/teardown.sh`

# Wins
- Excellent work flow from the team.
- The team was able to build a functional web app.
- Full resposiveness for tablet and phone, both landscape and portrait.
- Fully deployed with no issues.
- Authentication implemented successfully.

# Challenges
- Deploying the database
- Integration testing

# Licence
- [MIT Licence](https://opensource.org/licenses/mit-license.php)
