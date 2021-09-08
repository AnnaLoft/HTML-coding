import * as path from 'path'
import * as uuid from 'uuid'

class fileService {

  saveFile(file, name) {
    try {
      const fileName =  ‘${name}.png’;
      const filePath = path.resolve('static', fileName);
      file.picture.mv(filePath);
      return fileName;

    } catch (error) {
      console.log(error);
    }
  }
}

export default new fileService();
