import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';

const StripedRowsTable = ({ sampleName, sampleType, parameters }) => (
	<React.Fragment>
		<h4 className="header-title mt-0 mb-1">{sampleName}</h4>
		<p className="sub-header">{sampleType}</p>
		<Table className="mb-4" striped>
			<thead>
				<tr>
					<th>#</th>
					<th>Parametro</th>
					<th>Resultado</th>
					<th>Valor sugerido</th>
				</tr>
			</thead>
			<tbody>
			{parameters.map((parameter, index) => {
				return (
					<tr key={index}>
						<th scope="row">{parameter.id}</th>
						<td>{parameter.parameter}</td>
						<td>{parameter.results}</td>
						<td>{parameter.username}</td>
					</tr>
				);
			})}
			</tbody>
		</Table>
	</React.Fragment>
);

const About = (props) => (
	<React.Fragment>
		<Card>
			<CardBody>
				<div className="text-muted mt-3">

					<StripedRowsTable {...props}/>

					<h6 className="font-weight-bold">Comentarios</h6>
					<p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.</p>	

					<div className="mt-4">
						<h6 className="font-weight-bold">Archivos Adjuntos</h6>

						<div className="row">
							<div className="col-xl-4 col-md-6">
								<div className="p-2 border rounded mb-2">
									<div className="media">
										<div className="avatar-sm font-weight-bold mr-3">
											<span className="avatar-title rounded bg-soft-primary text-primary">
												<i className="uil-file-plus-alt font-size-18"></i>
											</span>
										</div>
										<div className="media-body">
											<a href="/" className="d-inline-block mt-2">Landing 1.psd</a>
										</div>
										<div className="float-right mt-1">
											<a href="/" className="p-2"><i className="uil-download-alt font-size-18"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-md-6">
								<div className="p-2 border rounded mb-2">
									<div className="media">
										<div className="avatar-sm font-weight-bold mr-3">
											<span className="avatar-title rounded bg-soft-primary text-primary">
												<i className="uil-file-plus-alt font-size-18"></i>
											</span>
										</div>
										<div className="media-body">
											<a href="/" className="d-inline-block mt-2">Landing 2.psd</a>
										</div>
										<div className="float-right mt-1">
											<a href="/" className="p-2"><i className="uil-download-alt font-size-18"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</React.Fragment>
)

export default About;
