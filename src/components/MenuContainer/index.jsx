import Products from "../Product"

function MenuContainer ({products, handleClick}) { //Renderizar a lista de produtos;
    return (
        <div>
            <ul>
                {products.map((item, index) => {
                    return <Products key={index} products={item} handleClick={handleClick} />
                })}
            </ul>
        </div>
    )
}

export default MenuContainer