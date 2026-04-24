import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";

export default function ProcessNonprofit() {
  const navigate = useNavigate();
  const { order, setCompanyInfo } = useOrder();

  const [nonprofitHasMembers, setNonprofitHasMembers] = useState<string>(
    order.companyInfo.nonprofitHasMembers || "no"
  );
  const [nonprofitPurpose, setNonprofitPurpose] = useState<string>(
    order.companyInfo.nonprofitPurpose || "public_benefit"
  );

  const handleNext = () => {
    setCompanyInfo({
      ...order.companyInfo,
      nonprofitHasMembers,
      nonprofitPurpose,
    });
    navigate("/process-expedite");
  };

  return (
    <ProcessLayout progress={30} title="Nonprofit Details">
      <div className="space-y-6">
        {/* Members Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Should your Nonprofit Corporation have members?
          </h2>
          <hr className="my-4 border-gray-200" />

          <p className="text-base text-gray-600 mb-4">
            The long term management of a nonprofit corporation is handled by a
            board of directors, however the nonprofit corporation may elect to
            have a formal membership structure in which the members will be
            granted basic rights to participate in the affairs and future of the
            nonprofit corporation.
          </p>

          <p className="text-base text-gray-600 mb-4">
            Most smaller nonprofits elect not to have a formal membership
            structure, and thus avoid documenting and maintaining membership
            rolls, as well as avoiding the time and expense of having the
            members vote on directors and other major corporate decisions.
          </p>

          <p className="text-base text-gray-600 mb-6">
            The term &quot;members&quot;, in this sense of the word, has a
            specific meaning. If the nonprofit will not have members, it will
            still have directors and officers handling the long and short term
            management of the corporation, respectively.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label
              className={`flex items-start gap-3 border-2 p-4 rounded-lg cursor-pointer transition ${
                nonprofitHasMembers === "no"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="nonprofitHasMembers"
                value="no"
                checked={nonprofitHasMembers === "no"}
                onChange={(e) => setNonprofitHasMembers(e.target.value)}
                className="mt-1 accent-orange-500"
              />
              <div>
                <p className="text-sm text-gray-500">96% selection rate</p>
                <p className="font-semibold text-gray-900">
                  The nonprofit <strong>WILL NOT</strong> have members
                </p>
              </div>
            </label>

            <label
              className={`flex items-start gap-3 border-2 p-4 rounded-lg cursor-pointer transition ${
                nonprofitHasMembers === "yes"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="nonprofitHasMembers"
                value="yes"
                checked={nonprofitHasMembers === "yes"}
                onChange={(e) => setNonprofitHasMembers(e.target.value)}
                className="mt-1 accent-orange-500"
              />
              <div>
                <p className="font-semibold text-gray-900 mt-4">
                  The nonprofit WILL have members
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* General Purpose Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            General purpose of the Nonprofit:{" "}
            <span className="text-gray-500">(Choose one)*</span>
          </h2>
          <hr className="my-4 border-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <label
              className={`flex items-start gap-3 border-2 p-4 rounded-lg cursor-pointer transition ${
                nonprofitPurpose === "public_benefit"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="nonprofitPurpose"
                value="public_benefit"
                checked={nonprofitPurpose === "public_benefit"}
                onChange={(e) => setNonprofitPurpose(e.target.value)}
                className="mt-1 accent-orange-500"
              />
              <div>
                <p className="text-sm text-gray-500">96% Selection Rate</p>
                <p className="font-semibold text-gray-900">
                  Public Benefit Corporation
                </p>
              </div>
            </label>

            <label
              className={`flex items-start gap-3 border-2 p-4 rounded-lg cursor-pointer transition ${
                nonprofitPurpose === "religious"
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="nonprofitPurpose"
                value="religious"
                checked={nonprofitPurpose === "religious"}
                onChange={(e) => setNonprofitPurpose(e.target.value)}
                className="mt-1 accent-orange-500"
              />
              <div>
                <p className="text-sm text-gray-500">4% Selection Rate</p>
                <p className="font-semibold text-gray-900">
                  Religious Corporation
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-2">
          <button
            onClick={() => navigate("/process-coinfo")}
            className="flex items-center gap-2 px-6 py-3 border rounded-lg"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            className="ml-auto flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg cursor-pointer"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </ProcessLayout>
  );
}
