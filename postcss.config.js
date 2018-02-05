const postcss = require('postcss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-sprites')({
      retina: true,
      hooks: {
        onUpdateRule: function(rule, token, image) {
          let backgroundSizeX = (image.spriteWidth / image.coords.width) * 100;
          let backgroundSizeY = (image.spriteHeight / image.coords.height) * 100;
          let backgroundPositionX = (image.coords.x / (image.spriteWidth - image.coords.width)) * 100;
          let backgroundPositionY = (image.coords.y / (image.spriteHeight - image.coords.height)) * 100;

          backgroundSizeX = isNaN(backgroundSizeX) ? 0 : backgroundSizeX;
          backgroundSizeY = isNaN(backgroundSizeY) ? 0 : backgroundSizeY;
          backgroundPositionX = isNaN(backgroundPositionX) ? 0 : backgroundPositionX;
          backgroundPositionY = isNaN(backgroundPositionY) ? 0 : backgroundPositionY;

          const backgroundImage = postcss.decl({
            prop: 'background-image',
            value: 'url(' + image.spriteUrl + ')'
          });

          const backgroundSize = postcss.decl({
            prop: 'background-size',
            value: backgroundSizeX + '% ' + backgroundSizeY + '%'
          });

          const backgroundPosition = postcss.decl({
            prop: 'background-position',
            value: backgroundPositionX + '% ' + backgroundPositionY + '%'
          });

          rule.insertAfter(token, backgroundImage);
          rule.insertAfter(backgroundImage, backgroundPosition);
          rule.insertAfter(backgroundPosition, backgroundSize);
        }
      }
    }),
  ],
};
