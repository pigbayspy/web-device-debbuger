/// <reference types="web-bluetooth" />

export class BluetoothDeviceManager {
  public init() {
    if (!navigator.bluetooth) {
      return false;
    }
    if (!navigator.bluetooth.requestDevice) {
      return false;
    }
    return true;
  }
};
