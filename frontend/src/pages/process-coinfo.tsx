import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check, MessageCircle, X } from "lucide-react";
import ProcessLayout from "../components/ProcessLayout";
import { useOrder } from "../contexts/OrderContext";

type Errors = {
  llcName?: string;
  managementMethod?: string;
};

const designatorsByEntity: Record<string, string[]> = {
  'LLC': ['LLC', 'L.L.C.', 'Limited Liability Company', 'LC', 'L.C.'],
  'S-Corporation': ['INC', 'INC.', 'INCORPORATED', 'CORP', 'CORP.', 'CORPORATION'],
  'C-Corporation': ['INC', 'INC.', 'INCORPORATED', 'CORP', 'CORP.', 'CORPORATION'],
  'Nonprofit': ['INC.', 'LIMITED', 'CORPORATION', 'INCORPORATED', 'CORP.'],
};

const defaultDesignator: Record<string, string> = {
  'LLC': 'LLC',
  'S-Corporation': 'INC',
  'C-Corporation': 'INC',
  'Nonprofit': '',
};

const entityLabel: Record<string, string> = {
  'LLC': 'LLC',
  'S-Corporation': 'S-Corporation',
  'C-Corporation': 'C-Corporation',
  'Nonprofit': 'Non-Profit',
};

export default function OrderProcess() {

  const navigate = useNavigate();
  const { order, setCompanyInfo } = useOrder();

  const entityType = order.entityType || 'LLC';
  const isLLC = entityType === 'LLC';

  const [llcName, setLlcName] = useState<string>(order.companyInfo.llcName);
  const [designator, setDesignator] = useState<string>(order.companyInfo.designator || defaultDesignator[entityType] || "LLC");
  const [managementMethod, setManagementMethod] = useState<string>(order.companyInfo.managementMethod);
  const [businessPurpose, setBusinessPurpose] = useState<string>(order.companyInfo.businessPurpose || '');

  const isNonprofit = entityType === 'Nonprofit';
  const [errors, setErrors] = useState<Errors>({});
  const [showChat, setShowChat] = useState(false);


  const validate = (): Errors => {

    const newErrors: Errors = {};

    if (!llcName.trim()) {
      newErrors.llcName = `${entityLabel[entityType] || 'Company'} Name is required`;
    }
    else if (llcName.length < 3) {
      newErrors.llcName = `${entityLabel[entityType] || 'Company'} Name must be at least 3 characters`;
    }

    if (isLLC && !managementMethod) {
      newErrors.managementMethod = "Please select a management method";
    }

    return newErrors;

  };


  useEffect(() => {

    const validationErrors = validate();
    setErrors(validationErrors);

  }, [llcName, managementMethod]);


  const handleNext = () => {

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setCompanyInfo({ ...order.companyInfo, llcName, designator, managementMethod, businessPurpose });
      navigate(isNonprofit ? "/process-nonprofit" : "/process-expedite");
    }

  };


  return (

    <ProcessLayout progress={25} title="Company Information">

          <div className="space-y-6">

            <div className="bg-white rounded-lg border border-gray-200 p-8">

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Company Information
              </h2>


              <div className="grid grid-cols-2 gap-4">


                {/* COMPANY NAME */}

                <div>

                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {entityLabel[entityType] || 'Company'} Name
                  </label>

                  <input
                    type="text"
                    value={llcName}
                    onChange={(e) => setLlcName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />

                  {errors.llcName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.llcName}
                    </p>
                  )}

                </div>


                {/* DESIGNATOR */}

                <div>

                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Designator
                  </label>

                  <select
                    value={designator}
                    onChange={(e) => setDesignator(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >

                    {!defaultDesignator[entityType] && (
                      <option value="">Select Designator</option>
                    )}
                    {(designatorsByEntity[entityType] || designatorsByEntity['LLC']).map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}

                  </select>

                </div>

              </div>


              {/* NAME PREVIEW */}

              {llcName && (

                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-center justify-between mt-6">

                  <div>

                    <div className="font-medium text-sm text-gray-700">
                      Your official company name will display as
                    </div>

                    <div className="text-lg font-semibold text-gray-900 mt-1">
                      {llcName} {designator}
                    </div>

                  </div>

                  <Check className="w-5 h-5 text-green-600" />

                </div>

              )}

              {/* BUSINESS PURPOSE — for non-LLC entities */}
              {!isLLC && (
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Purpose
                    <span className="ml-2 font-normal text-gray-500">
                      ({100 - businessPurpose.length} characters left)
                    </span>
                  </label>
                  <textarea
                    value={businessPurpose}
                    onChange={(e) => {
                      if (e.target.value.length <= 100) setBusinessPurpose(e.target.value);
                    }}
                    maxLength={100}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Please provide brief description of Business Purpose"
                  />
                </div>
              )}

              {isLLC && (
                <>
                  <div className="mt-6"><label className="block text-xl font-bold text-gray-900 mb-2">Management Method</label><p className="text-base text-gray-600 mb-4">When forming an LLC, you must decide how the company will be managed. Most LLCs operate under one of two management structures: the business can be run directly by its owners or handled by designated managers. State filing requirements ask that this structure be selected during the formation process.</p><p className="text-base text-gray-600 mb-4">Please indicate which management structure you plan to use for your LLC when it begins operating.</p><div className="text-base font-semibold text-gray-900 mb-3">Understanding the options</div><div className="space-y-3 text-base text-gray-700"><p><strong>Member-Managed:</strong> In this setup, the owners of the LLC take an active role in operating the company. Members participate in making decisions and managing the business activities.</p><p><strong>Manager-Managed:</strong> Under this structure, the owners appoint one or more managers to handle the everyday management of the business. The managers oversee operations while the members remain the company's owners.</p></div></div>

                  {/* MANAGEMENT METHOD */}

                  <div className="mt-8 space-y-4">

                    <label className="flex items-start gap-3 border p-4 rounded-lg">

                      <input
                        type="radio"
                        name="managementMethod"
                        value="member"
                        checked={managementMethod === "member"}
                        onChange={(e) => setManagementMethod(e.target.value)}
                      />

                      <div>

                        <p className="font-semibold">
                          Member-Managed LLC
                        </p>

                        <p className="text-sm text-gray-600">
                          All owners run the business
                        </p>

                      </div>

                    </label>


                    <label className="flex items-start gap-3 border p-4 rounded-lg">

                      <input
                        type="radio"
                        name="managementMethod"
                        value="manager"
                        checked={managementMethod === "manager"}
                        onChange={(e) => setManagementMethod(e.target.value)}
                      />

                      <div>

                        <p className="font-semibold">
                          Manager-Managed LLC
                        </p>

                        <p className="text-sm text-gray-600">
                          Managers operate the company
                        </p>

                      </div>

                    </label>


                    <label className="flex items-start gap-3 border p-4 rounded-lg">

                      <input
                        type="radio"
                        name="managementMethod"
                        value="notSure"
                        checked={managementMethod === "notSure"}
                        onChange={(e) => setManagementMethod(e.target.value)}
                      />

                      <div>

                        <p className="font-semibold">
                          Not Sure Yet
                        </p>

                        <p className="text-sm text-gray-600">
                          Decide later
                        </p>

                      </div>

                    </label>


                    {errors.managementMethod && (
                      <p className="text-red-500 text-sm">
                        {errors.managementMethod}
                      </p>
                    )}

                  </div>
                </>
              )}


              {/* BUTTONS */}

              <div className="flex gap-4 mt-8 pt-6 border-t">

                <button
                  onClick={() => navigate("/form-order-now")}
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

          </div>


      {/* CHAT BUTTON */}

      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
      >

        {showChat ? <X className="w-6 h-6"/> : <MessageCircle className="w-6 h-6"/>}

      </button>

    </ProcessLayout>

  );
}
