export function formatNumberWithDots(number) {
    // Преобразовать число в строку
    const numberString = number.toString();
  
    // Разделить строку на группы по три цифры, начиная с конца
    const groups = [];
    for (let i = numberString.length; i > 0; i -= 3) {
      groups.unshift(numberString.slice(Math.max(i - 3, 0), i));
    }
  
    // Соединить группы точками
    const formattedNumber = groups.join('.');
  
    return formattedNumber;
  }
  
  // Пример использования
  const originalNumber = 1234567;
  const formattedNumber = formatNumberWithDots(originalNumber);
  console.log(formattedNumber); // Вывод: "1.234.567"
  