import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Display = () => {
    const [goods, setGoods] = useState([]);
    const [selectedGood, setSelectedGood] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [priceSort, setPriceSort] = useState("");
    const [dateSort, setDateSort] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTriggered, setSearchTriggered] = useState(false);

    // Function to fetch products
    const fetchProducts = (page = 1, priceSortOption = "", dateSortOption = "", searchQuery = "") => {
        console.log(`Fetching products with search: ${searchQuery}`); // Debugging statement
        fetch(`http://localhost:5000/products?page=${page}&limit=10&search=${encodeURIComponent(searchQuery)}`)
            .then(res => res.json())
            .then(data => {
                let sortedGoods = data.products;

                // Sort based on price sort option
                if (priceSortOption === "low-to-high") {
                    sortedGoods.sort((a, b) => a.price - b.price);
                } else if (priceSortOption === "high-to-low") {
                    sortedGoods.sort((a, b) => b.price - a.price);
                }

                // Sort based on date sort option after price sorting
                if (dateSortOption === "newest-first") {
                    sortedGoods.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
                } else if (dateSortOption === "oldest-first") {
                    sortedGoods.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate));
                }

                setGoods(sortedGoods);
                setTotalPages(data.totalPages);
                setCurrentPage(data.currentPage);
            })
            .catch(error => console.error("Error fetching products:", error)); // Error handling
    };

    useEffect(() => {
        fetchProducts(currentPage, priceSort, dateSort, searchTerm);
    }, [currentPage, priceSort, dateSort, searchTerm]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePriceChange = (event) => {
        setPriceSort(event.target.value);
    };

    const handleDateChange = (event) => {
        setDateSort(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        setSearchTriggered(true);
        fetchProducts(currentPage, priceSort, dateSort, searchTerm);
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-500">
                {/* Search by product name */}
                <div className="border-[1px] border-dotted rounded-md border-white p-4">
                    <label htmlFor="">Search by product name</label>
                    <br />
                    <div className="flex mt-1">
                        <input
                            className="p-[4px] flex-grow"
                            type="text"
                            placeholder="Product name"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            required={true}
                        />
                        <button
                            className="bg-slate-300 p-2 text-red-950 flex-shrink-0"
                            onClick={handleSearchClick}
                        >
                            <CiSearch />
                        </button>
                    </div>
                </div>

                {/* Search by Category */}
                <div className="border-[1px] border-dotted rounded-md border-white p-4">
                    <label htmlFor="">Search by Category</label>
                    <br />
                    <div className="flex mt-1">
                        <input
                            className="p-[4px] flex-grow"
                            type="text"
                            placeholder="Category"
                            required={true}
                        />
                        <button className="bg-slate-300 p-2 text-red-950 flex-shrink-0">
                            <CiSearch />
                        </button>
                    </div>
                </div>

                {/* Sort by price */}
                <div className="border-[1px] border-dotted rounded-md border-white p-4">
                    <label htmlFor="price-sort" className="block font-semibold">Sort by price</label>
                    <br />
                    <div className="mt-2">
                        <select
                            id="price-sort"
                            onChange={handlePriceChange}
                            name="price-sort"
                            className="p-2 bg-slate-300 text-red-950 border border-gray-300 rounded-md"
                        >
                            <option value="" disabled selected>Select a sort option</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Sort by Date */}
                <div className="border-[1px] border-dotted rounded-md border-white p-4">
                    <label htmlFor="date-sort" className="block font-semibold">Sort by Date</label>
                    <br />
                    <div className="mt-2">
                        <select
                            id="date-sort"
                            onChange={handleDateChange}
                            name="date-sort"
                            className="p-2 bg-slate-300 text-red-950 border border-gray-300 rounded-md"
                        >
                            <option value="" disabled selected>Select a sort option</option>
                            <option value="newest-first">Newest First</option>
                            <option value="oldest-first">Oldest First</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="py-10">
                <h3 className="text-center text-3xl font-semibold">Different Products Here</h3>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {goods.map(good => (
                            <div key={good.id} className="card bg-base-100 w-96 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={good.productImage}
                                        alt={good.productName}
                                        className="rounded-xl w-[250px] h-[250px]"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{good.productName}</h2>
                                    <p>{good.description}</p>
                                    <div className="card-actions">
                                        <button className="btn" onClick={() => setSelectedGood(good)}>
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePreviousPage}
                        className="btn"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="mx-4">Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        className="btn"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>

                {selectedGood && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-8 rounded-lg max-w-2xl">
                            <h1 className="text-5xl font-bold mb-4">{selectedGood.productName}</h1>
                            <img
                                src={selectedGood.productImage}
                                className="w-[150px] h-[150px] rounded-lg shadow-2xl mb-4"
                            />
                            <p className="py-2">Description: {selectedGood.description}</p>
                            <p className="py-2">Price: {selectedGood.price}</p>
                            <p className="py-2">Category: {selectedGood.category}</p>
                            <p className="py-2">Ratings: {selectedGood.ratings}</p>
                            <p className="py-2">Quantity: {selectedGood.quantity}</p>
                            <button className="btn mt-4" onClick={() => setSelectedGood(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Display;
