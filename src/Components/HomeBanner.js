import React from 'react'

const HomeBanner = () => {
    return (
        <div className="main-wrapper">

            <section className="section section-search">
                <div className="container-fluid">
                    <div className="banner-wrapper">
                        <div className="banner-header text-center">
                            <h1>Search Doctor, Make an Appointment</h1>
                            <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                        </div>

                        {/* <!-- Search --> */}
                        <div className="search-box">
                            <form action="templateshub.net">
                                <div className="form-group search-location">
                                    <input type="text" className="form-control" placeholder="Search Location"/>
                                        <span className="form-text">Based on your Location</span>
                                </div>
                                <div className="form-group search-info">
                                    <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"/>
                                        <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                                </div>
                                <button type="submit" className="btn btn-primary search-btn"><i class="fas fa-search"></i> <span>Search</span></button>
                            </form>
                        </div>
                        {/* <!-- /Search --> */}

                    </div>
                </div>
            </section>


        </div>
    )
}

export default HomeBanner;
