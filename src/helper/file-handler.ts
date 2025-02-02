import * as path from 'path';
import * as uuid from 'uuid';
import * as fs from 'fs';

export const editFileName = (req, file, callback) => {
  // const name = file.originalname.split('.')[0];
  const fileExtName = path.extname(file.originalname);
  const user = req.user;
  let instituteName;
  console.log(req.query, 'apa req query nya ya?');
  console.log(user, 'apa user nya ya?');
  if (req.query.instituteName) {
    instituteName = req.query.instituteName.replace(/ /gi, '_');
  } else {
    instituteName = user?.institutionName?.replace(/ /gi, '_');
  }
  console.log(instituteName, 'ini dia');

  const dir = `./uploads/${instituteName}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  callback(
    null,
    `${instituteName}/${instituteName}_${uuid.v4()}${fileExtName}`,
  );
};

export const editFileNameRegister = (req, file, callback) => {
  const fileExtName = path.extname(file.originalname);
  const dir = `./uploads/profile`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  callback(null, `profile/profile_${req.query.name}${fileExtName}`);
};
