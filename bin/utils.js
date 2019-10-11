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

function getArgsScope(args) {
	if (args.length < 3) {
		return undefined;
	}
	return args[args.length - 1];
}

function applyScope() {
	const packageJson = loadPackage();
	const scope = getPackageScope(packageJson) || getArgsScope(process.argv);
	if (scope === undefined) {
		throw new Error("You need to pass 'scope' to your package.json or as an argument!");
	}
	packageJson.name = [scope, packageJson.name].join('/');
	savePackage(packageJson);
}


exports.loadPackage = loadPackage;
exports.savePackage = savePackage;
exports.getPackageScope = getPackageScope;
exports.getArgsScope = getArgsScope;
exports.applyScope = applyScope;