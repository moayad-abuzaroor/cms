import React, { useState } from "react";
import MovieTitleComponent from "./movietTitleComponent";
import MoviesNavBar from "./MoviesNavBar";

function Submit() {
    const [selectedApps, setSelectedApps] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setSelectedApps(prevSelected => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter(app => app !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    const appOptions = [
        { label: "iLike 3.0", value: "iLike 3.0" },
        { label: "JAW TV", value: "JAW TV" },
        { label: "Ministra", value: "Ministra" },
    ];

    return (
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
                </div>
            </div>

            <MovieTitleComponent />

            <div className="row">
                <form className="col-lg-11 mx-auto market-form addForm">
                    <MoviesNavBar />
                    <div className="form-row mt-4">
                        <div className="form-group col-md-4">                           
                            {appOptions.map((option) => (
                                <div className="form-check" key={option.value}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={option.value}
                                        checked={selectedApps.includes(option.value)}
                                        onChange={handleCheckboxChange}
                                        style={{ transform: "scale(1.1)" }} // Adjust the transform value for checkbox size
                                    />
                                    <label className="form-check-label ml-1">{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form-row mt-4">
                        <div className="form-group col-md-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Submit;
