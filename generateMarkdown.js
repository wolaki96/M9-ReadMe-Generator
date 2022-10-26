// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadge (answers) {
    console.log(answers);
    switch(answers[0]) {
      case "Apache":
      
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  
      case 'Boost':
        response = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        return response;
      
      case 'Eclipse':
        response = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
        return response;
      
      case 'IBM':
        response = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
        return response;
      
      case 'MIT':
        response = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        return response;
      
      case 'None':
        response = ''
        return response;
    }
    
  }
  
  module.exports = renderBadge;