const ora = require("ora");

let spinner;

const loading = (text) => {
  spinner = ora(text).start();
};

const stopLoading = () => {
  spinner.stop();
};

module.exports = {
  loading,
  stopLoading,
};
