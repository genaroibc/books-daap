const TaskContract = artifacts.require("BookContract")

module.exports = deployer => {
  deployer.deploy(TaskContract)
}
