module.exports = {
  '*.{ts, tsx}': () => ['prettier --write', 'tslint --fix', 'git add']
}
