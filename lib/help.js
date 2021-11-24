const program = require("commander");

const helpOptions = () => {
  program.option("-z --zxb", "测试描述");

  program.on("--help", function () {
    console.log("zxb --version");
  });
};

module.exports = helpOptions;
