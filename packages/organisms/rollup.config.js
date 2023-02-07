const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const resolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const analyzer = require('rollup-plugin-analyzer');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const replace = require('@rollup/plugin-replace');

const limitBytes = 100000;

const onAnalysis = ({ bundleSize }) => {
  if (bundleSize < limitBytes) return process.exit(0);
  console.log(`Bundle size exceeds ${limitBytes} bytes: ${bundleSize} bytes`);
  return process.exit(1);
};

module.exports = config => {
  const nxConfig = nrwlConfig(config);
  return {
    ...nxConfig,
    treeshake: {
      moduleSideEffects: false,
    },
    plugins: [
      ...nxConfig.plugins,
      terser({
        compress: true,
      }),
      resolve(),
      peerDepsExternal(),
      commonjs(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      analyzer({
        onAnalysis,
        summaryOnly: true,
      }),
    ],
  };
};
