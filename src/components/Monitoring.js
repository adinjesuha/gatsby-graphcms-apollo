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

import { removeDash } from '../utils/removeDash'
import UIModal from './UIModal';
import DoneMonitoring from './DoneMonitoring';

const Sample = ({ sample, company }) => {
	return (
		<div className="p-2 border rounded mb-4">
			<div className="media">
				<div className="media-body">
					<h6 className="mt-1 mb-0 font-size-15">{sample.name}</h6>
					<h6 className="text-muted font-weight-normal mt-1">{removeDash(sample.sampleType)}</h6>
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

	// Total of samples 100%
	const totalSamples = monitoring.samples.length
	const samplesCompleted = monitoring.samples.filter(sample => sample.completed)
	// Percentage calculation
	let percentage = Math.floor((samplesCompleted.length / totalSamples) * 100)
	
	return(
		<Card>

			<CardBody className="pt-4">

				<div className={classNames(
					'badge', 'float-right',
					{
						'badge-success': percentage === 100,
						'badge-warning': percentage > 1 && percentage < 100,
						'badge-info': percentage < 1,
					}
					)}>
					{monitoring.completed ? 'Finalizado' : (
						percentage < 1 ? 'Planificado' : 'En Progreso'
					)}
				</div>
				<div>
					<p className={classNames("font-size-12", "mb-1",
						{
							'text-success': percentage === 100,
							'text-warning': percentage > 1 && percentage < 100,
							'text-info': percentage < 1,
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
					{percentage < 30 && (
						<Progress 
							value={percentage} 
							color="warning" 
							className="progress-sm" 
						/>
					)}
					{percentage > 30 && percentage < 100 && (
						<Progress 
							value={percentage} 
							color="info"
							className="progress-sm" />
					)}
					{percentage === 100 && (
						<Progress 
							value={percentage} 
							color="success" 
							className="progress-sm" 
						/>
					)}
					</Col>
					<Col className="col-sm-6">
						<div className="text-right">
							<DoneMonitoring
								percentage={percentage}
								id={monitoring.id}
								completed={monitoring.completed}
							/>
						</div>
					</Col>
				</Row>
			</CardBody>

		</Card>
	)
}

export default Monitoring