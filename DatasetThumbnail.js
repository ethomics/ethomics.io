import { DownloadIcon, InformationCircleIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import React from 'react'
import NewUpload from './NewUpload'            
import { Link } from "react-router-dom"


const DatasetThumbnail = () => {
    return (
        <div className="bg-gray-50 hover:bg-gray-100 px-4 pt-8 pb-4 max-w-lg border-b border-gray-200 drop-shadow-md sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div className="ml-4 mt-4">
                    <h3 className="text-lg leading-6 font-medium text-left text-gray-900">Dataset Name Here</h3>
                    <p className="mt-1 text-sm text-left text-gray-500">
                        Dataset details here
                    </p>
                </div>
                <div className="ml-4 mt-4 flex-shrink-0">
                    <Link to="/datasets">
                    <button
                        type="button"
                        className="relative inline-flex items-center 
                        px-4 py-2 border border-transparent 
                        shadow-sm text-sm font-medium rounded-md 
                        text-white bg-indigo-600 hover:bg-indigo-700 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Explore dataset 
                    </button>
                    </Link>
                </div>
            </div>
            <div className="static flex flex-row pt-6 gap-2">
                <div>
                    <DownloadIcon className="h-6 w-6 text-indigo-600 hover:text-pink-600" aria-hidden="true" />
                </div>
                <div>
                    <InformationCircleIcon className="h-6 w-6 text-indigo-600 hover:text-green-600" aria-hidden="true" />
                </div>
                <div>
                    <AdjustmentsIcon className="h-6 w-6 text-indigo-600 hover:text-red-600" aria-hidden="true" />
                </div>
            </div>
            <NewUpload/>            
        </div>
    );
};

export default DatasetThumbnail;