import React from 'react';
import { useParams } from 'react-router-dom';
import { Package, Truck, CheckCircle } from 'lucide-react';

export default function TrackOrder() {
  const { orderId } = useParams<{ orderId: string }>();

  // Calculate dates for the tracking timeline
  const orderDate = new Date();
  const processingDate = new Date(orderDate);
  processingDate.setDate(orderDate.getDate() + 1);
  const shippingDate = new Date(orderDate);
  shippingDate.setDate(orderDate.getDate() + 3);
  const deliveryDate = new Date(orderDate);
  deliveryDate.setDate(orderDate.getDate() + 7);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const currentStep = 1; // This would normally be fetched from an API

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Track Your Order</h1>
            <p className="text-gray-600">Order #{orderId}</p>
          </div>

          {/* Tracking Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

            {/* Order Placed */}
            <div className="relative flex items-center mb-8">
              <div className="flex-1 text-right pr-8">
                <h3 className="font-semibold">Order Placed</h3>
                <p className="text-sm text-gray-600">{formatDate(orderDate)}</p>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? 'bg-green-500' : 'bg-gray-200'
                }`}
              >
                <Package
                  className={`h-4 w-4 ${currentStep >= 1 ? 'text-white' : 'text-gray-400'}`}
                />
              </div>
              <div className="flex-1 pl-8">
                <p className="text-sm text-gray-600">Your order has been confirmed</p>
              </div>
            </div>

            {/* Processing */}
            <div className="relative flex items-center mb-8">
              <div className="flex-1 text-right pr-8">
                <h3 className="font-semibold">Processing</h3>
                <p className="text-sm text-gray-600">{formatDate(processingDate)}</p>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-green-500' : 'bg-gray-200'
                }`}
              >
                <Package
                  className={`h-4 w-4 ${currentStep >= 2 ? 'text-white' : 'text-gray-400'}`}
                />
              </div>
              <div className="flex-1 pl-8">
                <p className="text-sm text-gray-600">Your order is being processed</p>
              </div>
            </div>

            {/* Shipped */}
            <div className="relative flex items-center mb-8">
              <div className="flex-1 text-right pr-8">
                <h3 className="font-semibold">Shipped</h3>
                <p className="text-sm text-gray-600">{formatDate(shippingDate)}</p>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? 'bg-green-500' : 'bg-gray-200'
                }`}
              >
                <Truck
                  className={`h-4 w-4 ${currentStep >= 3 ? 'text-white' : 'text-gray-400'}`}
                />
              </div>
              <div className="flex-1 pl-8">
                <p className="text-sm text-gray-600">Your order is on the way</p>
              </div>
            </div>

            {/* Delivered */}
            <div className="relative flex items-center">
              <div className="flex-1 text-right pr-8">
                <h3 className="font-semibold">Delivered</h3>
                <p className="text-sm text-gray-600">{formatDate(deliveryDate)}</p>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= 4 ? 'bg-green-500' : 'bg-gray-200'
                }`}
              >
                <CheckCircle
                  className={`h-4 w-4 ${currentStep >= 4 ? 'text-white' : 'text-gray-400'}`}
                />
              </div>
              <div className="flex-1 pl-8">
                <p className="text-sm text-gray-600">Expected delivery date</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 p-4 bg-gray-50 rounded-md">
            <h3 className="font-semibold mb-2">Delivery Information</h3>
            <p className="text-sm text-gray-600">
              Your package will be delivered by our courier partner. Someone must be present at the delivery address to receive the package.
              You will receive SMS updates about your delivery status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
