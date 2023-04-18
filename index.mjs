import chalk from "chalk";
import boxen from "boxen";

const card = `
${chalk.bold("Jayesh Bhushan")} / ${chalk.gray("jaypreak")}
${chalk.gray("Full Stack Developer ")}

${chalk.gray("Email:")} ${chalk.pink("jayesh.preak2003@gmail.com")}
${chalk.gray("GitHub:")} ${chalk.cyan("https://github.com/jaypreak")}
${chalk.gray("LinkedIn:")} ${chalk.cyan(
  "https://www.linkedin.com/in/jayesh-bhushan-587616200/"
)}
`;

console.log(boxen(card, { padding: 1, margin: 1, borderStyle: "double" }));
