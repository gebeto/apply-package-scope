#!/usr/bin/env node

const fs = require('fs');


function loadPackage() {
	const packageJsonRaw = fs.readFileSync('package.json', 'utf8');
	return JSON.parse(packageJsonRaw);
}

function savePackage(newPackageJson) {
	fs.writeFileSync('package.json', JSON.stringify(newPackageJson, null, 2));
}

function getPackageScope(packageJson) {
	return packageJson.scope;
}

function getArgsScope() {
	if (process.argv.length < 3) {
		return undefined;
	}
	return process.argv[process.argv.length - 1];
}

function applyScope() {
	const packageJson = loadPackage();
	const scope = getPackageScope(packageJson) || getArgsScope();
	if (scope === undefined) {
		throw new Error("You need to pass 'scope' to your package.json or as an argument!");
	}
	packageJson.name = [scope, packageJson.name].join('/');
	savePackage(packageJson);
}


applyScope();