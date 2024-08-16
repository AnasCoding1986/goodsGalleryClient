import { useEffect, useState } from "react";

const Display = () => {
    const [goods, setGoods] = useState([]);
    const [selectedGood, setSelectedGood] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchProducts = (page = 1) => {
        fetch(`http://localhost:5000/products?page=${page}&limit=10`)
            .then(res => res.json())
            .then(data => {
                setGoods(data.products);
                setTotalPages(data.totalPages);
                setCurrentPage(data.currentPage);
            });
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

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

    return (
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
                                    <button className="btn" onClick={() => setSelectedGood(good)}>View Details</button>
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
                        <p className="py-2">Production Date: {selectedGood.creationDate}</p>
                        <button className="btn mt-4" onClick={() => setSelectedGood(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Display;
