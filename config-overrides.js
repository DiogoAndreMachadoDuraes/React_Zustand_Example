const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = {
	webpack: config => {
		config = alias(configPaths('./tsconfig.paths.json'))(config);

		return config;
	},
};
