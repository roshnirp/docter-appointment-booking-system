import React from 'react'

const Avblfetre = () => {
  return (
    <div>
      
      <section className="section section-features">
				<div className="container-fluid">
				   <div className="row">
						<div className="col-md-5 features-img">
							<img src="assets/img/features/feature.png" className="img-fluid" alt="Feature"/>
						</div>
						<div className="col-md-7">
							<div className="section-header">	
								<h2 className="mt-2">Availabe Features in Our Clinic</h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
							</div>	
							<div className="features-slider slider d-flex">
								{/* <!-- Slider Item --> */}
								<div className="feature-item text-center">
									<img src="assets/img/features/feature-01.jpg" className="img-fluid" alt="Feature"/>
									<p>Patient Ward</p>
								</div>
								{/* <!-- /Slider Item --> */}
								
								{/* <!-- Slider Item --> */}
								<div className="feature-item text-center">
									<img src="assets/img/features/feature-02.jpg" className="img-fluid" alt="Feature"/>
									<p>Test Room</p>
								</div>
								{/* <!-- /Slider Item --> */}
								
								{/* <!-- Slider Item --> */}
								<div className="feature-item text-center">
									<img src="assets/img/features/feature-03.jpg" className="img-fluid" alt="Feature"/>
									<p>ICU</p>
								</div>
								{/* <!-- /Slider Item --> */}
								
								{/* <!-- Slider Item --> */}
								<div className="feature-item text-center">
									<img src="assets/img/features/feature-04.jpg" className="img-fluid" alt="Feature"/>
									<p>Laboratory</p>
								</div>
								{/* <!-- /Slider Item --> */}
								
								{/* <!-- Slider Item --> */}
								<div className="feature-item text-center">
									<img src="assets/img/features/feature-05.jpg" className="img-fluid" alt="Feature"/>
									<p>Operation</p>
								</div>
								{/* <!-- /Slider Item --> */}
								
								{/* <!-- Slider Item --> */}
								<div className="feature-item text-center">
									<img src="assets/img/features/feature-06.jpg" className="img-fluid" alt="Feature"/>
									<p>Medical</p>
								</div>
								{/* <!-- /Slider Item --> */}
							</div>
						</div>
				   </div>
				</div>
			</section>	


    </div>
  )
}

export default Avblfetre;
