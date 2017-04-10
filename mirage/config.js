export default function() {
  this.namespace = '/api';

let journeys = [{
        type: 'journeys',
        id: 1,
        attributes: {
          country: 'Guyana',
          city: 'Georgetown',
          date: 'September 2012',
          travellers: 'Rachel and JoAnn',
          description: 'Missions Trip',
          coordinates: 'Somewhere',
          img: '/assets/img/guyana.jpg'
        }
      }, {
        type: 'journeys',
        id: 2,
        attributes: {
          country: 'Morocco',
          city: 'Ifrane',
          date: 'Fall 2015',
          travellers: 'Rachel, Eric, and Julius',
          description: 'Study Abroad',
          coordinates: 'Somewhere',
          img: '/assets/img/ifrane.jpg'
        }
      }, {
        type: 'journeys',
        id: 3,
        attributes: {
          country: 'Morocco',
          city: 'Essioura',
          date: 'October 2015',
          travellers: 'Rachel and Julius',
          description: 'Holiday',
          coordinates: 'Somewhere',
          img: '/assets/img/essioura.jpg'
        }
      }, {
        type: 'journeys',
        id: 4,
        attributes: {
          country: 'USA',
          city: 'Canaan Valley',
          date: 'Fall 2016',
          travellers: 'Rachel and Julius',
          description: 'Camping',
          coordinates: 'Somewhere',
          img: '/assets/img/canaan.jpg'
        }
      }, {
        type: 'journeys',
        id: 5,
        attributes: {
          country: 'Germany',
          city: 'Munich',
          date: 'Winter 2016',
          travellers: 'Rachel and Julius',
          description: 'Sight Seeing',
          coordinates: 'Somewhere',
          img: '/assets/img/chimesee.jpg'
        }
      }, {
        type: 'journeys',
        id: 6,
        attributes: {
          country: 'Canada',
          city: 'Niagra Falls',
          date: 'Fall 2016',
          travellers: 'Rachel and Julius',
          description: 'Road Tripping',
          coordinates: 'Somewhere',
          img: '/assets/img/niagra.jpg'
        }
      }];

  let photos = [
    {
      type: 'photos',
      id: '1',
      attributes: {
        journeyId: '1',
        img: '/assets/img/guyana.jpg'
      }
    }, {
      type: 'photos',
      id: '2',
      attributes: {
        journeyId: '1',
        img: '/assets/img/ifrane.jpg'
      }
    },{
      type: 'photos',
      id: '3',
      attributes: {
        journeyId: '3',
        img: '/assets/img/essioura.jpg'
      }
    }, {
      type: 'photos',
      id: '4',
      attributes: {
        journeyId: '4',
        img: '/assets/img/canaan.jpg'
      }
    }
  ];

 this.get('/journeys', function(db, request) {
    if(request.queryParams.country !== undefined) {
      let filteredJourneys = journeys.filter(function(i) {
        return i.attributes.country.toLowerCase().indexOf(request.queryParams.country.toLowerCase()) !== -1;
      });
      return { data: filteredJourneys };
    } else {
      return { data: journeys };
    }
  });

 this.get('/photos', function(db, request) {
    if(request.queryParams.journeyId !== undefined) {
      let filteredPhotos = photos.filter(function(i) {
        return i.attributes.journeyId.indexOf(request.queryParams.journeyId) !== -1;
      });
      return { data: filteredPhotos };
    } else {
      return { data: photos };
    }
  });

 this.get('journeys/:id', function(db, request){
    return {data: journeys.find((journey) => request.params.id === journey.id)};
 });

}