const Categories = ({selectedCategory,setSelectedCategory,}) => {
    const categories = [
        "All Products",
        "Laptops",
        "Phones",
        "Accessories",
        "Smart Watches",
        "MacBook",
        "iPhone"
    ];
    return (
        <div className="space-y-3">
            {
                categories.map(category => <button onClick={() => setSelectedCategory(category)} className="btn btn-dash btn-warning w-full">{category}</button>)
            }
        </div>
    );
};

export default Categories;