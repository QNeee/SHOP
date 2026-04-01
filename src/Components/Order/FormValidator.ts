import type { Card } from "../../types";


export class FormValidator {
    static #cardLength = 16;
    static fields = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        name: /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]+$/,
        numbers: /^\d+$/,
        cardName: /^[A-Za-zА-Яа-яІіЇїЄєҐґ'-]+ [A-Za-zА-Яа-яІіЇїЄєҐґ'-]+$/
    }
    static ValidateField = (field: keyof typeof this.fields, value: string, length: number = 0): boolean => {
        const trimmedValue = value.trim();
        if (trimmedValue.length < length) return false;
        return this.fields[field].test(trimmedValue);
    }
    static deleteSpaces = (str: string): string => {
        return str.replace(/\s/g, '');
    }
    static isCardDuplicate = (cardNumber: string, cardNumbers: Card[]): boolean => {
        const cardStr = this.deleteSpaces(cardNumber);
        const idx = cardNumbers.findIndex(item => this.deleteSpaces(item.cardNumber) === cardStr);
        if (idx === -1) return false;
        return true;
    }
    static ValidateCard = (cardNumber: string, cardNumbers: Card[]): boolean => {
        const cardStr = this.deleteSpaces(cardNumber);
        if (cardStr.length < this.#cardLength || cardStr.length > this.#cardLength) return false;
        if (this.isCardDuplicate(cardNumber, cardNumbers)) return false;
        return true;
    }
}