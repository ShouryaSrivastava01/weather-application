👋👋 Hello Contributors 

# Weather Application
One of the basic and core project for learning development. 

## Tech Stack
### Frontend:
* HTML 
* CSS
* Javascript


### Learning the Tech Stack 
1. HTML: https://www.w3schools.com/html/
2. CSS: https://www.w3schools.com/css/
4. JAVASCRIPT: https://www.w3schools.com/js/

## Component

### Search Bar
User can search weather of a location. Initially using geolocation application will reflect the weather condition of user's location.

### Weather Forecast
To display weather forecast of upcoming 7 days/ week



## How to Contribute 

Firstly, 🍴 fork the responsitory.

## Option 1
1. Read the issues thoroughly.
2. Pick an issue and try to resolve it.
3. Submit Pull Request. 
[Note: While submitting PR do add comments and workflow used to resolve the issue]

## Option 2 
1. Visit the web page of the repo 
2. find some bugs 🐜
3. create a new issue and work on it.
4. submit the PR.


# First Contribution

If you are looking to make your first contribution, follow the steps below.

<img align="right" width="300" src="https://weather-application.github.io/assets/Readme/fork.png" alt="fork this repository" />

#### If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/).

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

<img align="right" width="300" src="https://weather-application.github.io/assets/Readme/clone1.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="https://weather-application.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

For example:

```
git clone https://github.com/this-is-you/weather-application.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd weather-application
```

Now create a branch using the `git checkout` command:

```
git checkout -b your-new-branch-name
```

For example:

```
git checkout -b updating-the-app
```

## Make necessary changes and commit those changes

Now open the files you want to update and continue to update everything. Save all the files.

<img align="right" width="450" src="https://firstcontributions.github.io/assets/Readme/git-status.png" alt="git status" />

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

for adding all changes execute the command below:
```
git add .
```

for adding one file execute the command below with <relative-file-path> as the path of the file you updated:
```
git add <relative-file-path>
```

Now commit those changes using the `git commit` command:

```
git commit -m "Short description of the changes you made"
```

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin -u <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

<details>
<summary> <strong>If you get any errors while pushing, click here:</strong> </summary>

- ### Authentication Error
     <pre>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
  remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
  fatal: Authentication failed for 'https://github.com/<your-username>/first-contributions.git/'</pre>
  Go to [GitHub's tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on generating and configuring an SSH key to your account.

</details>

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://weather-application.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://weather-application.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll encounter often as a contributor!