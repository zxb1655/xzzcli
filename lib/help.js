const program = require("commander");

const helpOptions = () => {
  program.option("- --xzz", "测试描述");

  program.on("--help", function () {
    console.log("zxb --version");
  });
};

module.exports = helpOptions;
