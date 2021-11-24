const fs = require("fs");
const path = require("path");

const log = require("./log");
const { cwd } = require("process");

const copy = async (admin) => {
  return new Promise((resolve) => {
    let src = path.join(__dirname, `../../template/${admin}`);
    let dst = path.resolve(cwd(), `${admin}`);
    fs.mkdir(dst, function () {
      copyDir(src, dst);
      resolve();
    });
  });
};

const isDirExist = async (name) => {
  return new Promise((resolve) => {
    const dst = path.resolve(cwd(), `${name}`);
    if (fs.existsSync(dst)) {
      log.error("项目目录已存在");
      return;
    } else {
      resolve();
    }
  });
};

const copyDir = function (src, dst) {
  // 读取目录中的所有文件/目录
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function (pat) {
      const _src = path.join(src, pat);
      const _dst = path.join(dst, pat);
      let readable;
      let writable;
      fs.stat(_src, function (err, st) {
        if (err) {
          throw err;
        }
        // 判断是否为文件
        if (st.isFile()) {
          // 允许的后缀才可以被复制
          // 创建读取流
          readable = fs.createReadStream(_src);
          // 创建写入流
          writable = fs.createWriteStream(_dst);
          // 通过管道来传输流
          readable.pipe(writable);
        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
          exists(_src, _dst, copyDir);
        }
      });
    });
  });
};
const exists = function (src, dst, callback) {
  // 如果路径存在，则返回 true，否则返回 false。
  if (fs.existsSync(dst)) {
    callback(src, dst);
  } else {
    fs.mkdir(dst, function () {
      callback(src, dst);
    });
  }
};

module.exports = { copy, isDirExist };
