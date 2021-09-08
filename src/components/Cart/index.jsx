function Cart ({currentSale}) {
    return (
        <>
            {currentSale.map((item, index) => {
                return (
                    <>
                        <li key={index}>{item.name}</li>
                        <li key={index}>{item.category}</li>
                        <li key={index}>{item.price}</li>
                    </>
                )
            })}
        </>
    )
}

export default Cart