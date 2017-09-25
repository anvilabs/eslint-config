const {spawnSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const rootPkg = require('../package.json');

const isDirectory = source => fs.lstatSync(source).isDirectory();
const pkgDirsPath = path.resolve(__dirname, '../packages');
const rootPath = path.resolve(__dirname, '..');

const syncVersion = () => {
  /* eslint-disable no-console, unicorn/no-process-exit */
  if (!('CI' in process.env)) {
    console.error('This script must be run on Travis CI');
    process.exit(1);
  }

  const {version} = rootPkg;
  if (!version) {
    console.error('`version` field not set in root package.json');
    process.exit(1);
  }

  const pkgDirPaths = fs
    .readdirSync(pkgDirsPath)
    .map(name => path.join(pkgDirsPath, name))
    .filter(isDirectory);

  pkgDirPaths.forEach(pkgDirPath => {
    const pkgPath = path.join(pkgDirPath, './package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath));

    fs.writeFileSync(
      pkgPath,
      JSON.stringify(
        {
          ...pkg,
          version,
        },
        null,
        2 // eslint-disable-line no-magic-numbers
      )
    );

    console.log(`Wrote version ${version} to ${pkgPath}`);

    spawnSync(
      'cp',
      [
        '-r',
        path.resolve(rootPath, './.git'),
        path.resolve(pkgDirPath, './.git'),
      ],
      {stdio: 'inherit'}
    );
    spawnSync('npm', ['publish', pkgDirPath], {stdio: 'inherit'});
  });
  /* eslint-enable no-console, unicorn/no-process-exit */
};

syncVersion();
