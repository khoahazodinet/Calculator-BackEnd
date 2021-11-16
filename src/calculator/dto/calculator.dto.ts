
export interface ICalculatorRequestDto{
    bill: string;
    people: string;
    tipPercent: string;
}

export interface ICalculatorResponseDto{
    result: boolean;
    amount?: string;
    total?: string;
    message?: string;
}
