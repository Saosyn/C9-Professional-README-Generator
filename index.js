const questions = [
  // Name of Title
  {
    type: "input",
    name: "title",
    message: "What's the title of your project?",
    validate: validateInput,
  },
  // Project descriptions
  {
    type: "input",
    name: "description",
    message: "Can you enter a description of the project",
    validate: validateInput,
  },
];
