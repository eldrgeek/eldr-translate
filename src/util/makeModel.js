const makeModel = (srcFile, moduleName) => {
  const fs = require('fs');
  let file = fs.readFileSync(srcFile).toString();
  let modFile = file.replace(/ZModel/gm, moduleName);
  console.log(modFile);
};

makeModel('/src/components/ZModel.jsx', 'myFile');
