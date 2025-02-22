import * as React from "react";
import { Tailwind } from "@react-email/tailwind";
interface PurchaseConfirmationEmailToAdmin {
  streamName: string;
  purchaseId: string;
  username: string;
  userEmail: string;
  purchaseAmount: number;
}

export const PurchaseConfirmationEmailToAdmin: React.FC<
  Readonly<PurchaseConfirmationEmailToAdmin>
> = ({ streamName, purchaseId, username, userEmail, purchaseAmount }) => {
  return (
    <div>
      <Tailwind>
        <div className="bg-gray-100 font-sans">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
            {/* Header */}
            <div className="bg-blue-600 text-white text-center py-6 rounded-t-lg">
              <h1 className="text-2xl font-bold">
                Automated Purchase Confirmation
              </h1>
            </div>

            {/* Body */}
            <div className="p-8">
              <p className="text-lg text-gray-700">User: {username},</p>
              <p className="mt-4 text-gray-600 leading-relaxed"></p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Stream Name: {streamName}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Purchase Id: {purchaseId}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Username: {username}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                User Email: {userEmail}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Purchase Amount: {purchaseAmount}
              </p>

              {/* Footer */}
              <div className="bg-gray-50 text-center py-6 rounded-b-lg">
                <p className="text-gray-500 text-sm">
                  If you have any questions, feel free to reach out to us at{" "}
                  <a
                    // href={`mailto:${supportEmail}`}
                    className="text-blue-600 hover:underline"
                  >
                    Carlos-EHR
                  </a>
                  .
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  &copy; {new Date().getFullYear()} Carlos-EHR. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Tailwind>
    </div>
  );
};
