const models = {
  Audi: ['A4', 'A5', 'A6', 'S5', 'A8', 'A3', 'A7', 'RS6', 'A3', 'Q3'],
  Bmw: ['3', '5', '7', '4', 'M2', '8', 'M5', 'M8', '6', '1'],
  Citroen: ['2 CV', 'AMI', 'AX', 'BX', 'C1', 'C2', 'C3', 'C15', 'C5', 'C6'],
  Ferrari: ['208/308', '328', '348', '360', '400', '412', '456', '458', '488', '512 BB'],
  Honda: ['145', '250T', '90 C200', 'Accord', 'Acty', 'Airwave', 'Amaze', 'Ascot', 'Ascot Innova', 'ATC'],
  Jaguar: ['E-Pace', 'E-Type', 'F-Pace', 'F-Type', 'F-Type SVR', 'I-Pace', 'Mark 2', 'S-Type', 'X-Type', 'XE'],
  Mazda: ['1000', '121', '1300', '2', '3', '3 MPS', '323', '5', '6', '626'],
  Chery: ['Arrizo 6', 'Arrizo 3', 'Tiggo 5', 'Tiggo 7', 'Arrizo 5', 'Arrizo GX', 'Arrizo EX', 'Arrizo 5e 450', 'Tiggo 5x', 'Arrizo 5e'],
  Dodge: ['Durango SRT Hellcat', 'Challenger SRT Demon', 'Viper', 'Challenger', 'Durango', 'Durango R/T', 'Charger', 'Challenger SRT', 'Charger Daytona', 'Durango Citadel (WD)'],
  Hyundai: ['Tucson', 'Tucson 2022', 'Kona Night', 'Santa Fe Active X', 'i10 N', 'Palisade', 'HB20', 'Elantra', 'Xcient', 'Xcient Fuel Cell'],
};

type ModelsKeyT = keyof typeof models;

const brandArr: Array<ModelsKeyT> = [
  'Audi', 'Bmw', 'Citroen',
  'Ferrari', 'Honda', 'Jaguar',
  'Mazda', 'Chery', 'Dodge',
  'Hyundai'];

const NameRandom = (): string => {
  const newBrandNameIndex: number = Math.floor(Math.random() * brandArr.length);
  const newModelNameIndex: number = Math.floor(
    Math.random() * models[brandArr[newBrandNameIndex]].length,
  );
  const newName = `${brandArr[newBrandNameIndex]} ${models[brandArr[newBrandNameIndex]][newModelNameIndex]}`;
  return newName;
};

export default NameRandom;
