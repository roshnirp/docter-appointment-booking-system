import React from 'react'

const Transaction = () => {
  return (
    <div>
      

      {/* <!-- Page Wrapper --> */}
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					{/* <!-- Page Header --> */}
					<div class="page-header">
						<div class="row">
							<div class="col-sm-12">
								<h3 class="page-title">Transactions</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li class="breadcrumb-item active">Transactions</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
					
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<div class="table-responsive">
										<table class="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Invoice Number</th>
													<th>Patient ID</th>
													<th>Patient Name</th>
													<th>Total Amount</th>
													<th class="text-center">Status</th>
													<th class="text-right">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><a href="invoice.html"/>#IN0001</td>
													<td>#PT001</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient1.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Charlene Reed </a>
														</h2>
													</td>
													<td>$100.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"/>#IN0002</td>
													<td>#PT002</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient2.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Travis Trimble </a>
														</h2>
													</td>
													<td>$200.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"/>#IN0003</td>
													<td>#PT003</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient3.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Carl Kelly</a>
														</h2>
													</td>
													<td>$250.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"/>#IN0004</td>
													<td>#PT004</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient4.jpg" alt="User Image"/></a>
															<a href="/admin/profile"> Michelle Fairfax</a>
														</h2>
													</td>
													<td>$150.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"/>#IN0005</td>
													<td>#PT005</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient5.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Gina Moore</a>
														</h2>
													</td>
													<td>$350.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"/>#IN0006</td>
													<td>#PT006</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="/adminavatar-img rounded-circle" src="/adminassets/img/patients/patient6.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Elsie Gilley</a>
														</h2>
													</td>
													<td>$300.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"/>#IN0007</td>
													<td>#PT007</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient7.jpg" alt="User Image"/></a>
															<a href="/admin/profile"> Joan Gardner</a>
														</h2>
													</td>
													<td>$250.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"/>#IN0008</td>
													<td>#PT008</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient8.jpg" alt="User Image"/></a>
															<a href="/admin/profile"> Daniel Griffing</a>
														</h2>
													</td>
													<td>$150.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"/>#IN0009</td>
													<td>#PT009</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient9.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Walter Roberson</a>
														</h2>
													</td>
													<td>$100.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><a href="invoice.html"></a>#IN0010</td>
													<td>#PT010</td>
													<td>
														<h2 class="table-avatar">
															<a href="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="/adminassets/img/patients/patient10.jpg" alt="User Image"/></a>
															<a href="/admin/profile">Robert Rhodes </a>
														</h2>
													</td>
													<td>$120.00</td>
													<td class="text-center">
														<span class="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i class="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>			
					</div>
				</div>			
			</div>
			{/* <!-- /Page Wrapper --> */}


    </div>
  )
}

export default Transaction;
