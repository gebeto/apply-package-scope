const {
	loadPackage,
	getPackageScope,
	getArgsScope,
} = require("./utils");


describe("apply-package-scope", () => {
	const loadedPackage = loadPackage();

	it("loadPackage", () => {
		expect(loadedPackage.name).toBe('apply-package-scope');
	});
	
	// it("savePackage", () => {
	// 	expect(1).toBe(1);
	// });
	
	it("getPackageScope", () => {
		const scope = getPackageScope(loadedPackage);
		expect(scope).toBe("@gebeto");
	});
	
	it("getArgsScope", () => {
		const scope = getArgsScope(["a", "b", "c", "d"]);
		expect(scope).toBe("d");
	});
});

