/*  Custom error class for handling negative numbers */
class NegativeNumberError extends Error {
  negativeNumbers: number[];

  constructor(negativeNumbers: number[]) {
    super(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    this.name = "NegativeNumberError";
    this.negativeNumbers = negativeNumbers;
  }
}

/*  Function to add numbers from a string input */
function add(numbers: string): number {

  /*  Return 0 if the input string is empty */
  if (!numbers) 
        return 0;

  /*  Default delimiter is comma or newline */
  const defaultDelimiter: RegExp = /,|\n/;
  let delimiter: RegExp = defaultDelimiter;

  /* Check if the input starts with a custom delimiter definition */
  if (numbers.startsWith("//")) 
    {
    /* Find the end index of the delimiter definition */
    const delimiterEndIndex: number = numbers.indexOf("\n");

    /* Create a RegExp for the custom delimiter definition */
    delimiter = new RegExp(
      numbers
        .substring(2, delimiterEndIndex)
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );

    /* Remove the delimiter definition from the input string */
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  /* Split the remaining string by the delimiter and convert to numbers */
  const numberArray: number[] = numbers.split(delimiter).map(Number);

  /* Filter out negative numbers */
  const negativeNumbers: number[] = numberArray.filter((num) => num < 0);

  if (negativeNumbers.length) {
    throw new NegativeNumberError(negativeNumbers);
  }
  
  /*  Calculate and return the sum of all numbers */
  return numberArray.reduce((sum, num) => sum + num, 0);
}

export { add };
