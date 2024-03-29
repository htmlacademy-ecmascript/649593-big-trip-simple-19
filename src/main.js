import TripItineraryPresenter from './presenter/trip-itinerary-presenter';
import PointsModel from './model/points-model';
import generateMockData from './mock/generate-mock-data';

const pointsModel = new PointsModel(generateMockData);

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');

const tripItineraryPresenter = new TripItineraryPresenter({
  tripEventsContainer: siteTripEventsElement,
  filtersFormContainer: siteFiltersElement,
  pointsModel
});

tripItineraryPresenter.init();
