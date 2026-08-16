export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  
  switch (skillID) {
    case 'python': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg';
    case 'sql': 
      // Using the standard MySQL logo as a clean representation for SQL
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg';
    case 'c++': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg';
    case 'javascript': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
    case 'html': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg';
    case 'css': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg';
    case 'tensorflow': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg';
    case 'opencv': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg';
    case 'pandas': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg';
    case 'numpy': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg';
    case 'power bi': 
      return 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg';
    case 'git': 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg';
    default: 
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg';
  }
}