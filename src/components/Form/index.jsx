function Form ({showProducts, filteredProducts, setFilteredProducts}) {
    return (
        <>
            <input type="text" value={filteredProducts} onChange={(e)=>setFilteredProducts(e.target.value)}/>
            <button onClick={() => showProducts(filteredProducts)}>Pesquisar</button>
        </>
    )
}

export default Form