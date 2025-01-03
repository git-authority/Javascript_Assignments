function calculateTotalSpentByCategory(transactions) {
    let output = transactions.reduce((acc, transaction) => {

        let existingCategory = acc.find(item => item.category === transaction.category);

        if (existingCategory) {

            existingCategory.totalSpent += transaction.price;
        } else {

            acc.push({
                category: transaction.category,
                totalSpent: transaction.price
            });
        }

        return acc;
    }, []);

    return output;
  }