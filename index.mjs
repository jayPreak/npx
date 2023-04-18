import chalk from "chalk";
import boxen from "boxen";

const pink = chalk.hex("#F0B2BC");
// const gitblack = chalk.hex("#0D1117");

const card = `
${chalk.bold("Jayesh Bhushan")} / ${chalk.gray("jaypreak")}
${chalk.gray("Full Stack Developer ")}

${chalk.gray("Email:")} ${pink("jayesh.preak2003@gmail.com")}
${chalk.gray("GitHub:")} ${pink("https://github.com/jaypreak")}
${chalk.gray("LinkedIn:")} ${pink(
  "https://www.linkedin.com/in/jayesh-bhushan-587616200/"
)}
`;

console.log(boxen(card, { padding: 1, margin: 1, borderStyle: "double" }));
