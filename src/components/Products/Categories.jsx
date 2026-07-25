const Categories = () => {
    const categories = [
        "All Product",
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
                categories.map(category => <button className="btn btn-dash btn-warning w-full ">{category}</button>)
            }
        </div>
    );
};

export default Categories;