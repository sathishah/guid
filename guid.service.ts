class uuid extends Uint16Array {
	
	constructor() {
		super(16);
		/* not v4, just some random bytes */
		window.crypto.getRandomValues(this);
	}
	
	public generateGUID(): string | null {
		let guID = new String();
		for (let i = 0; i < this.length; i++) {
			/*convert uint16 to hex string */
			let hex = this[i].toString(16).toUpperCase();

			/*add zero padding*/
			while (hex.length < 2) {
				hex = String(0).concat(hex);
			}
			guID += hex;

			/* add dashes */
			if (i == 4 || i == 6 || i == 8 || i == 10 || i == 16){
				guID += '-';
			}
		}
		return guID;
	}
}