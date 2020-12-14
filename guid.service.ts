export class GuidService {

    public getGUID: String | any;

    constructor() {
        this.getGUID = (typeof (window.crypto) != 'undefined' &&
            typeof (window.crypto.getRandomValues) != 'undefined') ?
            this.generateGUIDCrypto() :
            this.generateGUIDRandom();
    }

    public getGuid(): String | null {
        return this.getGUID;
    }

    public getString(number: any) {
        let retStr = number.toString(16);
        while (retStr.length < 4) {
            retStr = "0" + retStr;
        }
        return retStr;
    }

    public generateGUIDCrypto(): String | null {
        let buffer = new Uint16Array(8);

        window.crypto.getRandomValues(buffer);

        return (this.getString(buffer[0]) + this.getString(buffer[1]) + "-" + this.getString(buffer[2]) + "-" + this.getString(buffer[3]) + "-" + this.getString(buffer[4]) + "-" + this.getString(buffer[5]) + this.getString(buffer[6]) + this.getString(buffer[7]));
    }

    public generateGUIDRandom(): String | null {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}