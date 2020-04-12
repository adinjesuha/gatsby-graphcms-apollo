import React from 'react'
import { Link } from 'gatsby'
import { 
	Card, 
	CardBody, 
	Row,
	Col,
	Progress,
	Button
} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import classNames from 'classnames';

import UIModal from './UIModal';

const Monitorings = [{
		id: 1,
		state: 'Finalizado',
		company: 'AgrobioTek',
		correlative: '001-02-01',

		progress: 100,
		dueDate: '15 Dec',
		totalTasks: 21,
		totalComments: 741,
		totalMembers: 10,

		samples: [
			{
				id: 1,
				name: 'Pizza',
				type: 'Materia Prima',
				parameters: [
					{
						id: 1,
						name: 'E. coli',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 2,
						name: 'Coliformes totales',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 3,
						name: 'Salmonella spp.',
						testType: 'Prueba rápida',
						parameterType: 'Patógeno'
					},
					{
						id: 4,
						name: 'E. coli O157:H7',
						testType: 'Prueba rápida',
						parameterType: 'Patógeno'
					}
				],
			},
			{
				id: 2,
				name: 'Juan Valdez',
				type: 'Hisopado de Manos',
				parameters: [
					{
						id: 1,
						name: 'E. coli',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 2,
						name: 'Coliformes fecales',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 3,
						name: 'Listeria spp.',
						testType: 'Prueba tradicional',
						parameterType: 'Patógeno'
					},
				],
			}
		]
	},
	{
		id: 2,
		state: 'En progreso',
		company: 'Alimentos Maravilla',
		correlative: '002-02-01',

		progress: 33,
		dueDate: '15 Dec',
		totalTasks: 21,
		totalComments: 741,
		totalMembers: 10,

		samples: [
			{
				id: 1,
				name: 'Jugo de Naranja',
				type: 'Alimento',
				parameters: [
					{
						id: 1,
						name: 'E. coli',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 2,
						name: 'Coliformes fecales',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 3,
						name: 'E. coli O157:H7',
						testType: 'Prueba rápida',
						parameterType: 'Patógeno'
					},
				],
			},
			{
				id: 2,
				name: 'Tabla de picar',
				type: 'Hisopado de Superficie',
				parameters: [
					{
						id: 1,
						name: 'Coliformes totales',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 2,
						name: 'Mohos y Levaduras',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 3,
						name: 'Staphylococcus aureus',
						testType: 'Prueba rápida',
						parameterType: 'Patógeno',
					},
					{
						id: 4,
						name: 'Listeria spp.',
						testType: 'Prueba tradicional',
						parameterType: 'Patógeno'
					},
				],
			},
			{
				id: 3,
				name: 'Tabla de picar',
				type: 'Hisopado de Superficie',
				parameters: [
					{
						id: 1,
						name: 'Coliformes totales',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 2,
						name: 'Mohos y Levaduras',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 3,
						name: 'Staphylococcus aureus',
						testType: 'Prueba rápida',
						parameterType: 'Patógeno',
					},
					{
						id: 4,
						name: 'Listeria spp.',
						testType: 'Prueba tradicional',
						parameterType: 'Patógeno'
					},
				],
			},
			{
				id: 4,
				name: 'Tabla de picar',
				type: 'Hisopado de Superficie',
				parameters: [
					{
						id: 1,
						name: 'Coliformes totales',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 2,
						name: 'Mohos y Levaduras',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 3,
						name: 'Staphylococcus aureus',
						testType: 'Prueba rápida',
						parameterType: 'Patógeno',
					},
					{
						id: 4,
						name: 'Listeria spp.',
						testType: 'Prueba tradicional',
						parameterType: 'Patógeno'
					},
				],
			},
		]
	},
	{
		id: 3,
		state: 'Planificado',
		company: 'Lacthosa Norte',
		correlative: '003-02-01',

		progress: 0,
		dueDate: '15 Dec',
		totalTasks: 21,
		totalComments: 741,
		totalMembers: 10,

		samples: [
			{
				id: 1,
				name: 'Leche en Polvo',
				type: 'Alimento',
				parameters: [
					{
						id: 1,
						name: 'Coliformes totales',
						testType: 'Prueba rápida',
						parameterType: 'Indicador'
					},
					{
						id: 2,
						name: 'Coliformes fecales',
						testType: 'Prueba tradicional',
						parameterType: 'Indicador'
					},
				],
			},
		]
	},
]

const Sample = ({ sample, company }) => {
	return (
		<div className="p-2 border rounded mb-4">
			<div className="media">
				<div className="media-body">
					<h6 className="mt-1 mb-0 font-size-15">{sample.name}</h6>
					<h6 className="text-muted font-weight-normal mt-1">{sample.sampleType}</h6>
				</div>
				<div className="float-right mt-1">
					<UIModal 
						btnTitle={`+${sample.parameters.length} parametros`} 
						sample={sample}
						company={company}
					/>
				</div>
			</div>
		</div>
	)
}

const Monitoring = ({monitoring}) => {
	const data = Monitorings

	console.log(monitoring)
	
	return(
		<Card>

			<CardBody className="pt-4">

				<div className={classNames(
					'badge', 'float-right',
					{
						'badge-success': monitoring.completed === true,
						'badge-info': monitoring.completed === false,
					}
					)}>
					{monitoring.completed ? 'Finalizado' : 'En Progreso'}
				</div>
				<div>
					<p className={classNames("font-size-12", "mb-1",
						{
							'text-success': monitoring.completed === true,
							'text-info': monitoring.completed === false,
					})}>{monitoring.correlative}</p>
					<h5>
						<Link to="/" className="text-dark">
							{monitoring.company.name}
						</Link>
					</h5>
				</div>

				<PerfectScrollbar style={{'maxHeight': '180px'}}>
				{monitoring.samples.map( (sample) => (
					<Sample 
						key={'sample-' + sample.id} 
						sample={sample} 
						company={monitoring.company.name}
					/>
				))}
				</PerfectScrollbar>

			</CardBody>
			<CardBody className="border-top p-3 pl-4 pr-4">
				<Row className="align-items-center">
					<Col className="col-sm-6">
					{/*{(data.samples.length * 10) < 30 && (
						<Progress 
							value={(data.samples.length * 10)} 
							color="warning" 
							className="progress-sm" 
						/>
					)}
					{(data.samples.length * 10) > 30 && (data.samples.length * 10) < 100 && (
						<Progress 
							value={(data.samples.length * 10)} 
							color="info"
							className="progress-sm" />
					)}
					{(data.samples.length * 10) === 100 && (
						<Progress 
							value={(data.samples.length * 10)} 
							color="success" 
							className="progress-sm" 
						/>
					)}*/}
					</Col>
					<Col className="col-sm-6">
						<div className="text-right">
							<Button 
								disabled={data.state === "Finalizado"}
								color={data.state !== "Finalizado" ? "primary" : "secondary"} 
								onClick={() => console.log('disabled')}
							>
								Procesar
							</Button>
						</div>
					</Col>
				</Row>
			</CardBody>

		</Card>
	)
}

export default Monitoring