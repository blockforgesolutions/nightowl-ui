/* eslint-disable @typescript-eslint/no-explicit-any */


export const calculateTotalPrice = (orderItems:any, products:any) => {
    return orderItems.reduce((total:any, item:any) => {
        const product = products.find((p:any) => p.id === item.productId);
        return product ? total + product.price * item.quantity : total;
    }, 0);
};