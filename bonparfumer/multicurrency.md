## Multicurrency

The task was to change the currency format to cut of the trailing zeroes.

Solution: The first fix was after the bold support sent a link that pointed to an external javascript file that handled everything that had to do with currency formats. A new asset called multicurrency.js was created, and the entire contents on the external resource copied and pasted. After this was done, multicurrency.js was searched, and then it was discovered that simply changing `money_with_currency_format` to `money_format` in the `formatMoney` function worked.