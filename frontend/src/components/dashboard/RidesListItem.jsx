import { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Col } from 'reactstrap';

function RidesListItem(props) { 

	const userId = '64275075798a59db3b803cba';

	const { rideDescription, rideDifficulty, rideTitle, rideType, _id, participants } = props.rideInfo;
	const [joined, setJoined] = useState(participants.some(participant => participant.userId === userId));

	// TODO: add the userId to the data when it is available

	function joinRide(id) {
		const newRideInfo = props.rideInfo
		newRideInfo.participants.push({ userId });
		modifyRide(id, newRideInfo)
	}

  function leaveRide(id) {
    const newRideInfo = props.rideInfo
    newRideInfo.participants = newRideInfo.participants.filter(participant => participant.userId!== userId);
    modifyRide(id, newRideInfo);
  }

	function modifyRide(id, newRideInfo) {
		const apiUrl = `/api/ride/${id}/join`;
		const requestOptions = {
			method: 'PUT',
			headers: { 
				'Content-Type': 'application/json',
				// TODO: insert authorization here ------------------------
				// 'Authorization': 'Bearer my-token',
				// 'My-Custom-Header': 'foobar'
			},
			body: JSON.stringify(newRideInfo)
		};

		fetch(apiUrl, requestOptions)
		.then((response) => response.json())
		.then((ride) => {
			setJoined(!joined);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	}

	return (
		<div className='container-fluid'>
			<Card className='flex-row m-3'>
				<Col xs="2">
					<CardImg
						alt="Card image"
						// src={ avatar }
						top
						className='w-20 m-4'
						/>
				</Col>
				<Col>
					<CardBody>
						<CardTitle tag="h5">
							{ rideTitle }
						</CardTitle>
						<CardSubtitle
							className="mb-2 text-muted"
							tag="h6"
						>
							{ _id }
						</CardSubtitle>
						<CardText>
							{ rideType }
						</CardText>
						<CardText>
							{ rideDifficulty }
						</CardText>
						<CardText>
							{ rideDescription }
						</CardText><CardText>
							{ <span>Participants: {participants?.length}</span> }
						</CardText>
						<a href={`/api/ride/${_id}`}>
							<button 
								className='btn btn-primary' 
							>
								View Ride
							</button>
						</a>
						{joined
							? 
							(<button 
								className='btn btn-danger ms-3 px-3' 
								onClick={() => leaveRide(_id)}
							>
								Leave ride
							</button>)
							:
							(<button 
								className='btn btn-success ms-3 px-3' 
								onClick={() => joinRide(_id)}
							>
								Join!
							</button>)
						} 
					</CardBody>
				</Col>
			</Card>
		</div>
	);
}

// Navbar.propTypes = {
// classes: PropTypes.object.isRequired,
// };

	export default RidesListItem;
