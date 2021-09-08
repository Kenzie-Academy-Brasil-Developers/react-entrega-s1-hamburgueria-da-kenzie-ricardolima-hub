function Products ({products: {name, category, id, price}, handleClick}) {//Apresenta informações do produto. Button parar add no carrinho
    return (
        <>
            <li>{name}</li>
            <li>{category}</li>
            <li>{price}</li>
            <button onClick={() => handleClick(id)}>Adicionar ao carrinho</button>
        </>
    )
}

export default Products