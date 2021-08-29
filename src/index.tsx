import { NativeModules } from 'react-native';

type JsiExampleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { JsiExample } = NativeModules;

export default JsiExample as JsiExampleType;
