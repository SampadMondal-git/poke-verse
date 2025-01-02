import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import './loader.css';

export default function Loader() {
    return (
        <div className="loaderContainer">
            <div className="loadingContainer">
                <MutatingDots
                    visible={true}
                    height="100"
                    width="100"
                    color="#cbb4d4"
                    secondaryColor="#cbb4d4"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    );
}