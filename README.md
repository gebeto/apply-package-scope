# apply-package-scope
CLI tool for adding scope to you package.json name


## Getting Started

Install using yarn:

```sh
 $ yarn add -D apply-package-scope
```

Or npm:

```sh
 $ npm install --save-dev apply-package-scope
```

## Usage

Add `"scope"` to your `package.json`:
```javascript
{
    "name": "my-package",
    "scope": "@gebeto",
    ...
}
```

After adding `"scope"` you can run command:
```sh
 $ apply-package-scope
```


Field `"name"` in your package.json will be changed to `"${scope}/${name}"`:
```diff
{
-   "name": "my-package",
+   "name": "@gebeto/my-package",
    "scope": "@gebeto",
    ...
}
```

 > !!! TIP !!!
 >
 > You can add `apply-package-scope` to the package.json
 > scripts to run it using `npm run` or `yarn`:
 > ```json
 > {
 >     "scripts": {
 >         "apply-package-scope": "apply-package-scope"
 >     }
 > }
 > ```


## License

**apply-package-scope** is [MIT licensed](./LICENSE).