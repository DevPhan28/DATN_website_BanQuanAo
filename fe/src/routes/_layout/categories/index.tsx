import { createFileRoute } from "@tanstack/react-router";
import { ChevronRightMini } from "@medusajs/icons";
export const Route = createFileRoute("/_layout/categories/")({
  component: () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="font-bold flex items-center">
          Home <ChevronRightMini className="mx-2" /> Shopping cart
        </h1>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left">PRODUCT</th>
                  <th className="py-3 px-4 border-b text-left">PRICE</th>
                  <th className="py-3 px-4 border-b text-left">QUANTITY</th>
                  <th className="py-3 px-4 border-b text-left">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 border-b flex items-center">
                    <img
                      src="https://placehold.co/50x50"
                      alt="Fresh Strawberries"
                      className="w-12 h-12 mr-4"
                    />
                    Fresh Strawberries
                  </td>
                  <td className="py-4 px-4 border-b">$36.00</td>
                  <td className="py-4 px-4 border-b">
                    <div className="flex items-center">
                      <button className="px-3 py-1 border">-</button>
                      <input
                        type="text"
                        value="1"
                        className="w-12 py-1 text-center border"
                      />
                      <button className="px-3 py-1 border">+</button>
                    </div>
                  </td>
                  <td className="py-4 px-4 border-b">$36.00</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b flex items-center">
                    <img
                      src="https://placehold.co/50x50"
                      alt="Lightweight Jacket"
                      className="w-12 h-12 mr-4"
                    />
                    Lightweight Jacket
                  </td>
                  <td className="py-4 px-4 border-b">$16.00</td>
                  <td className="py-4 px-4 border-b">
                    <div className="flex items-center">
                      <button className="px-3 py-1  border">-</button>
                      <input
                        type="text"
                        value="1"
                        className="w-12 py-1 text-center border"
                      />
                      <button className="px-3 py-1 border">+</button>
                    </div>
                  </td>
                  <td className="py-4 px-4 border-b">$16.00</td>
                </tr>
                {/* Coupon Code Row */}
                <tr>
                  <td colSpan={3} className="py-4 px-4 border-b">
                    <div className="flex justify-between items-center">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        className="border p-2 w-1/3 rounded-full pl-5"
                      />
                      <div className="flex space-x-4 ml-4">
                        <button className="bg-gray-200 p-3 px-6 rounded-full text-sm hover:bg-violet-400 hover:text-white transition duration-300">
                          APPLY COUPON
                        </button>
                        <button className="bg-gray-200 p-3 px-6 rounded-full text-sm hover:bg-violet-400 hover:text-white transition duration-300">
                          UPDATE CART
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 border-b"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals Section */}
          <div className="w-full lg:w-1/4 lg:pl-4 mt-4 lg:mt-0">
            <div className="bg-white p-4 border">
              <h2 className="text-xl font-bold mb-4">CART TOTALS</h2>
              <div className="flex justify-between mb-4">
                <span className="font-bold">Subtotal:</span>
                <span>$79.65</span>
              </div>
              <div className="mb-4">
                <span className="font-bold">Shipping:</span>
                <p className="text-sm text-gray-600">
                  There are no shipping methods available. Please double-check
                  your address, or contact us if you need any help.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">CALCULATE SHIPPING</h3>
                <select className="border p-2 w-full mb-2">
                  <option>Select a country...</option>
                </select>
                <input
                  type="text"
                  placeholder="State / country"
                  className="border p-2 w-full mb-2"
                />
                <input
                  type="text"
                  placeholder="Postcode / Zip"
                  className="border p-2 w-full mb-2"
                />
                <button className="bg-gray-200 p-2 w-full rounded-full  hover:bg-violet-400 hover:text-white transition duration-300">
                  UPDATE TOTALS
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total:</span>
                <span>$79.65</span>
              </div>
              <button className="bg-black text-white p-2 w-full rounded-full  hover:bg-violet-400 hover:text-white transition duration-300">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
