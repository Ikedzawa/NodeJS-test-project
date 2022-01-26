import path from 'path';

const __dirname = path.resolve();

let DATABASE_DATA = {
  data: 'test data',
  data2: 'test data2'
}

export const getData = (req, res) => {
  console.log(`Middleware data: ${req.middlewareData}`);

  res.status(200).json(DATABASE_DATA);
}

export const downloadFile = (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, 'static', '1.jpg'));
}

export const addData = (req, res) => {
  DATABASE_DATA = {...DATABASE_DATA, ...req.body}
  res.status(201).json(DATABASE_DATA);
}

export const removeData = (req, res) => {
  const keysToDelete = Object.keys(req.body);
  keysToDelete.forEach(key => delete DATABASE_DATA[key]);
  res.status(201).json(DATABASE_DATA);
}
