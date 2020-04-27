// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	
	const cp = require('child_process');
	
	console.log('Congratulations, your extension "auto-git" is now active!');

	/*	
	cp.exec('echo $0', (err: string, stdout: string, stderr: string) => {
		console.log('shell: ' + stdout);
		if(stdout === "/bin/sh"){
			console.log("sh bin");
		}
		else{
			console.log("nope");
		}
	});
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
	console.log("h1");

	cp.exec('git add .');
	console.log("h2");
	cp.exec('git commit -m "worked"');
	console.log("h3");
	cp.exec('git push');
	console.log("h4");

}

// this method is called when your extension is deactivated
export function deactivate(context: vscode.ExtensionContext) {
	console.log('The extension "auto-git" is now deactivated!');
	
	let disposable = vscode.commands.registerCommand('auto-git.autoGit', () => {
		vscode.window.showInformationMessage('Auto Git Deactivated');
	});
	context.subscriptions.push(disposable);
}
