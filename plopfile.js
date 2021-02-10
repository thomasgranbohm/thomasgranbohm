/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const plopper = (plop) => {
	plop.setHelper('camelcase', (input) => {
		return input.split(" ").map((str) => str[0].toString().toUpperCase() + str.toString().substr(1).toLowerCase()).join("")
	})
	plop.setHelper('lowercase', (input) => {
		return input.split(" ").map((str) => str.toString().toLowerCase()).join("-")
	})
	plop.setPartial('camelcased', '{{camelcase name}}')
	plop.setPartial('lowercased', '{{lowercase name}}')
	plop.setGenerator('component', {
		description: "Create component",
		prompts: [{
			name: "name",
			message: "Name:"
		}, {
			name: "props",
			message: "Will component have props?",
			default: false,
			type: "confirm"
		},
		 {
			name: "children",
			message: "Will component have children?",
			default: false,
			type: "confirm",
		}],
		actions: [{
			type: "add",
			path: "src/components/{{camelcase name}}/{{camelcase name}}.tsx",
			templateFile: "plop/templates/component.hbs"
		}, {
			type: "add",
			path: "src/components/{{camelcase name}}/{{camelcase name}}.module.scss",
			templateFile: "plop/templates/module.hbs"
		}, {
			type: "add",
			path: "src/components/{{camelcase name}}/index.ts",
			templateFile: "plop/templates/index.hbs"
		}]
	})
}

module.exports = plopper;