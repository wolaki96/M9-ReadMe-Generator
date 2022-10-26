const inquirer = require('inquirer');
const fs = require('fs');
let renderBadge = require('./generateMarkdown');

// const { features } = require('process');
const createReadMe= ({title, description, description2, description3, installation, usage, screenshot, collab, license, link, email}) =>
 `# ${title}

 ${renderBadge(license)}
  
## Description
${description} ${description2} ${description3}

## Table of Contents



- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}


## Usage

${usage}

${screenshot}
    

## Credits

${collab}


## License

${license}

## Questions

Please reach out to me on my [GitHub](${link}) or my email at ${email} if you have any questions!



`
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What would you like to name your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation for this project?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Why did you build this project and what did it solve?',
        name: 'description2'
    },
    {
        type: 'input',
        message: 'What did you learn from building this project?',
        name: 'description3',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Please, provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
        
      },
      {
        type: 'input',
        message: 'How do you use this project? Please provide step by step instructions.',
        name: 'usage',
        
      },
      {
        type: 'input',
        message: 'Please insert a screenshot of your product using ![alt text](assets/images/screenshot.png) notation.',
        name: 'screenshot',
        
      },
      {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles, as well as tutorials and videos used.',
        name: 'collab',
        
      },
      {
        type: 'checkbox',
        message: 'What licenses did you use?',
        name: 'license',
        choices:['Apache', 'Boost', 'Eclipse', 'IBM', 'MIT', 'None'],
        
      },
    
      {
        type: 'input',
        message: 'Please link to your GitHub page.',
        name: 'link',
        
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        
      },
  ])
  .then((answers) => {
    // name the file with the name answer
    const readMeFile = createReadMe(answers);

    fs.writeFile('ReadMe.md', readMeFile, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  })