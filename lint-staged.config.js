module.exports = {
  '*.{less,md,json}': 'prettier --write',
  '*.{js,jsx}': ['prettier --write', 'eslint . --fix'],
  '*.ts?(x)': ['prettier --parser=typescript --write', 'eslint . --fix'],
};
