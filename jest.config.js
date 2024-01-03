export const preset = '@vue/cli-plugin-unit-jest/presets/typescript-and-babel';
export const transform = {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
};