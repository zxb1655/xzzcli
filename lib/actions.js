const { promisify } = require("util");

const downloadRepo = promisify(require("download-git-repo"));
const open = require("open");
const { copy, isDirExist } = require("./utils/file");

const log = require("./utils/log");
const terminal = require("./utils/terminal");
const { loading, stopLoading } = require("./utils/loading");

const { cwd } = require("process");

const createProject = async (project) => {
  let { name, comd, local } = project;

  // 判断创建目录是否存在
  await isDirExist(name);

  log.hint(`开始创建${name}项目~`);

  if (local === "git") {
    // clone项目从仓库
    loading(log.hint(`正在拉取模版--`));
    const vueGitRepo = `direct:https://github.com/zxb1655/${name}#main`;
    await downloadRepo(vueGitRepo, name, { clone: true });
    stopLoading();
  } else {
    //本地复制template
    await copy(name);
  }

  log.hint(`创建成功~`);
  // log.hint(`开始install~`);
  // loading(log.hint(`正在install--`));

  // // 执行终端命令npm install
  // if (comd == "npm") {
  //   comd = process.platform === "win32" ? "npm.cmd" : "npm";
  // }
  // await terminal.spawn(comd, ["install"], { cwd: `./${name}` });

  // stopLoading();

  // 打开浏览器
  // open("http://localhost:8080");

  // 运行项目
  // await terminal.spawn(comd, ["run", "serve"], { cwd: `./${name}` });
};

module.exports = {
  createProject,
};
