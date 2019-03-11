const {
  Client,
  Variables,
  logger
} = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
//  - 'asyncResponseTimeout': long polling timeout (then a new request will be issued)
const config = {
  baseUrl: "http://localhost:8080/engine-rest",
  use: logger,
  asyncResponseTimeout: 10000
};

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'charge-card'
client.subscribe("check-cpu-usage", async function({ task, taskService }) {
  // Put your business logic here

  const processVariables = new Variables();
  const taskVariables = new Variables();

  console.log("Checking CPU");

  const usagePercentage = 99;
  const highUsage = usagePercentage > 80;
  console.log("highUsage: " + highUsage);

  processVariables.set("highUsage", highUsage);

  // Complete the task
  await taskService.complete(task, processVariables, taskVariables);
});

client.subscribe("send-email", async function({ task, taskService }) {
  // Put your business logic here

  console.log("Sending email to Admins about high CPU usage");

  // Complete the task
  await taskService.complete(task);
});
