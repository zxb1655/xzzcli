const inquirer = require("inquirer");
const { prompt } = require("enquirer");

const command = () => {
  return new Promise((res) => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "请选择模版",
          choices: ["uniapp", "vue2-h5", "vue2-admin"],
        },
        {
          type: "list",
          name: "local",
          message: "从本地复制还是git拉取",
          choices: ["local", "git"],
        },
        {
          type: "list",
          name: "comd",
          message: "请选择安装命令",
          choices: ["npm", "cnpm", "yarn"],
        },
      ])
      .then(async (answers) => {
        const response = await prompt({
          type: "input",
          name: "name",
          initial: answers.name,
          message: "请输入项目名称",
        });
        answers.name = response.name;
        res(answers);
      });
  });
};

module.exports = command;
