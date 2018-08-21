# README

To view this live: [https://coolinmc6.github.io/](https://coolinmc6.github.io/)

## CM Notes

### How to setup this repo

- Using the FB-README to setup GH-Pages for a userpage ends up replacing all of the source code with the build code when you deploy. Here are the steps to counter that:
	+ create a new branch with all your source code (for this repo it's called: "dev-branch")
	+ go through the normal setup of adding the appropriate scripts and "homepage" key in the `package.json` file
	+ Update your default branch to be your "source" branch
	+ while in the source branch, in your terminal, deploy it using `npm run deploy`
	+ **Remember:** All changes are to be made in your source branch. All deployments are from your source branch. Your master branch is really just the home for your build / production code so you'll never really have to touch it or switch to that branch
	+ :fire::fire:**WARNING:** Do Not **EVER** merge changes from the master. It's the build code; your source branch MUST contain your source code!:fire::fire:
