function CalculateTotalSpentByCategory(Transaction){
    let calTotal = {};
    Transaction.forEach(element => {
        if(calTotal.hasOwnProperty(element.category)){
            calTotal[element.category] = calTotal[element.category] + element.price;
        }else{
            calTotal[element.category] = element.price;
        }
    });
    return calTotal;
}

const Transaction = [
    {
        id: 1,
		timestamp: 5607575700,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
    },
    {   id: 2,
		timestamp: 989856076800000,
		price: 20,
		category: 'Food',
		itemName: 'coffee',
    },
    {id: 3,
		timestamp: 1650,
		price: 30,
		category: 'Food',
		itemName: 'pasta',
    },
    {
        id: 4,
		timestamp: 16560760000,
		price: 40,
		category: 'Food',
		itemName: 'momos',
    },
    {
        id: 5,
		timestamp: 56076800000,
		price: 50,
		category: 'Food',
		itemName: 'burger',
    },
    {
        itemName: 'Disney+',
        category: 'Entertainment',
        price: 1000,
        timestamp: 1661
      },
      {
        itemName: 'Twitter Blue',
        category: 'Career',
        price: 650,
        timestamp: 1662
      }
]