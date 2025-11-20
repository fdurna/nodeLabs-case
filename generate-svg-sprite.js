const SVGSpriter = require('svg-sprite');
var requireContext = require('require-context');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const prettier = require('prettier');

const svgBasePath = './src/assets/icons';
const destPath = './src/components/svg-icon';
const svgIcons = requireContext(path.resolve(svgBasePath), true, /.*\.svg$/);

const spriteConfig = {
    dest: svgBasePath,
    mode: {
        dest: svgBasePath,
        inline: true,
        symbol: {
            dest: path.resolve(destPath),
            sprite: 'sprite.svg',
        },
    },
};

const spriter = new SVGSpriter(spriteConfig);
svgIcons.keys().forEach((svgName) => {
    const svgPath = path.resolve(svgBasePath, svgName);
    spriter.add(svgPath, null, fs.readFileSync(svgPath, { encoding: 'utf-8' }));
});

const svgNames = svgIcons.keys().map((svg) => `"${svg.replace('.svg', '')}"`);

prettier
    .resolveConfig(path.resolve('./.prettierrc.json'))
    .then((configFile) => {
        fs.writeFileSync(
            path.resolve(`${destPath}/icon-types.ts`),
            prettier.format(
                `export type IconType = ${svgNames.join(
                    ' | '
                )}; \n export const IconTypeList: IconType[] = [${svgNames.join(
                    ' , '
                )}];`,
                configFile
            )
        );
    });

spriter.compile(function (error, result) {
    for (var mode in result) {
        for (var resource in result[mode]) {
            mkdirp.sync(path.dirname(result[mode][resource].path));

            let svgContent = result[mode][resource].contents
                .toString()
                .replace('<?xml version="1.0" encoding="utf-8"?>', '')
                .replace('xmlns:xlink="http://www.w3.org/1999/xlink"', '')
                .replace(/fill-rule/g, 'fillRule')
                .replace(/stroke-width/g, 'strokeWidth')
                .replace(/stroke-linecap/g, 'strokeLinecap')
                .replace(/stop-opacity/g, 'stopOpacity')
                .replace(/fill-opacity/g, 'fillOpacity')
                .replace(/stop-color/g, 'stopColor')
                .replace(/clip-path/g, 'clipPath')
                .replace(/clip-rule/g, 'clipRule')
                .replace(/none/g, 'currentColor')
                .replace(/#3B3C3D/g, 'currentColor')
                .replace(/#595A5B/g, 'currentColor');

            fs.writeFileSync(
                path.resolve(`${destPath}/SpriteSVG.tsx`),
                prettier.format(
                    `const SpriteSVG = () => <div className="app-svg-sprite">${svgContent}</div>; export default SpriteSVG;`,
                    {
                        parser: 'typescript',
                        trailingComma: 'es5',
                        tabWidth: 4,
                        singleQuote: true,
                        printWidth: 80,
                        bracketSpacing: true,
                    }
                )
            );
        }
    }
});
