import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create the shop context (for cart and wishlist)
const ShopContext = createContext();

// Initial state
const initialState = {
    cartItems: [],
    totalItems: 0,
    totalAmount: 0,
    wishlistItems: [],
    totalWishlistItems: 0
};

// Actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
const CLEAR_WISHLIST = 'CLEAR_WISHLIST';

// Reducer function
const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { product, quantity = 1 } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === product.id);

            if (existingItemIndex !== -1) {
                // Item already exists in cart, update quantity
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex] = {
                    ...updatedCartItems[existingItemIndex],
                    quantity: updatedCartItems[existingItemIndex].quantity + quantity
                };

                return calculateCartTotals({
                    ...state,
                    cartItems: updatedCartItems
                });
            } else {
                // Add new item to cart
                const newItem = {
                    id: product.id,
                    name: product.name,
                    price: product.salePrice || product.price,
                    image: product.image,
                    quantity
                };

                return calculateCartTotals({
                    ...state,
                    cartItems: [...state.cartItems, newItem]
                });
            }
        }

        case REMOVE_FROM_CART: {
            const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
            return calculateCartTotals({
                ...state,
                cartItems: updatedCartItems
            });
        }

        case UPDATE_QUANTITY: {
            const { id, quantity } = action.payload;
            if (quantity <= 0) {
                return state;
            }

            const updatedCartItems = state.cartItems.map(item => 
                item.id === id ? { ...item, quantity } : item
            );

            return calculateCartTotals({
                ...state,
                cartItems: updatedCartItems
            });
        }

        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
                totalItems: 0,
                totalAmount: 0
            };

        case ADD_TO_WISHLIST: {
            const product = action.payload;
            // Check if item already exists in wishlist
            const existingItem = state.wishlistItems.find(item => item.id === product.id);
            
            if (existingItem) {
                // Item already in wishlist, don't add it again
                return state;
            } else {
                // Add new item to wishlist
                const newItem = {
                    id: product.id,
                    name: product.name,
                    price: product.salePrice || product.price,
                    image: product.image
                };
                
                const updatedWishlistItems = [...state.wishlistItems, newItem];
                
                return {
                    ...state,
                    wishlistItems: updatedWishlistItems,
                    totalWishlistItems: updatedWishlistItems.length
                };
            }
        }

        case REMOVE_FROM_WISHLIST: {
            const updatedWishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
            
            return {
                ...state,
                wishlistItems: updatedWishlistItems,
                totalWishlistItems: updatedWishlistItems.length
            };
        }

        case CLEAR_WISHLIST:
            return {
                ...state,
                wishlistItems: [],
                totalWishlistItems: 0
            };

        default:
            return state;
    }
};

// Helper function to calculate cart totals
const calculateCartTotals = (state) => {
    const totalItems = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return {
        ...state,
        totalItems,
        totalAmount
    };
};

// Provider component
export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);

    // Load shop state from localStorage on initial render
    useEffect(() => {
        const savedState = localStorage.getItem('shopState');
        if (savedState) {
            try {
                const parsedState = JSON.parse(savedState);
                Object.keys(initialState).forEach(key => {
                    if (!(key in parsedState)) {
                        parsedState[key] = initialState[key];
                    }
                });
                
                // Recalculate totals to ensure consistency
                const recalculatedState = calculateCartTotals(parsedState);
                dispatch({ type: 'REPLACE_STATE', payload: recalculatedState });
            } catch (error) {
                console.error('Failed to parse shop state from localStorage:', error);
            }
        }
    }, []);

    // Save shop state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('shopState', JSON.stringify(state));
    }, [state]);

    // Cart action creators
    const addToCart = (product, quantity = 1) => {
        dispatch({
            type: ADD_TO_CART,
            payload: { product, quantity }
        });
    };

    const removeFromCart = (productId) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productId
        });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({
            type: UPDATE_QUANTITY,
            payload: { id: productId, quantity }
        });
    };

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    // Wishlist action creators
    const addToWishlist = (product) => {
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: product
        });
    };

    const removeFromWishlist = (productId) => {
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: productId
        });
    };

    const clearWishlist = () => {
        dispatch({ type: CLEAR_WISHLIST });
    };

    return (
        <ShopContext.Provider value={{
            ...state,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            addToWishlist,
            removeFromWishlist,
            clearWishlist
        }}>
            {children}
        </ShopContext.Provider>
    );
};

// Custom hook to use the shop context
export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
};
