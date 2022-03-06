module.exports = {
    extends: [
        'eslint:recommended',
        'standard',
        'react-app',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['eslint-plugin-prettier', 'simple-import-sort', 'import'],
    rules: {
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'no-console': [1, { allow: ['info', 'error'] }],
        'no-labels': 0,
        'jsx-quotes': [2, 'prefer-single'],
        'jsx-a11y/href-no-hash': 'off',
        'react/jsx-boolean-value': 'error',
        'react/self-closing-comp': 2,
        'react/react-in-jsx-scope': 'off',
        'react/sort-comp': [
            1,
            {
                order: [
                    'propTypes',
                    'defaultProps',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ]
            }
        ]
    }
};
