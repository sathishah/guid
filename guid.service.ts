export class GuidService {

    public getGUID: String | any;

    constructor() {
        this.getGUID = (typeof (window.crypto) != 'undefined' &&
            typeof (window.crypto.getRandomValues) != 'undefined') ?
            this.generateGUIDCrypto() :
            this.generateGUIDRandom();
        return this.getGUID;
    }

    public generateGUIDCrypto(): String | null {
        let buffer = new Uint16Array(8);

        window.crypto.getRandomValues(buffer);

        let str = function (number: any) {
            let retStr = number.toString(16);
            while (retStr.length < 4) {
                retStr = "0" + retStr;
            }
            return retStr;
        };

        return (str(buffer[0]) + str(buffer[1]) + "-" + str(buffer[2]) + "-" + str(buffer[3]) + "-" + str(buffer[4]) + "-" + str(buffer[5]) + str(buffer[6]) + str(buffer[7]));
    }

    public generateGUIDRandom(): String | null {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
