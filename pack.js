'use strict';

/**
 * Packs this plugin into an npm tarball.
 *
 * Usage:
 *   npm run pack
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const pluginDir = __dirname;
const packageJsonPath = path.join(pluginDir, 'package.json');

if (!fs.existsSync(packageJsonPath)) {
  console.error('package.json not found in', pluginDir);
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

console.log(`Packing ${pkg.name}@${pkg.version} ...`);

try {
  const output = execSync('npm pack', {
    cwd: pluginDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  const tarballName = output.trim().split(/\r?\n/).filter(Boolean).pop();
  const tarballPath = path.join(pluginDir, tarballName);

  console.log(`Created: ${tarballPath}`);
} catch (error) {
  console.error('Failed to pack plugin:');
  console.error(error.stderr || error.message);
  process.exit(1);
}
