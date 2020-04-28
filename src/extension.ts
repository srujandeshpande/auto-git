// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	console.log('Congratulations, your extension "auto-git" is now active!');

	const cp = require('child_process');
	
	//const exec = require('child_process').exec;
	cp.exec('pwd', (err: string, stdout: string, stderr: string) => {
		console.log('stdout: ' + stdout);
	});
	const myShellScript = cp.exec('./bash-git-file.sh');
	myShellScript.stdout.on('data2', (data: any)=>{
		console.log(data); 
	});
	myShellScript.stderr.on('data22', (data: any)=>{
		console.log(data);
	}); 

	/*
	while(true){
		cp.exec('pwd', (err: string, stdout: string, stderr: string) => {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			console.log('err: ' + err);
		});
		cp.exec('git add .', (err: string, stdout: string, stderr: string) => {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			console.log('err: ' + err);
		});
		cp.exec('git commit -m "git auto commit"', (err: string, stdout: string, stderr: string) => {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			console.log('err: ' + err);
		});
		cp.exec('git push', (err: string, stdout: string, stderr: string) => {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			console.log('err: ' + err);
		});
		
		
	}
	*/

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('auto-git.autoGit', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Auto Git Activated');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}