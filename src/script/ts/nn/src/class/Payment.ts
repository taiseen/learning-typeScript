import { HasFormatter } from "../interface/HasFormatter.js";

class Payment implements HasFormatter {

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}

export default Payment;