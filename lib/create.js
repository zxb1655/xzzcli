const program = require("commander");

const { createProject } = require("./actions");
const command = require("./command");

const createCommands = () => {
  // 创建项目指令
  program
    .command("create")
    .description("初始化创建项目")
    .action(async () => {
      const answers = await command();
      createProject(answers);
    });
};

module.exports = createCommands;
